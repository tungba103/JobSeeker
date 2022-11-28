var Job = require('../model/jobModel');

exports.getAllJob = (req, res) => {
  Job.getAll((data) => {
    res.send(data);
  });
};
exports.getJob = (req, res) => {
  Job.getById(req.params.idJob, (data) => {
    res.send(data);
  });
};
exports.deleteJob = (req, res) => {
  Job.delete(req.params.idJob);
};
exports.createJob = (req, res) => {
  Job.create(req.body, (data) => {
    res.send(data);
  });
};
exports.updateJob = (req, res) => {
  Job.update(req.body, (data) => {
    res.send(data);
  });
};
