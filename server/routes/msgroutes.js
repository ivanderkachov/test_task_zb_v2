const controller = require('../controllers/controller')
const router = require('express').Router()
const { validateMessageBody } = require('../services/validation/validation.js');

router
  .get('/', controller.getAll)
  .post('/',validateMessageBody, controller.createOne)


module.exports = router
