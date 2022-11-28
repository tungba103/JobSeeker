import { useEffect, useState } from 'react';
import { addAccount, addCompany, addCandidate, deleteAccount, deleteCandidate, deleteCompany } from '../../API';

function ManageAccount() {
  const [newAccountForm, setNewAccountForm] = useState('hidden');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [role, setRole] = useState('candidate');

  const [backendData, setBackendData] = useState([{}]);
  useEffect(() => {
    fetch('/account')
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, [backendData]);

  return (
    <div className="mt-32 w-96 ml-96">
      <div className="flex flex-col justify-center">
        <p className="text-3xl font-bold ">Manage account</p>
        <div className="relative">
          <div className="px-6 py-4 hover:text-white font-bold">
            <button onClick={() => setNewAccountForm('block')} className="px-4 py-2 bg-blue-500 text-gray-50 hover:bg-blue-600 rounded-3xl my-2">
              Add Account
            </button>
          </div>
          <div className={`${newAccountForm} absolute w-96 h-fit top-0 left-40 bg-white  flex flex-col p-6 border rounded-xl`}>
            <div className="flex justify-center">
              <p className="text-xl font-bold mb-4">Create new Account</p>
            </div>
            <label className="text-lg mb-1">Username</label>
            <input className="border p-2" type="text" onChange={(event) => setUsername(event.target.value)} />
            <label className="text-lg mb-1">Password</label>
            <input className="border p-2" type="password" onChange={(event) => setPassword(event.target.value)} />
            <label className="text-lg mb-1">Retype Password</label>
            <input className="border p-2" type="password" onChange={(event) => setRePassword(event.target.value)} />
            <select className="border p-2 mt-6" onChange={(event) => setRole(event.target.value)}>
              <option defaultValue="selected" disabled hidden>
                Role
              </option>
              <option value="candidate">Candidate</option>
              <option value="company">Company</option>
              <option value="admin">Admin</option>
            </select>
            <div className="flex justify-center mt-2">
              <button
                onClick={() => {
                  for (let account of backendData) {
                    if (account.username == username && account.password == password) {
                      alert('Account already existed');
                    }
                  }
                  addAccount(username, password, role);
                  switch (role) {
                    case 'candidate':
                      addCandidate(username);
                      break;
                    case 'company':
                      addCompany(username);
                      break;
                    case 'admin':
                      console.log('Admin role');
                      break;
                    default:
                      console.log('Invalid role!');
                  }
                  alert('Create new account successfully');
                }}
                className="px-4 py-2 bg-blue-500 rounded-3xl mr-2 text-gray-50 hover:text-white font-bold hover:bg-blue-600"
              >
                Save
              </button>
              <button onClick={() => setNewAccountForm('hidden')} className="px-4 py-2 bg-blue-500 rounded-3xl text-gray-50 hover:text-white font-bold hover:bg-blue-600">
                Cancel
              </button>
            </div>
          </div>
          <table className="border bg-gray-50">
            <tbody className="">
              <tr>
                <td className="px-4 py-4 border-r border-b">Number</td>
                <td className="px-10 py-4 border-r border-b">Username</td>
                <td className="px-10 py-4 border-r border-b">Password</td>
                <td className="px-10 py-4 border-r border-b">Role</td>
                <td className="px-10 py-4 border-b">Manage</td>
              </tr>
              {backendData.map((account, i) => {
                return (
                  <tr key={i}>
                    <td className="px-10 py-4 border-r border-b">{i}</td>
                    <td className="px-10 py-4 border-r border-b">{account.username}</td>
                    <td className="px-10 py-4 border-r border-b">{account.password}</td>
                    <td className="px-10 py-4 border-b border-r">{account.role}</td>
                    <div className="px-10 py-4 border-b">
                      <button
                        onClick={() => {
                          deleteAccount(account.username);
                          switch (role) {
                            case 'candidate':
                              deleteCandidate(username);
                              break;
                            case 'company':
                              deleteCompany(username);
                              break;
                            case 'admin':
                              console.log('Delete admin role');
                              break;
                            default:
                              console.log('Invalid role!');
                          }
                        }}
                        className="px-4 py-2 bg-red-500 rounded-3xl my-2 hover:bg-red-600 font-bold text-gray-100 hover:text-white"
                      >
                        Delete
                      </button>
                    </div>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ManageAccount;
