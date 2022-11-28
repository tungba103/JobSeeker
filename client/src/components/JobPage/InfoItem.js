import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function InfoItem(props) {
  return (
    <div className={`flex justify-start items-center pr-10 py-0.5 text-md ${props.color}`}>
      <FontAwesomeIcon className="mr-4" icon={props.icon} />
      <p>{props.content}</p>
    </div>
  );
}

export default InfoItem;
