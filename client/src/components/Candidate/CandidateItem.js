import { Link } from 'react-router-dom';
import TagJob from '../TagJob/TagJob';

function CandidateItem(props) {
  return (
    <Link to={`/candidate/detail/${props.username}`} className={`flex ${props.flexDirection} justify-center items-center bg-white p-4 border`}>
      <img className="w-40 h-40  cursor-pointer" src={props.image} />
      <div className="flex flex-col justify-center items-center">
        <p className="text-xl my-4 cursor-pointer">{props.name}</p>
        <div className="flex flex-col justify-center items-center">
          <div className="flex mb-4">
            <TagJob value="NodeJS" />
            <TagJob value="Java" />
            <TagJob value="Javascript" />
          </div>
          <span className="">{props.location}</span>
        </div>
      </div>
    </Link>
  );
}

export default CandidateItem;
