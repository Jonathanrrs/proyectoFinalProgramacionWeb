const express = require('express');
const users = require('./users/usersRoutes');

const router = express.Router();
//router.use(express.json());

router.use('/', users);

module.exports = router;