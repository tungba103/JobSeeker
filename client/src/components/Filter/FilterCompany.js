import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FilterItem from './FilterItem';

function Filter() {
  const typeJob = ['Job main', 'NodeJS', 'Network', 'C', 'C++', 'BA', 'Tester', 'Java', 'JavaScript', 'Python'];
  const location = ['Location', 'Ha Noi', 'HCM', 'Da Nang', 'Nha Trang'];
  return (
    <div className="flex ml-60 mb-10">
      <FilterItem value={typeJob} />
      <FilterItem value={location} />
      <div className="flex justify-center items-center text-blue-500 cursor-pointer">
        <FontAwesomeIcon className="mr-2 text-xl" icon={faFilter} />
        <span>Clear all filters</span>
      </div>
    </div>
  );
}

export default Filter;
