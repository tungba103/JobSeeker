import { faCoins, faHeart, faTags } from '@fortawesome/free-solid-svg-icons';
import InfoItem from './InfoItem';
import TagJob from '../TagJob/TagJob';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function JobItem(props) {
  const [companies, setCompanies] = useState();
  useEffect(() => {
    fetch('/company')
      .then((response) => response.json())
      .then((data) => {
        setCompanies(data);
      });
  }, []);
  return (
    <div
      onClick={() => {
        props.jobHandle();
      }}
      className="flex justify-start items-center border-t border-b py-6 border-gray-300 cursor-pointer hover:border-red-400"
    >
      <div className="flex flex-col justify-center items-center pl-10 pr-8">
        {typeof companies === 'undefined' ? (
          <img className="w-32 h-32" src="https://cdn-icons-png.flaticon.com/512/3061/3061341.png" />
        ) : (
          companies.map((company, i) => {
            if (company.username === props.fromCompany)
              return (
                <Link key={i} to={`/company/detail/${company.username}`}>
                  <img className="w-32 h-32" src={company.image} />
                </Link>
              );
          })
        )}
      </div>
      <div className="flex flex-col justify-center items-start w-96">
        <p className="text-xl font-bold ">{props.name}</p>
        <InfoItem icon={faCoins} content={props.salary} color="text-green-500" />
        <div className="flex justify-center items-center mt-4">
          {/* {props.tags.map((tag, i) => {
            return <TagJob value={tag} />;
          })} */}
        </div>
      </div>
      <div className="flex flex-col">
        <p className="w-96">Location: {props.location}</p>
        <p className="mt-6">Date: {props.time}</p>
      </div>
    </div>
  );
}

export default JobItem;
