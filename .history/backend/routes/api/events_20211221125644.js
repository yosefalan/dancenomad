const express = require('express');
const asyncHandler = require('express-async-handler');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Event, Genre, Event_genre, Type, Event_type, User, Venue,Venue_type, Venue_venue_type  } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { singlePublicFileUpload, singleMulterUpload } = require('../../awsS3');


const router = express.Router();

router.get('/',
asyncHandler(async(req, res) => {
  const events = await Event.findAll();
  return res.json(events);
}));

router.get('/:id(\\d+)',
  asyncHandler(async(req, res) => {
    console.log("REQ PARAMS ID", req.params.id)

    const event = await Event.findByPk((+req.params.id),
    {
      include: [
        { model: User },
        { model: Genre,
          as: 'event_genre',
        },
        { model: Type,
          as: 'event_type',
        },

        { model: Venue,
          include:
            [{ model: Venue_type,
              as: 'venue_type'
            }]
        }
        ]
    });
    console.log("EVENT OBJECT:", event)
    return res.json(event);
  }));

  router.post(
    "/",
    singleMulterUpload("image"),
    singleMulterUpload("video"),
    // validateSignup,
    asyncHandler(async (req, res) => {
      const {
        hostId,
        name,
        description,
        start_date,
        end_date,
        venue,
        venue_type,
        city,
        state,
        country,
        lat,
        lng,
        selectedGenres,
        selectedTypes,
        image,
        video
      }  = req.body;

      const image_url = await singlePublicFileUpload(req.image);
      const video_url = await singlePublicFileUpload(req.video);
      const venue = 
      const event = await Event.create({
        hostId,
        venueId,
        name,
        description,
        start_date,
        end_date,
        image_url,
        video_url
      });

      setTokenCookie(res, user);

      return res.json({
        user,
      });
    })
  );


module.exports = router;
