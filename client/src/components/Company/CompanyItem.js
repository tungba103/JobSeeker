import { Link } from 'react-router-dom';

function CompanyItem(props) {
  return (
    <Link to={`/companydetailjob/detail/${props.username}`} className="flex flex-col justify-center items-center bg-white p-4 border">
      <img className="w-40 h-40  cursor-pointer" src={props.image} />
      <p className="text-xl my-4 cursor-pointer">{props.name}</p>
      <div>
        <div className="flex">{props.jobsMain}</div>
        <div className="ml-4 font-bold flex justify-center mt-2">{props.location} </div>
      </div>
    </Link>
  );
}

export default CompanyItem;
