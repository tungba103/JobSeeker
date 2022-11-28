import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Dropdown, Avatar } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';
function AvatarNav(props) {
  let navigate = useNavigate();
  return (
    <div className="flex justify-start items-center text-base relative cursor-pointer ">
      <p className="mr-1">{sessionStorage.getItem('username')}</p>
      <Dropdown className="absolute top-10 -left-12" label={<Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />} inline>
        {sessionStorage.getItem('permission') === 'admin' && (
          <Dropdown.Item className="w-32">
            <Link to={'/manageaccount'}>Manage Accounts</Link>
          </Dropdown.Item>
        )}
        {sessionStorage.getItem('permission') === 'admin' && (
          <Dropdown.Item className="w-32">
            <Link to={'/managejob'}>Manage Jobs</Link>
          </Dropdown.Item>
        )}
        {sessionStorage.getItem('permission') === 'candidate' && (
          <Dropdown.Item className="w-32">
            <Link to={'/candidateprofile'}>My Account</Link>
          </Dropdown.Item>
        )}
        {sessionStorage.getItem('permission') === 'candidate' && (
          <Dropdown.Item className="w-32">
            <Link to={'/appliedjob'}>Apply Jobs</Link>
          </Dropdown.Item>
        )}
        {sessionStorage.getItem('permission') === 'candidate' && (
          <Dropdown.Item className="w-32">
            <Link to={'/pendingjob'}>Pending Jobs</Link>
          </Dropdown.Item>
        )}
        {sessionStorage.getItem('permission') === 'company' && (
          <Dropdown.Item className="w-32">
            <Link to={'/companyprofile'}>My Account</Link>
          </Dropdown.Item>
        )}
        {sessionStorage.getItem('permission') === 'company' && (
          <Dropdown.Item className="w-32">
            <Link to={'/offeringjob'}>My Jobs Offering</Link>
          </Dropdown.Item>
        )}
        {sessionStorage.getItem('permission') === 'company' && (
          <Dropdown.Item className="w-32">
            <Link to={'/pendingcandidate'}>Pending Candidates</Link>
          </Dropdown.Item>
        )}
        <Dropdown.Item
          onClick={() => {
            localStorage.removeItem('accessToken');
            navigate('/signin');
          }}
        >
          Sign out
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
}

export default AvatarNav;
