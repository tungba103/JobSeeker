import { faBuildingUser, faCalendarXmark, faCoins, faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TagJob from '../TagJob/TagJob';
import InfoItem from './InfoItem';
import { useEffect, useState } from 'react';
import { updateJob } from '../../API';

function JobContentItem(props) {
  const tags = props.tags.split(',');
  const updateJobStatus = (value) => {
    updateJob(props.idJob, props.name, props.salary, props.level, props.typeOfTime, props.typeOfWork, props.tags, props.location, props.time, props.description, props.fromCompany, value);
  };
  return (
    <div className="pt-4 px-4 bg-white border  w-96">
      <p className="text-2xl font-bold">{props.name}</p>
      <p className="text-md text-gray-500">{props.name}</p>
      {sessionStorage.getItem('permission') !== 'company' && (
        <div className="pb-4 py-4 flex justify-start items-center">
          {props.status === 'Applied' && <button className={` text-xl px-4 py-2 border w-full mr-4 rounded-xl bg-gray-500 text-gray-50 hover:text-white font-bold`}>Applied</button>}
          {props.status === 'Ready' && (
            <button onClick={() => updateJobStatus('Pending')} className={` text-xl px-4 py-2 border w-full mr-4 rounded-xl bg-red-500 hover:bg-red-600 text-gray-50 hover:text-white font-bold`}>
              Apply now
            </button>
          )}
          {props.status === 'Pending' && (
            <button onClick={() => updateJobStatus('Ready')} className={`text-xl px-4 py-2 border w-full mr-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-gray-50 hover:text-white font-bold`}>
              Pending
            </button>
          )}
        </div>
      )}
      <div className="px-2 py-4 border-t border-b">
        <div className="flex justify-start pb-4 ">
          {typeof tags === 'undefined' ? (
            <h1>Loading</h1>
          ) : (
            tags.map((tag, i) => {
              return <TagJob key={i} value={tag} />;
            })
          )}
        </div>
        <div>
          <InfoItem icon={faCoins} content={props.salary} color="text-green-500" />
          <InfoItem icon={faLocationPin} content={props.level} color="text-black" />
          <InfoItem icon={faLocationPin} content={props.location} color="text-black" />
          <InfoItem icon={faBuildingUser} content={props.typeOfTime} color="text-black" />
          <InfoItem icon={faBuildingUser} content={props.typeOfWork} color="text-black" />
          <InfoItem icon={faCalendarXmark} content={props.time} color="text-blue-500" />
        </div>
      </div>
      <div className="pt-4">
        <p className="text-3xl font-bold">Job Description</p>
        <ul className="ml-10">
          <li className="list-disc py-1">{props.description}</li>
        </ul>
      </div>
    </div>
  );
}

export default JobContentItem;
