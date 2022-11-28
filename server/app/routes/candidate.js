module.exports = (router) => {
  var CandidateController = require('../controllers/candidateController');
  router.get('/candidate', CandidateController.getAllCandidate);
  router.get('/candidate/detail/:username', CandidateController.getCandidate);
  router.delete('/candidate/delete/:username', CandidateController.deleteCandidate);
  router.post('/candidate/create', CandidateController.createCandidate);
  router.put('/candidate/update', CandidateController.updateCandidate);
};
