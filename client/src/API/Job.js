// useEffect(() => {
//     fetch('/job')
//       .then((response) => response.json())
//       .then((data) => {
//         setBackendData(data);
//       });
//   }, [backendData]);
const addJob = (name, salary, level, typeOfTime, typeOfWork, tags, location, time, description, fromCompany, status) => {
  fetch('/job/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: name,
      salary: salary,
      level: level,
      typeOfTime: typeOfTime,
      typeOfWork: typeOfWork,
      tags: tags,
      location: location,
      time: time,
      description: description,
      fromCompany: fromCompany,
      status: status,
    }),
  }).then(() => {
    console.log('new Job added');
  });
};
const updateJob = (idJob, name, salary, level, typeOfTime, typeOfWork, tags, location, time, description, fromCompany, status) => {
  fetch('/job/update', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      idJob: idJob,
      name: name,
      salary: salary,
      level: level,
      typeOfTime: typeOfTime,
      typeOfWork: typeOfWork,
      tags: tags,
      location: location,
      time: time,
      description: description,
      fromCompany: fromCompany,
      status: status,
    }),
  }).then(() => {
    console.log('Job updated');
  });
};
const deleteJob = (username) => {
  fetch('/job/delete/' + username, {
    method: 'DELETE',
  }).then(() => {
    console.log('delete Job');
  });
};

export { addJob, updateJob, deleteJob };
