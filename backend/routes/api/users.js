const express = require("express");
const asyncHandler = require("express-async-handler");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User, Registration, Genre, Type, Venue, Venue_type } = require("../../db/models");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { singlePublicFileUpload, singleMulterUpload } = require("../../awsS3");

const router = express.Router();

const validateSignup = [
  check("email")
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("Please provide a valid email."),
  check("username")
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage("Please provide a username with at least 4 characters."),
  check("username").not().isEmail().withMessage("Username cannot be an email."),
  check("password")
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage("Password must be 6 characters or more."),
  handleValidationErrors,
];

router.post(
  "/",
  singleMulterUpload("image"),
  validateSignup,
  asyncHandler(async (req, res) => {
    const { email, password, username, image } = req.body;
    if (image) {
      const url = await singlePublicFileUpload(req.file);
      const user = await User.signup({
        username,
        email,
        password,
        url,
      });
      setTokenCookie(res, user);
      return res.json({
        user,
      });
    } else {
      const { email, password, username } = req.body;
      const user = await User.signup({ email, username, password });
      await setTokenCookie(res, user);
      return res.json({
        user,
      });
    }
  })
);

router.get(
  "/:id/events/manage/all",
  asyncHandler(async (req, res) => {
    user_id = +req.params.id
    const event = await Event.findAll({
      where: {
        hoestId: user_id
      },
      include: [
        { model: User },
        { model: Genre, as: "event_genre" },
        { model: Type, as: "event_type" },
        { model: Registration },
        { model: Venue,
          include: [{ model: Venue_type, as: "venue_type" }]
        },
      ],
    });
    return res.json(event);
  })
);

module.exports = router;
