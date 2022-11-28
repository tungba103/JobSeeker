const deleteAccount = (username) => {
  fetch('/account/delete/' + username, {
    method: 'DELETE',
  }).then(() => {
    console.log('delete account');
  });
};

useEffect(() => {
  fetch('/')
    .then((response) => response.json())
    .then((data) => {
      setData(data);
    });
}, [backendData]);
fetch('/account/create', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ username: username, password: password, role: role }),
}).then(() => {
  console.log('new account added');
});
