var Candidate = require('../model/candidateModel');

exports.getAllCandidate = (req, res) => {
  Candidate.getAll((data) => {
    res.send(data);
  });
};
exports.getCandidate = (req, res) => {
  Candidate.getByUsername(req.params.username, (data) => {
    res.send(data);
  });
};
exports.deleteCandidate = (req, res) => {
  Candidate.deleteByUsername(req.params.username);
  res.send('Deleted Candidate');
};
exports.createCandidate = (req, res) => {
  Candidate.create(req.body, (data) => {
    res.send(data);
  });
};
exports.updateCandidate = (req, res) => {
  Candidate.update(req.body, (data) => {
    res.send(data);
  });
};
