import { Link, useParams } from 'react-router-dom';
import { AvatarNav } from '..';

function Header(props) {
  return (
    <div>
      <div className="z-10 fixed top-0 right-0 left-0 flex justify-between bg-gray-800 text-white px-80 py-4 text-xl items-center">
        <div className="flex justify-start items-center">
          <p className="font-bold mr-20 text-3xl cursor-pointer">
            {sessionStorage.getItem('permission') === 'viewer' && <Link to="/home">JobSeeker</Link>}
            {sessionStorage.getItem('permission') === 'admin' && <Link to="/admin">JobSeeker</Link>}
            {sessionStorage.getItem('permission') === 'candidate' && <Link to="/candidatehome">JobSeeker</Link>}
            {sessionStorage.getItem('permission') === 'company' && <Link to="/companyhome">JobSeeker</Link>}
          </p>
          {sessionStorage.getItem('permission') !== 'admin' && (
            <div className="flex justify-start items-center">
              <p className="mr-10 cursor-pointer">
                <Link to="/job">All Jobs</Link>
              </p>
              <p className="mr-10 cursor-pointer">
                <Link to="/company">All Company</Link>
              </p>
              <p className="mr-10 cursor-pointer">
                <Link to="/candidate">All Candidate</Link>
              </p>
            </div>
          )}
        </div>
        <div>
          {/* {typeof username == 'undefined' ? (
            <button className="cursor-pointer hover:underline">
              <Link to="/signin">Sign in</Link>
            </button>
          ) : (
            <Avatar />
          )} */}
          {sessionStorage.getItem('permission') == 'viewer' ? (
            <button className="cursor-pointer hover:underline">
              <Link to="/signin">Sign in</Link>
            </button>
          ) : (
            <AvatarNav />
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
