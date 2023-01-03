const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const homeRoute = require('./homeRoute')

router.use('/api', apiRoutes);
router.use('/', homeRoute);

module.exports = router;