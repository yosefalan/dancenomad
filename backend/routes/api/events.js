const express = require("express");
const asyncHandler = require("express-async-handler");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const {
  Event,
  Genre,
  Event_genre,
  Type,
  Event_type,
  User,
  Venue,
  Venue_type,
  Venue_venue_type,
  Sequelize,
} = require("../../db/models");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { singlePublicFileUpload, singleMulterUpload, multipleMulterUpload, multiplePublicFileUpload } = require("../../awsS3");
const { EventBridge } = require("aws-sdk");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const events = await Event.findAll();
    return res.json(events);
  })
);

router.get(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const event = await Event.findByPk(+req.params.id,

      {
      include: [
        { model: User },
        { model: Genre, as: "event_genre" },
        { model: Type, as: "event_type" },

        { model: Venue,
          include: [{ model: Venue_type, as: "venue_type" }]
        },
      ],
    });
    return res.json(event);
  })
);

router.post(
  "/",
  multipleMulterUpload("files"),
  // validateSignup,
  asyncHandler(async (req, res) => {
    const {
      hostId,
      name,
      description,
      start_date,
      end_date,
      venue,
      venue_types,
      address,
      city,
      state,
      zip,
      country,
      lat,
      lng,
      genres,
      types,
      // image,
      // files
    } = req.body;
    const url = await multiplePublicFileUpload(req.files);
    const image_url = url[0]
    const video_url = url[1]
    const event = await Event.create({
      hostId,
      name,
      description,
      start_date,
      end_date,
      image_url,
      video_url
    });
    const eventId = event.id;
    const v = await Venue.create({
      name: venue,
      address,
      city,
      state,
      zip,
      country,
      lat,
      lng,
      eventId: eventId
    });
    const venueId = v.id;
    const g = JSON.parse(genres)
    g.map((genre) => {

      Event_genre.create({
        eventId,
        genreId: +genre.value,
      });
    });

    const t = JSON.parse(types)
    t.map((type) => {

      Event_type.create({
        eventId,
        typeId: +type.value,
      });
    });

    const vt = JSON.parse(venue_types)
    vt.map((venue_type) => {

      Venue_venue_type.create({
        venueId,
        venue_typeId: +venue_type.value,
      });
    });

    return res.json({
      event
    });
  })
);

router.put(
  '/:id',
  asyncHandler(async(req, res) => {
    const event_id = +req.params.id
    const event = await Event.findByPk(event_id);
    const {
      name,
      description,
      start_date,
      end_date,
      genres,
      types,
    } = req.body;
    await event.update({
      name,
      description,
      start_date,
      end_date,
    });

    await Event_genre.destroy({
      where: {
        eventId: event_id
      }
    });

    genres.map((genre) => {

      Event_genre.create({
        eventId: event_id,
        genreId: +genre.value,
      });
    });

    await Event_type.destroy({
      where: {
        eventId: event_id
      }
    });

    types.map((type) => {

      Event_type.create({
        eventId: event_id,
        typeId: +type.value,
      });
    });

    return res.json(event);
  })
);

router.put(
  '/:id/venue',
  asyncHandler(async(req, res) => {
    const event_id = +req.params.id
    const {
      venue,
      venue_types,
      address,
      city,
      state,
      zip,
      country,
      lat,
      lng,
    } = req.body;

    const v = await Venue.update({
      name: venue,
      venue_types,
      address,
      city,
      state,
      zip,
      country,
      lat,
      lng,
    },
    {
      returning: true,
      plain: true,
      where: {
        eventId: event_id
      }
    })

    const v_id = v[1].dataValues.id
    await Venue_venue_type.destroy({
      where: {
        venueId: v_id
      }
    });

    venue_types.map((venue_type) => {

      Venue_venue_type.create({
        venueId: v_id,
        venue_typeId: +venue_type.value,
      });
    });

    return res.json(v);
  })
);

router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    console.log("********DESTROY EVENT API ROUTE")
    event_id = +req.params.id
    await Event.destroy( {where: {id: event_id}});
    await Event_genre.destroy( {where: {eventId: event_id}});
    await Event_type.destroy({where: {eventId: event_id}})
    await Venue.destroy({where: {eventId: event_id}})
    // await Event.destroy({where: {venueId: venue.id}})
  })
);

module.exports = router;
