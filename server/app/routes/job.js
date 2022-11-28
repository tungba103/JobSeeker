module.exports = (router) => {
  var JobController = require('../controllers/jobController');

  router.get('/job', JobController.getAllJob);
  router.get('/job/detail/:idJob', JobController.getJob);
  router.delete('/job/delete/:idJob', JobController.deleteJob);
  router.post('/job/create', JobController.createJob);
  router.put('/job/update', JobController.updateJob);
};
