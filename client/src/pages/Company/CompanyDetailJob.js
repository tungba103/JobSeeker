import { Button } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { CompanyDetail, FilterJob, JobButton, JobContentItem, JobItem } from '../../components';

function CompanyDetailJob() {
  const url = window.location.href.split('/');
  const user = url[url.length - 1];
  const [companies, setCompanies] = useState();
  const [jobs, setJobs] = useState();
  useEffect(() => {
    fetch('/company')
      .then((response) => response.json())
      .then((data) => {
        setCompanies(data);
      });
  }, []);
  useEffect(() => {
    fetch('/job')
      .then((response) => response.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);
  return (
    <div className="mt-32">
      {typeof companies === 'undefined' ? (
        <CompanyDetail name="Company" image="https://cdn-icons-png.flaticon.com/512/3061/3061341.png" />
      ) : (
        companies.map((company, i) => {
          if (company.username === user) {
            return <CompanyDetail key={i} name={company.name} image={company.image} />;
          }
        })
      )}
      {/* <FilterJob /> */}
      <div className="flex justify-center">
        <div className=" pt-4 px-4 bg-white border ">
          <p className="text-2xl pl-2 py-2">All Job in Company</p>
          {typeof jobs === 'undefined' ? (
            <>
              <JobItem />
              <JobItem />
              <JobItem />
            </>
          ) : (
            jobs.map((job, i) => {
              if (job.fromCompany === user) {
                return (
                  <div key={i} className="flex justify-center items-center">
                    <JobItem
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
                    <JobButton
                      idJob={job.idJob}
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
                  </div>
                );
              }
            })
          )}
        </div>
        {/* <JobContentItem /> */}
      </div>
    </div>
  );
}

export default CompanyDetailJob;
