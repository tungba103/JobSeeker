import { useEffect, useState } from 'react';
import { OfferingJobItem, TagJob } from '../../components';
import { updateJob, deleteJob } from '../../API';

function ManageJob() {
  const [offeringjob, setOfferingjob] = useState([{}]);
  useEffect(() => {
    fetch('/job')
      .then((response) => response.json())
      .then((data) => {
        setOfferingjob(data);
      });
  }, [offeringjob]);

  return (
    <div className="mt-32 w-96 ml-20">
      <div className="flex flex-col justify-center">
        <p className="text-3xl font-bold mb-4">Manage Job</p>
        <table className="flex flex-col justify-center relative">
          <tbody className="">
            <tr>
              <td className="p-2 border-b border-r font-bold border-t border-l">Number</td>
              <td className="p-2 border-b border-r font-bold border-t">
                <div className="w-40">Name</div>
              </td>
              <td className="p-2 border-b border-r font-bold border-t">Salary</td>
              <td className="p-2 border-b border-r font-bold border-t">Level</td>
              <td className="p-2 border-b border-r font-bold border-t">
                <div className="w-28">Type Of Time</div>
              </td>
              <td className="p-2 border-b border-r font-bold border-t">
                <div className="w-28">Type Of Work</div>
              </td>
              <td className="p-2 border-b border-r font-bold border-t">Tag</td>
              <td className="p-2 border-b border-r font-bold border-t">
                <div className="w-40">Location</div>
              </td>
              <td className="p-2 border-b border-r font-bold border-t">Time</td>
              <td className="p-2 border-b border-r font-bold border-t">
                <div className="w-96">
                  <p>Description</p>
                </div>
              </td>
              <td className="p-2 border-b border-r font-bold border-t">
                <div className="w-32">
                  <p>From Company</p>
                </div>
              </td>
              <td className="p-2 border-b border-r font-bold border-t">
                <div className="w-20">
                  <p>Status</p>
                </div>
              </td>
              <td className="p-2 border-b border-r border-t font-bold">Manage</td>
            </tr>
            {typeof offeringjob === 'undefined' ? (
              <h1>Loading</h1>
            ) : (
              offeringjob.map((job, index) => {
                return (
                  <tr key={index}>
                    <td className="p-2 border-b border-r border-t border-l">{index}</td>
                    <td className="p-2 border-b border-r border-t">{job.name}</td>
                    <td className="p-2 border-b border-r border-t">{job.salary}</td>
                    <td className="p-2 border-b border-r border-t">{job.level}</td>
                    <td className="p-2 border-b border-r border-t">{job.typeOfTime}</td>
                    <td className="p-2 border-b border-r border-t">{job.typeOfWork}</td>
                    <td className="p-2 border-b border-r border-t">
                      {job.tags}
                      {/* {job.tags.map((tag, index) => {
                        return (
                          <div className="my-2">
                            <TagJob value={tag} />
                          </div>
                        );
                      })} */}
                    </td>
                    <td className="p-2 border-b border-r border-t">{job.location}</td>
                    <td className="p-2 border-b border-r border-t">{job.time}</td>
                    <td className="w-96 p-4 border-b border-r border-t">
                      <div className="h-32 overflow-scroll">
                        <p>{job.description}</p>
                      </div>
                    </td>
                    <td className=" p-4 border-b border-r border-t">
                      <p>{job.fromCompany}</p>
                    </td>
                    <td className=" p-4 border-b border-r border-t">
                      <p>{job.status}</p>
                    </td>
                    <td className="p-2 border-b border-r border-t">
                      {job.status !== 'Approving' && <p className="text-gray-50 border  px-4 py-2 rounded-3xl font-bold bg-blue-600 mb-1 hover:text-white">Accepted</p>}
                      {job.status === 'Approving' && (
                        <button
                          onClick={() =>
                            updateJob(job.idJob, job.name, job.salary, job.level, job.typeOfTime, job.typeOfWork, job.tags, job.location, job.time, job.description, job.fromCompany, 'Pending')
                          }
                          className="text-gray-50 border bg-blue-500 px-4 py-2 rounded-3xl font-bold hover:bg-blue-600 mb-1 hover:text-white"
                        >
                          Accept
                        </button>
                      )}
                      {job.status !== 'Approving' && (
                        <button onClick={() => deleteJob(job.idJob)} className="text-gray-50 border bg-red-500 px-4 py-2 rounded-3xl font-bold hover:bg-red-600 ml-2 hover:text-white">
                          Remove
                        </button>
                      )}
                      {job.status === 'Approving' && (
                        <button onClick={() => deleteJob(job.idJob)} className="text-gray-50 border bg-red-500 px-4 py-2 rounded-3xl font-bold hover:bg-red-600 ml-2 hover:text-white">
                          Deny
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageJob;
