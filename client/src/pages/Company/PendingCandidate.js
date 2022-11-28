import { useEffect, useState } from 'react';
import { CandidateItem } from '../../components';

function PendingCandidate() {
  const [candidates, setCandidates] = useState();
  const [jobs, setJobs] = useState();
  const [candidateData, setCandidateData] = useState();
  useEffect(() => {
    fetch('/job')
      .then((response) => response.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);
  useEffect(() => {
    fetch('/candidate')
      .then((response) => response.json())
      .then((data) => {
        setCandidates(data);
      });
  }, []);
  return (
    <div className="mt-32">
      {typeof candidates === 'undefined' || typeof jobs === 'undefined' ? (
        <h1>Loading</h1>
      ) : (
        candidates.map((candidate, canIndex) => {
          return (
            <div className="flex justify-center items-center mb-2">
              <CandidateItem key={canIndex} flexDirection="flex-row" name={candidate.name} image={candidate.image} location={candidate.location} tag={candidate.tag} />
              <div>
                <button className="px-4 py-2 bg-blue-500 rounded-3xl mx-2 text-white hover:bg-blue-600">Accept</button>
                <button className="px-4 py-2 bg-red-500 rounded-3xl  text-white hover:bg-red-600">Deny</button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default PendingCandidate;

// candidates.map((candidate, i) => {
//   return (
//     <div className="flex justify-center items-center mb-2">
//       <CandidateItem key={i} flexDirection="flex-row" name={candidate.name} image={candidate.image} location={candidate.location} tag={candidate.tag} />
//       <div>
//         <button className="px-4 py-2 bg-blue-500 rounded-3xl mx-2 text-white hover:bg-blue-600">Accept</button>
//         <button className="px-4 py-2 bg-red-500 rounded-3xl  text-white hover:bg-red-600">Deny</button>
//       </div>
//     </div>
//   );
// })
