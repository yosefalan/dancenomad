const express = require("express");
const asyncHandler = require("express-async-handler");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const {
  Registration,
  Sequelize,
} = require("../../db/models");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");


const router = express.Router();

router.post(
  '/',
  asyncHandler(async function (req, res) {
    const reg = await Registration.create(req.body)
    return res.json({ reg });
  })
);


module.exports = router;
