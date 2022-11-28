import { faLocationDot, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Search() {
  return (
    <div className="flex justify-center items-center text-gray-900 text-xl">
      <div className="flex justify-start items-center px-4  bg-white h-12">
        <FontAwesomeIcon icon={faSearch} className="mr-4" />
        <input className="w-96 focus:outline-none" type="text" placeholder="Keyword skill..."></input>
      </div>
      <div className="flex justify-start items-center px-4  bg-white h-12">
        <FontAwesomeIcon icon={faLocationDot} className="mr-4" />
        <select>
          <option>All Cities</option>
          <option>Ha Noi</option>
          <option>Ho Chi Minh</option>
          <option>Da Nang</option>
        </select>
      </div>
      <button className="x bg-red-600 h-12 px-4 py-2 font-bold text-white">Search</button>
    </div>
  );
}

export default Search;
