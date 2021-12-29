const express = require("express");
const asyncHandler = require("express-async-handler");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const {
  Event,
  Registration,
  User,
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

router.get(
  "/users/:id(\\d+)",
  asyncHandler(async function (req, res) {
    const user_id = +req.params.id;
    const regs = await Registration.findAll({
      where: {
        userId: user_id,
      },
      include: [
        { model: Event }
      ],
    });
    return res.json( regs );
  })
);


router.get(
  "/events/:id",
  asyncHandler(async function (req, res) {
    const event_id = +req.params.id;
    const regs = await Registration.findAll({
      where: {
        eventId: event_id,
      },
      include: [
        { model: Event },
        { model: User }
      ],
    });
    return res.json( regs );
  })
);

router.put(
  '/:id',
  asyncHandler(async(req, res) => {

    const reg = await Registration.findByPk(+req.params.id);
    await reg.update(req.body);
    return res.json(reg);
  })
);

router.delete(
  '/:id',
  asyncHandler(async(req, res) => {
    const id = +req.params.id
    const reg = await Registration.findByPk(id);
    reg.destroy()
    return res.json({ reg })
  })
);

module.exports = router;
