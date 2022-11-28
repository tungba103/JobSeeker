// useEffect(() => {
//     fetch('/company')
//       .then((response) => response.json())
//       .then((data) => {
//         setBackendData(data);
//       });
//   }, [backendData]);
const addCompany = (username) => {
  fetch('/company/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: username }),
  }).then(() => {
    console.log('new Company added');
  });
};
const updateCompany = (username, name, image, email, location, jobsMain, contactInfo, intro, offeringJob, pendingCandidate) => {
  fetch('/company/update', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: username,
      name: name,
      image: image,
      email: email,
      location: location,
      jobsMain: jobsMain,
      contactInfo: contactInfo,
      intro: intro,
      offeringJob: offeringJob,
      pendingCandidate: pendingCandidate,
    }),
  }).then(() => {
    console.log('new Company added');
    alert('Company updated');
  });
};
const deleteCompany = (username) => {
  fetch('/company/delete/' + username, {
    method: 'DELETE',
  }).then(() => {
    console.log('delete Company');
  });
};

export { addCompany, updateCompany, deleteCompany };
