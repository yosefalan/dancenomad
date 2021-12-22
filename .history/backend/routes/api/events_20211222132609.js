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
} = require("../../db/models");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { singlePublicFileUpload, singleMulterUpload } = require("../../awsS3");

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
    console.log("REQ PARAMS ID", req.params.id);

    const event = await Event.findByPk(+req.params.id, {
      include: [
        { model: User },
        { model: Genre, as: "event_genre" },
        { model: Type, as: "event_type" },

        { model: Venue, include: [{ model: Venue_type, as: "venue_type" }] },
      ],
    });
    return res.json(event);
  })
);

router.post(
  "/",
  singleMulterUpload("image"),
  // singleMulterUpload("video"),
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
      image,
      video,
    } = req.body;
    // const image_url = await singlePublicFileUpload(image);
    // const video_url = await singlePublicFileUpload(video);
    const v = await Venue.create({
      name: venue,
      address,
      city,
      state,
      zip,
      country,
      lat,
      lng,
    });
    const venueId = v.id;
    const event = await Event.create({
      hostId,
      venueId: venueId,
      name,
      description,
      start_date,
      end_date,
      // image_url,
      // video_url
    });

    const eventId = event.id;
    const g = JSON.parse(genres)
    console.log(Object.values(g))
    g.map((genre) => {

      Event_genre.create({
        eventId
        genreId: +genre.value,
      });
    });

    const t = JSON.parse(types)
    console.log(Object.values(t))
    t.map((type) => {

      Event_type.create({
        eventId: 99,
        typeId: +type.value,
      });
    });

    const vt = JSON.parse(venue_types)
    console.log(Object.values(vt))
    vt.map((venue_type) => {

      Venue_venue_type.create({
        venueId: 99,
        venue_typeId: +venue_type.value,
      });
    });

    return res.json({
      eventId,
    });
  })
);

module.exports = router;
