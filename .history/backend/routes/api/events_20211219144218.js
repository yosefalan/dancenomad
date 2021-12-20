const express = require('express');
const asyncHandler = require('express-async-handler');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Event } = require('../../db/models');
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
        { model: Event_genre },
        { model: Genre },
        { model: Event_type },
        { model: Type },
        { model: User },
        { model: Venue },
        { model: Venue_type },
        { model: Venue_venue_type },
      ]
    });
    console.log("EVENT OBJECT:", event)
    return res.json(event);
  }));




module.exports = router;
