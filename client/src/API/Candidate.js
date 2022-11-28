// useEffect(() => {
//     fetch('/candidate')
//       .then((response) => response.json())
//       .then((data) => {
//         setBackendData(data);
//       });
//   }, [backendData]);
const addCandidate = (username) => {
  fetch('/candidate/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: username }),
  }).then(() => {
    console.log('new Candidate added');
  });
};
const updateCandidate = (username, name, image, email, contactInfo, workExperience, skills, education, summary, location, appliedJob, pendingJob) => {
  fetch('/candidate/update', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: username,
      name: name,
      image: image,
      email: email,
      contactInfo: contactInfo,
      workExperience: workExperience,
      skills: skills,
      education: education,
      summary: summary,
      location: location,
      appliedJob: appliedJob,
      pendingJob: pendingJob,
    }),
  }).then(() => {
    console.log('new Candidate updated');
    alert('Account updated');
  });
};
const deleteCandidate = (username) => {
  fetch('/candidate/delete/' + username, {
    method: 'DELETE',
  }).then(() => {
    console.log('delete Candidate');
    alert('Account deleted');
  });
};

export { addCandidate, updateCandidate, deleteCandidate };
