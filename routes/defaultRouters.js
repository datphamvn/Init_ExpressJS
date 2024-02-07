const express = require('express');
const router = express.Router();
const defaultController = require('../controllers/defaultController');
const { validateUserSchema } = require('../util/registerValidate');


router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'default';
    next();
})

router.get('/', defaultController.index);
router.get('/index.html', defaultController.index);


module.exports = router;

