import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CandidateItem, FilterCandidate } from '../../components';

function CandidatePage() {
  const [candidates, setCandidate] = useState([{}]);
  useEffect(() => {
    fetch('/candidate')
      .then((response) => response.json())
      .then((data) => {
        setCandidate(data);
      });
  }, []);

  return (
    <div className="mt-32">
      <FilterCandidate />
      <div className="mx-56">
        <p className="flex justify-start text-3xl font-bold mb-10">Top Candidates</p>
        <div className="grid grid-cols-5 gap-4">
          {typeof candidates === 'undefined' ? (
            <h1>Loading...</h1>
          ) : (
            candidates.map((candidate, i) => {
              return <CandidateItem key={i} flexDirection="flex-col" username={candidate.username} name={candidate.name} image={candidate.image} location={candidate.location} tag={candidate.tag} />;
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default CandidatePage;
