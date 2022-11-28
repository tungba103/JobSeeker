import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { addAccount, addCandidate, addCompany } from '../../API';

function SignUp() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch('/account')
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('candidate');
  let navigate = useNavigate();

  const createAccount = (username, password) => {
    for (let account of backendData) {
      if (account.username === username && account.password === password) {
        alert('Account already existed');
        return navigate('/signup');
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
      default:
        console.log('Invalid role!');
    }
    alert('Sign up successfully');
    return navigate('/signin');
  };
  return (
    <div className="bg-grey-lighter mb-24 mt-44 flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md border text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <select
            onChange={(e) => {
              const selectedRole = e.target.value;
              setRole(selectedRole);
            }}
            className="block border border-grey-light w-full p-3 rounded mb-4"
          >
            <option value="candidate">As Candidate</option>
            <option value="company">As Company</option>
          </select>
          <input
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="Username"
            placeholder="Username"
          />

          <input
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
          />
          <input type="password" className="block border border-grey-light w-full p-3 rounded mb-4" name="confirm_password" placeholder="Confirm Password" />

          <button
            onClick={() => createAccount(username, password)}
            type="submit"
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Create Account
          </button>
        </div>

        <div className="text-grey-dark mt-6">
          Already have an account?
          <Link className="no-underline border-b text-blue-500 ml-1 border-blue text-blue" to="/signin">
            Log in
          </Link>
          .
        </div>
      </div>
    </div>
  );
}

export default SignUp;
