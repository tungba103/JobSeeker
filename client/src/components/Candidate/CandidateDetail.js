import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TagJob from '../TagJob/TagJob';
import CandidateItem from './CandidateItem';
import { updateCandidate, updateCompany, updateJob } from '../../API';

function CandidateDetail() {
  const url = window.location.href.split('/');
  const user = url[url.length - 1];
  const [offer, setOffer] = useState('Offering');
  const [candidates, setCandidates] = useState();
  useEffect(() => {
    fetch('/candidate')
      .then((response) => response.json())
      .then((data) => {
        setCandidates(data);
      });
  }, []);
  const companyOffering = () => {};
  return typeof candidates === 'undefined' ? (
    <div className="flex justify-center mt-32">
      <div className="">
        <p className="text-3xl font-bold">Profiles</p>
        <div>
          <p className="text-xl font-bold mt-4 ">Summary</p>
          <div>
            <p className="w-96 bg-gray-50 border p-2">Summary</p>
          </div>
        </div>
        <div>
          <p className="text-xl font-bold mt-4 ">Contact Infomation</p>
          <div>
            <p className="w-96 bg-gray-50 border p-2">Contact Infomation</p>
          </div>
        </div>
        <div>
          <p className="text-xl font-bold mt-4 ">Work Experience</p>
          <div>
            <p className="w-96 bg-gray-50 border p-2">Work Experience</p>
          </div>
        </div>
        <div>
          <p className="text-xl font-bold mt-4 ">Skills</p>
          <div>
            <p className="w-96 bg-gray-50 border p-2">Skills</p>
          </div>
        </div>
        <div>
          <p className="text-xl font-bold mt-4 ">Education</p>
          <div>
            <p className="w-96 bg-gray-50 border p-2">Education</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center ml-10">
        <CandidateItem flexDirection="flex-row" name="Candidate name" image="https://cdn-icons-png.flaticon.com/512/219/219968.png" location="Location" tag="Tag" />
        <button className="mt-10 px-4 py-2 rounded-xl bg-blue-500 text-xl text-white hover:bg-blue-600">Company Offer now</button>
      </div>
    </div>
  ) : (
    candidates.map((candidate, i) => {
      if (candidate.username === user) {
        return (
          <div className="flex justify-center mt-32">
            <div className="">
              <p className="text-3xl font-bold">Profiles</p>
              <div>
                <p className="text-xl font-bold mt-4 ">Summary</p>
                <div>
                  <p className="w-96 bg-gray-50 border p-2">{candidate.summary}</p>
                </div>
              </div>
              <div>
                <p className="text-xl font-bold mt-4 ">Contact Infomation</p>
                <div>
                  <p className="w-96 bg-gray-50 border p-2">{candidate.contactInfo}</p>
                </div>
              </div>
              <div>
                <p className="text-xl font-bold mt-4 ">Work Experience</p>
                <div>
                  <p className="w-96 bg-gray-50 border p-2">{candidate.workExperience}</p>
                </div>
              </div>
              <div>
                <p className="text-xl font-bold mt-4 ">Skills</p>
                <div>
                  <p className="w-96 bg-gray-50 border p-2">{candidate.skills}</p>
                </div>
              </div>
              <div>
                <p className="text-xl font-bold mt-4 ">Education</p>
                <div>
                  <p className="w-96 bg-gray-50 border p-2">{candidate.education}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center ml-10">
              <CandidateItem flexDirection="flex-row" key={i} name={candidate.name} image={candidate.image} location={candidate.location} tag={candidate.tag} />
              {sessionStorage.getItem('permission') === 'company' && (
                <>
                  {offer === 'Offering' && (
                    <button
                      onClick={() => {
                        companyOffering('Offering');
                        setOffer('Offered');
                      }}
                      className="mt-10 px-4 py-2 rounded-xl bg-blue-500 text-xl text-white hover:bg-blue-600"
                    >
                      Company Offer now
                    </button>
                  )}
                  {offer === 'Offered' && (
                    <button
                      onClick={() => {
                        companyOffering('Cancel');
                        setOffer('Offering');
                      }}
                      className="mt-10 px-4 py-2 rounded-xl bg-red-500 text-xl text-white hover:bg-red-600"
                    >
                      Cancel Offering
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        );
      }
    })
  );
}

export default CandidateDetail;
