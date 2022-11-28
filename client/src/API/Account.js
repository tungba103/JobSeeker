// useEffect(() => {
//     fetch('/account')
//       .then((response) => response.json())
//       .then((data) => {
//         setBackendData(data);
//       });
//   }, [backendData]);
const addAccount = (username, password, role) => {
  fetch('/account/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: username, password: password, role: role }),
  }).then(() => {
    console.log('new account added');
    alert('New account added');
  });
};
const updateAccount = (username, password, role) => {
  fetch('/account/update', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: username, password: password, role: role }),
  }).then(() => {
    console.log('New account updated');
    alert('account updated');
  });
};
const deleteAccount = (username) => {
  fetch('/account/delete/' + username, {
    method: 'DELETE',
  }).then(() => {
    console.log('delete account');
    alert('account deleted');
  });
};

export { addAccount, updateAccount, deleteAccount };
