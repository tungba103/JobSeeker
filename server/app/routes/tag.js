module.exports = (router) => {
  var TagController = require('../controllers/tagController');

  router.get('/tag', TagController.getAllTag);
  router.post('/tag/create/:name', TagController.addTag);
};
