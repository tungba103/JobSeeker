const db = require('../common/connect');
const Candidate = (candidate) => {};

Candidate.getAll = (result) => {
  db.query('SELECT * from candidate', (err, candidate) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    } else result(candidate);
  });
};

// Candidate.getById = (id, result) => {
//   db.query(`SELECT * from candidate where idCandidate = ${id}`, (err, candidate) => {
//     if (err) {
//       console.log('error: ', err);
//       result(null);
//       return;
//     } else {
//       console.log('hello: ' + candidate);
//       result(candidate);
//     }
//   });
// };

Candidate.getByUsername = (username, result) => {
  db.query(`SELECT * from candidate where username = '${username}'`, (err, candidate) => {
    if (err) {
      console.log('error: ', err);
      result(null);
      return;
    } else {
      console.log('hello: ' + candidate);
      result(candidate);
    }
  });
};

// Candidate.deleteById = (id, result) => {
//   db.query(`Delete from candidate where idCandidate = ${id}`, (err, candidate) => {
//     if (err) {
//       console.log('error: ', err);
//       result(null);
//       return;
//     } else {
//       console.log('hello: ' + candidate);
//       result(candidate);
//     }
//   });
// };
Candidate.deleteByUsername = (username) => {
  db.query(`Delete from candidate WHERE username = '${username}'`, (err, candidate) => {
    if (err) {
      console.log('error: ', err);
      return;
    } else {
      console.log('hello: ' + candidate);
      return;
    }
  });
};

Candidate.create = (ac, result) => {
  db.query(`INSERT INTO candidate (username) VALUES ('${ac.username}')`, (err, candidate) => {
    if (err) {
      console.log('error: ', err);
      result(null);
      return;
    } else {
      result(candidate);
    }
  });
};

Candidate.update = (ac, result) => {
  db.query(
    'UPDATE candidate SET name=?, image=?, email=?, contactInfo=?, workExperience=?, skills=?, education=?, summary=?, location=?, appliedJob=?, pendingJob=? where username =?',
    [ac.name, ac.image, ac.email, ac.contactInfo, ac.workExperience, ac.skills, ac.education, ac.summary, ac.location, ac.appliedJob, ac.pendingJob, ac.username],
    (err, candidate) => {
      if (err) {
        console.log('error: ', err);
        result(null);
        return;
      } else {
        result(candidate);
      }
    },
  );
};

module.exports = Candidate;
