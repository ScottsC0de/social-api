const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

module.exports = router;

router.use((req, res) => {
    res.status(404).send('A 404 error has occured...');
});