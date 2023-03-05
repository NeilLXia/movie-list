const router = require('express').Router();
const controller = require('./controller/httpRequestHandler.js');

router.get('/', controller.get);
router.post('/', controller.post);
router.put('/', controller.put);

module.exports = router;