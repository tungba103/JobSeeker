import { useEffect, useState } from 'react';
import { CandidateItem, CompanyItem, SearchContainer } from '../../components';

function Home() {
  const [candidates, setCandidate] = useState([{}]);
  useEffect(() => {
    fetch('/candidate')
      .then((response) => response.json())
      .then((data) => {
        setCandidate(data);
      });
  }, []);
  return (
    <div>
      <SearchContainer />
      <div className="mx-56 mt-20">
        <p className="flex justify-start text-3xl font-bold mb-10">Top Candidates</p>
        <div className="grid grid-cols-5 gap-4">
          {typeof candidates === 'undefined' ? (
            <h1>Loading...</h1>
          ) : (
            candidates.map((candidate, i) => {
              return <CandidateItem key={i} username={candidate.username} flexDirection="flex-col" name={candidate.name} image={candidate.image} location={candidate.location} tag={candidate.tag} />;
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
