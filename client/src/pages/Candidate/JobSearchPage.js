import { useEffect, useState } from 'react';
import { FilterJob, JobContentItem, JobItem } from '../../components';

function JobSearchPage() {
  const [jobs, setJobs] = useState([{}]);
  useEffect(() => {
    fetch('/job')
      .then((response) => response.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);
  const [jobDisplay, setJobDisplay] = useState({
    idJob: 'Id Job',
    name: 'Name',
    salary: 'Salary',
    level: 'Level',
    typeOfTime: 'Type Of Time',
    typeOfWork: 'Type Of Work',
    tags: 'Tag',
    location: 'Location',
    time: 'Time',
    description: 'description',
    fromCompany: 'From Company',
    status: 'Ready',
  });
  const updateJobDisplay = (job) => {
    setJobDisplay(job);
  };
  return (
    <div className="mt-32">
      <FilterJob />
      <div className="flex justify-center">
        <div className=" pt-4 px-4 bg-white border ">
          <p className="text-2xl pl-2 py-2">100 Jobs Node JS in Viet Nam</p>
          {typeof jobs === 'undefined' ? (
            <h1>Loading...</h1>
          ) : (
            jobs.map((job, i) => {
              if (job.status !== 'Approving')
                return (
                  <JobItem
                    jobHandle={() => updateJobDisplay(job)}
                    key={i}
                    name={job.name}
                    salary={job.salary}
                    level={job.level}
                    typeOfTime={job.typeOfTime}
                    typeOfWork={job.typeOfWork}
                    tags={job.tags}
                    location={job.location}
                    time={job.time}
                    description={job.description}
                    fromCompany={job.fromCompany}
                    status={job.status}
                  />
                );
            })
          )}
        </div>
        <JobContentItem
          idJob={jobDisplay.idJob}
          name={jobDisplay.name}
          salary={jobDisplay.salary}
          level={jobDisplay.level}
          typeOfTime={jobDisplay.typeOfTime}
          typeOfWork={jobDisplay.typeOfWork}
          tags={jobDisplay.tags}
          location={jobDisplay.location}
          time={jobDisplay.time}
          description={jobDisplay.description}
          fromCompany={jobDisplay.fromCompany}
          status={jobDisplay.status}
        />
      </div>
    </div>
  );
}

export default JobSearchPage;
