const express = require('express');
const router = express.Router();
const {validate} = require('../middlewares/auth')
const {registerUser, updateUser} = require('../controllers/register')

router.post('/', validate, registerUser)

  router.put('/', updateUser)

  module.exports = router