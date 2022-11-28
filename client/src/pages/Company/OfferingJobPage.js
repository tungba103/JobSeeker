import { useEffect, useState } from 'react';
import { OfferingJobItem, TagJob } from '../../components';
import { addJob, deleteJob } from '../../API';

function OfferingJobPage() {
  const [newOfferForm, setNewOfferForm] = useState('hidden');
  const [jobs, setJobs] = useState([{}]);
  const [name, setName] = useState('Name');
  const [salary, setSalary] = useState('Salary');
  const [tag, setTag] = useState('Tag');
  const [location, setLocation] = useState('Location');
  const [time, setTime] = useState('Time');
  const [description, setDescription] = useState('Description');

  useEffect(() => {
    fetch('/job')
      .then((response) => response.json())
      .then((data) => {
        setJobs(data);
      });
  }, [jobs]);
  return (
    <div className="mt-32 flex flex-col items-center justify-center">
      <p className="text-3xl font-bold">Offering Job</p>
      <div className="flex flex-col justify-center relative">
        <div className="flex justify-end">
          <button onClick={() => setNewOfferForm('block')} className="px-4 py-2 bg-blue-500 rounded-3xl my-4 font-bold text-white">
            Add Job
          </button>
        </div>
        <div className={`${newOfferForm} absolute w-96 h-fit -top-20 left-96 bg-white  flex flex-col p-6 border rounded-xl`}>
          <div className="flex justify-center">
            <p className="text-xl font-bold mb-4">Add new job</p>
          </div>
          <label className="text-lg mb-1">Name</label>
          <input onChange={(e) => setName(e.target.value)} className="border p-2" type="text" />
          <label className="text-lg mb-1">Salary</label>
          <input onChange={(e) => setSalary(e.target.value)} className="border p-2" type="text" />
          <select className="border p-2 mt-2">
            <option selected="selected" disabled hidden>
              Level
            </option>
            <option>Fresher</option>
            <option>Junior</option>
            <option>Senior</option>
          </select>
          <div className="flex justify-center items-center my-4">
            <select className="border p-2 mt-2 mr-10">
              <option selected="selected" disabled hidden>
                Type Of Work
              </option>
              <option>Online</option>
              <option>At Work</option>
            </select>
            <select className="border p-2 mt-2">
              <option selected="selected" disabled hidden>
                Type Of Time
              </option>
              <option>Full-time</option>
              <option>Part-time</option>
            </select>
          </div>
          <label className="text-lg mb-1">Tag</label>
          <input onChange={(e) => setTag(e.target.value)} className="border p-2" type="text" />
          <label className="text-lg mb-1">Location</label>
          <input onChange={(e) => setLocation(e.target.value)} className="border p-2" type="text" />
          <label className="text-lg mb-1">Time</label>
          <input onChange={(e) => setTime(e.target.value)} className="border p-2" type="text" />
          <label className="text-lg mb-1">Description</label>
          <input onChange={(e) => setDescription(e.target.value)} className="border p-2" type="text" />

          <div className="flex justify-center mt-2">
            <button
              onClick={() => addJob(name, salary, 'Fresher', 'Fulltime', 'At Office', tag, location, time, description, sessionStorage.getItem('username'), 'Approving')}
              className="px-4 py-2 bg-blue-500 rounded-3xl mr-2 text-gray-50 hover:text-white font-bold hover:bg-blue-600"
            >
              Add
            </button>
            <button onClick={() => setNewOfferForm('hidden')} className="px-4 py-2 bg-blue-500 rounded-3xl text-gray-50 hover:text-white font-bold hover:bg-blue-600">
              Cancel
            </button>
          </div>
        </div>

        <table>
          <tr>
            <td className="p-2 border-r border-b border-t border-l">IdJob</td>
            <td className="p-2 border-r border-b border-t">Name</td>
            <td className="p-2 border-r border-b border-t">Salary</td>
            <td className="p-2 border-r border-b border-t">Level</td>
            <td className="p-2 border-r border-b border-t">Type Of Work</td>
            <td className="p-2 border-r border-b border-t">Type Of Time</td>
            <td className="p-2 border-r border-b border-t">Tags</td>
            <td className="p-2 border-r border-b border-t">Location</td>
            <td className="p-2 border-r border-b border-t">Time</td>
            <td className="p-2 border-r border-b border-t">
              <div className="w-96">Description</div>
            </td>
            <td className="p-2 border-r border-b border-t">Manage</td>
          </tr>
          {typeof jobs === 'undefined' ? (
            <h1>Loading...</h1>
          ) : (
            jobs.map((job, index) => {
              if (job.fromCompany === sessionStorage.getItem('username')) {
                return (
                  <tr key={index}>
                    <td className="p-2 border-r border-b border-t border-l">{job.idJob}</td>
                    <td className="p-2 border-r border-b border-t">
                      <div className="w-48">{job.name}</div>
                    </td>
                    <td className="p-2 border-r border-b border-t">{job.salary}</td>
                    <td className="p-2 border-r border-b border-t">{job.level}</td>
                    <td className="p-2 border-r border-b border-t">{job.typeOfWork}</td>
                    <td className="p-2 border-r border-b border-t">{job.typeOfTime}</td>
                    <td className="p-2 border-r border-b border-t">{job.tags}</td>
                    <td className="p-2 border-r border-b border-t">
                      <div className="w-56">{job.location}</div>
                    </td>
                    <td className="p-2 border-r border-b border-t">{job.time}</td>
                    <td className="p-2 border-r border-b border-t">
                      <div className="w-96">{job.description}</div>
                    </td>
                    <td className="p-2 border-r border-b border-t">
                      <div>
                        <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-gray-50 hover:text-white rounded-3xl border mr-2">Edit</button>
                        <button onClick={() => deleteJob(job.idJob)} className="px-4 py-2 bg-red-500 hover:bg-red-600 text-gray-50 hover:text-white rounded-3xl border">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              }
            })
          )}
        </table>
      </div>
    </div>
  );
}

export default OfferingJobPage;
