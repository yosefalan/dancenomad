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
  console.log("*********EVENTS:*******")
  return res.json(events);
}));

router.get('/:id(\\d+)',
  asyncHandler(async(req, res) => {

    const event = await Event.findByPk((+req.params.id),
    {
      include: [
        { model: Event_genre },
        { model: Event_genre },
        { model: Event_type },
        { model: User },
        { model: Venue },
      ]
    });
    return res.json(spot);
  }));




module.exports = router;
