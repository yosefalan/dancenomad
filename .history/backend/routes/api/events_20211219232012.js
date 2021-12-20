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
    // {    include: { all: true, nested: true }})
    // {    include:
    //   { model: Venue },
    // })


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
              where: 'venue_type'
            }]
        }
        ]
    });
    console.log("EVENT OBJECT:", event)
    return res.json(event);
  }));




module.exports = router;
