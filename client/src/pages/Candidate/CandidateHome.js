import { useEffect, useState } from 'react';
import { CompanyItem, SearchContainer } from '../../components';

function CandidateHome() {
  const [companies, setCompanies] = useState([{}]);
  useEffect(() => {
    fetch('/company')
      .then((response) => response.json())
      .then((data) => {
        setCompanies(data);
      });
  }, []);
  return (
    <div>
      <SearchContainer />
      <div className="mx-56 mt-20">
        <p className="flex justify-start text-3xl font-bold mb-10">Top Employers</p>
        <div className="grid grid-cols-5 gap-4">
          {typeof companies === 'undefined' ? (
            <h1>Loading...</h1>
          ) : (
            companies.map((company, i) => {
              return <CompanyItem username={company.username} key={i} name={company.name} location={company.location} jobsMain={company.jobsMain} image={company.image} />;
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default CandidateHome;
