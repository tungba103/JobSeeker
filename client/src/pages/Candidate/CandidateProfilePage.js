import { useEffect, useState } from 'react';
import { updateAccount, updateCandidate } from '../../API';

function CandidateProfilePage() {
  const [accountData, setAccountData] = useState();
  const [candidateData, setCandidateData] = useState();

  const [profilePage, setProfilePage] = useState('block');
  const [accountPage, setAccountPage] = useState('hidden');
  const [passwordPage, setPasswordPage] = useState('hidden');

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    fetch('/account/detail/' + sessionStorage.getItem('username'))
      .then((response) => response.json())
      .then((data) => {
        setAccountData(data);
      });
  }, []);
  useEffect(() => {
    fetch('/candidate/detail/' + sessionStorage.getItem('username'))
      .then((response) => response.json())
      .then((data) => {
        setCandidateData(data);
      });
  }, []);
  const [summary, setSummary] = useState('Summary');
  const [contactInfo, setContactInfo] = useState('Contact Info');
  const [workExperience, setWorkExperience] = useState('Work Experience');
  const [skills, setSkills] = useState('Skills');
  const [education, setEducation] = useState('Education');
  const [location, setLocation] = useState('Location');
  const [password, setPassword] = useState('Password');

  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [reTypeNewPassword, setReTypeNewPassword] = useState();

  const updateNav = (nav) => {
    if (nav == 'profilePage') {
      setProfilePage('block');
      setAccountPage('hidden');
      setPasswordPage('hidden');
    } else if (nav == 'accountPage') {
      setProfilePage('hidden');
      setAccountPage('block');
      setPasswordPage('hidden');
    } else if (nav == 'passwordPage') {
      setProfilePage('hidden');
      setAccountPage('hidden');
      setPasswordPage('block');
    }
  };
  const submitAccount = () => {
    updateCandidate(
      candidateData[0].username,
      name,
      candidateData[0].image,
      email,
      candidateData[0].contactInfo,
      candidateData[0].workExperience,
      candidateData[0].skills,
      candidateData[0].education,
      candidateData[0].summary,
      candidateData[0].location,
      candidateData[0].appliedJob,
      candidateData[0].pendingJob,
    );
  };
  const submitProfile = () => {
    updateCandidate(
      candidateData[0].username,
      candidateData[0].name,
      image,
      candidateData[0].email,
      contactInfo,
      workExperience,
      skills,
      education,
      summary,
      location,
      candidateData[0].appliedJob,
      candidateData[0].pendingJob,
    );
  };
  const changePassword = () => {
    if (oldPassword === accountData[0].password && newPassword === reTypeNewPassword) {
      updateAccount(accountData[0].username, newPassword, accountData[0].role);
    } else {
      console.log(accountData[0].password);
      console.log(oldPassword);
      console.log(newPassword);
      console.log(reTypeNewPassword);
      alert('Your password or retype password is wrong, please try again!');
    }
  };
  return (
    <div className="flex justify-center mx-40 mt-32">
      <div className="bg-white border px-4 py-2">
        <div>
          <span onClick={() => updateNav('profilePage')} className="mx-1 font-bold text-xl border-b cursor-pointer hover:border-red-500 px-2">
            Profile
          </span>
          <span onClick={() => updateNav('accountPage')} className="mx-1 font-bold text-xl border-b cursor-pointer hover:border-red-500 px-2">
            Edit Account
          </span>
          <span onClick={() => updateNav('passwordPage')} className="mx-1 font-bold text-xl border-b cursor-pointer hover:border-red-500 px-2">
            Edit Password
          </span>
        </div>
        {typeof candidateData === 'undefined' ? (
          <div className={profilePage}>Loading...</div>
        ) : (
          <div className={profilePage}>
            <div>
              <p className="text-xl font-bold mt-4">Account</p>
              <div className="flex flex-col">
                <div className="py-2 w-32 mb-2">
                  <span className="font-bold mr-2">Name:</span>
                  <input onChange={(e) => setName(e.target.value)} type="text" className="w-96 p-1 bg-gray-50 border focus:outline-none" defaultValue={candidateData[0].name} />
                </div>
                <div className="py-2 w-32 mb-2">
                  <span className="font-bold mr-3">Email:</span>
                  <input onChange={(e) => setEmail(e.target.value)} type="text" className="w-96 p-1 bg-gray-50 border focus:outline-none" defaultValue={candidateData[0].email} />
                </div>
              </div>
            </div>

            <div className="flex justify-center my-4 font-bold">
              <button onClick={() => submitAccount()} className="bg-red-500 text-gray-100 hover:text-white hover:bg-red-600 px-4 py-2 rounded-xl">
                Save
              </button>
            </div>
          </div>
        )}
        {typeof candidateData === 'undefined' ? (
          <h1>Loading....</h1>
        ) : (
          <div className={accountPage}>
            <div>
              <p className="text-xl font-bold mt-4 ">Image:</p>
              <div>
                <input onChange={(e) => setImage(e.target.value)} type="text" className="w-96 bg-gray-50 border focus:outline-none p-2" defaultValue={candidateData[0].image} />
              </div>
            </div>
            <div>
              <p className="text-xl font-bold mt-4 ">Summary</p>
              <div>
                <textarea onChange={(e) => setSummary(e.target.value)} className="w-96 bg-gray-50 border focus:outline-none p-2" defaultValue={candidateData[0].summary} />
              </div>
            </div>
            <div>
              <p className="text-xl font-bold mt-4 ">Contact Infomation</p>
              <div>
                <textarea onChange={(e) => setContactInfo(e.target.value)} className="w-96 bg-gray-50 border focus:outline-none p-2" defaultValue={candidateData[0].contactInfo} />
              </div>
            </div>
            <div>
              <p className="text-xl font-bold mt-4 ">Work Experience</p>
              <div>
                <textarea onChange={(e) => setWorkExperience(e.target.value)} className="w-96 bg-gray-50 border focus:outline-none p-2" defaultValue={candidateData[0].workExperience} />
              </div>
            </div>
            <div>
              <p className="text-xl font-bold mt-4 ">Skills</p>
              <div>
                <textarea onChange={(e) => setSkills(e.target.value)} className="w-96 bg-gray-50 border focus:outline-none p-2" defaultValue={candidateData[0].skills} />
              </div>
            </div>
            <div>
              <p className="text-xl font-bold mt-4 ">Education</p>
              <div>
                <textarea onChange={(e) => setEducation(e.target.value)} className="w-96 bg-gray-50 border focus:outline-none p-2" defaultValue={candidateData[0].education} />
              </div>
            </div>
            <div>
              <p className="text-xl font-bold mt-4 ">Location</p>
              <div>
                <textarea onChange={(e) => setLocation(e.target.value)} className="w-96 bg-gray-50 border focus:outline-none p-2" defaultValue={candidateData[0].location} />
              </div>
            </div>
            <div className="flex justify-center my-4 font-bold">
              <button onClick={() => submitProfile()} className="bg-red-500 text-gray-100 hover:text-white hover:bg-red-600 px-4 py-2 rounded-xl">
                Save
              </button>
            </div>
          </div>
        )}
        <div className={passwordPage}>
          <div>
            <p className="text-xl font-bold mt-4">Account</p>
            <div className="flex flex-col">
              <div className="py-2 w-56 mb-2">
                <span className="font-bold mr-2">Old password:</span>
                <input onChange={(e) => setOldPassword(e.target.value)} type="password" className="w-96 p-1 bg-gray-50 border focus:outline-none" />
              </div>
              <div className="py-2 w-56 mb-2">
                <span className="font-bold mr-3">New password:</span>
                <input onChange={(e) => setNewPassword(e.target.value)} type="password" className="w-96 p-1 bg-gray-50 border focus:outline-none" />
              </div>
              <div className="py-2 w-56 mb-2">
                <span className="font-bold mr-3">Retype new password:</span>
                <input onChange={(e) => setReTypeNewPassword(e.target.value)} type="password" className="w-96 p-1 bg-gray-50 border focus:outline-none" />
              </div>
            </div>
          </div>

          <div className="flex justify-center my-4 font-bold">
            <button onClick={() => changePassword()} className="bg-red-500 text-gray-100 hover:text-white hover:bg-red-600 px-4 py-2 rounded-xl">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CandidateProfilePage;
