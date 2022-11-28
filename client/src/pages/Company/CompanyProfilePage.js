import { useEffect, useState } from 'react';
import { updateAccount, updateCompany } from '../../API';

function CompanyProfilePage() {
  const [accountData, setAccountData] = useState();
  const [companyData, setCompanyData] = useState();

  const [profilePage, setProfilePage] = useState('block');
  const [accountPage, setAccountPage] = useState('hidden');
  const [passwordPage, setPasswordPage] = useState('hidden');

  useEffect(() => {
    fetch('/account/detail/' + sessionStorage.getItem('username'))
      .then((response) => response.json())
      .then((data) => {
        setAccountData(data);
      });
  }, []);
  useEffect(() => {
    fetch('/company/detail/' + sessionStorage.getItem('username'))
      .then((response) => response.json())
      .then((data) => {
        setCompanyData(data);
      });
  }, []);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [image, setImage] = useState();
  const [jobsMain, setJobsMain] = useState();
  const [location, setLocation] = useState('Location');
  const [contactInfo, setContactInfo] = useState('Contact Info');
  const [intro, setIntro] = useState('Work Experience');

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
    updateCompany(
      companyData[0].username,
      name,
      companyData[0].image,
      email,
      companyData[0].location,
      companyData[0].jobsMain,
      companyData[0].contactInfo,
      companyData[0].introduction,
      companyData[0].offeringJob,
      companyData[0].pendingCandidate,
    );
  };
  const submitProfile = () => {
    updateCompany(
      companyData[0].username,
      companyData[0].name,
      image,
      companyData[0].email,
      location,
      jobsMain,
      contactInfo,
      intro,
      contactInfo,
      companyData[0].offeringJob,
      companyData[0].pendingCandidate,
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
        {typeof companyData === 'undefined' ? (
          <div className={profilePage}>Loading...</div>
        ) : (
          <div className={profilePage}>
            <div>
              <p className="text-xl font-bold mt-4">Account</p>
              <div className="flex flex-col">
                <div className="py-2 w-32 mb-2">
                  <span className="font-bold mr-2">Name:</span>
                  <input onChange={(e) => setName(e.target.value)} type="text" className="w-96 p-1 bg-gray-50 border focus:outline-none" defaultValue={companyData[0].name} />
                </div>
                <div className="py-2 w-32 mb-2">
                  <span className="font-bold mr-3">Email:</span>
                  <input onChange={(e) => setEmail(e.target.value)} type="text" className="w-96 p-1 bg-gray-50 border focus:outline-none" defaultValue={companyData[0].email} />
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
        {typeof companyData === 'undefined' ? (
          <h1>Loading...</h1>
        ) : (
          <div className={accountPage}>
            <div>
              <p className="text-xl font-bold mt-4 ">Image Link:</p>
              <div>
                <input onChange={(e) => setImage(e.target.value)} type="text" className="w-96 bg-gray-50 border focus:outline-none p-2" defaultValue={companyData[0].image} />
              </div>
            </div>
            <div>
              <p className="text-xl font-bold mt-4 ">Jobs Main:</p>
              <div>
                <input onChange={(e) => setJobsMain(e.target.value)} type="text" className="w-96 bg-gray-50 border focus:outline-none p-2" defaultValue={companyData[0].jobsMain} />
              </div>
            </div>
            <div>
              <p className="text-xl font-bold mt-4 ">Location</p>
              <div>
                <input onChange={(e) => setLocation(e.target.value)} type="text" className="w-96 bg-gray-50 border focus:outline-none p-2" defaultValue={companyData[0].location} />
              </div>
            </div>
            <div>
              <p className="text-xl font-bold mt-4 ">Contact Infomation</p>
              <div>
                <textarea onChange={(e) => setContactInfo(e.target.value)} className="w-96 bg-gray-50 border focus:outline-none p-2" defaultValue={companyData[0].contactInfo} />
              </div>
            </div>
            <div>
              <p className="text-xl font-bold mt-4 ">Introduction</p>
              <div>
                <textarea onChange={(e) => setIntro(e.target.value)} className="w-96 bg-gray-50 border focus:outline-none p-2" defaultValue={companyData[0].intro} />
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

export default CompanyProfilePage;
