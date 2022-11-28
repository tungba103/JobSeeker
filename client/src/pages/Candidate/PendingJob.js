import { useEffect, useState } from 'react';
import { JobItem } from '../../components';

function PendingJob() {
  const [jobs, setJobs] = useState();
  useEffect(() => {
    fetch('/job')
      .then((response) => response.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);
  return (
    <div className="mx-96 mt-32 flex flex-col justify-center">
      {/* <p>You have 0 Save Job</p> */}
      <p className="font-bold text-3xl my-4 ml-10">Pending Job</p>
      <div>
        {typeof jobs === 'undefined' ? (
          <h1>Loading...</h1>
        ) : (
          jobs.map((job, i) => {
            if (job.pendingCandidate != null && job.pendingCandidate.includes(sessionStorage.getItem('username'))) {
              return (
                <JobItem
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
            }
          })
        )}
      </div>
    </div>
  );
}

export default PendingJob;
