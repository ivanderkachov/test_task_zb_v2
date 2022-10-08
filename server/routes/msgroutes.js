const controller = require('../controllers/controller')
const router = require('express').Router()

router
  .get('/', controller.getAll)
  .post('/', controller.createOne)


module.exports = router
