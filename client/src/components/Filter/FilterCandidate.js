import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FilterItem from './FilterItem';

function Filter() {
  const workExperience = ['Work Experience', 'Fresher', 'Junior', 'Senior', 'Manager'];
  const location = ['Location', 'Ha Noi', 'HCM', 'Da Nang'];
  const skill = ['Skill', 'NodeJS', 'Network', 'C', 'C++', 'BA', 'Tester', 'Java', 'JavaScript', 'Python'];
  const education = ['Education', 'VNU', 'UET', 'HUST', 'PTIT', 'FPT'];
  return (
    <div className="flex ml-60 mb-10">
      <FilterItem value={skill} />
      <FilterItem value={workExperience} />
      <FilterItem value={education} />
      <FilterItem value={location} />
      <div className="flex justify-center items-center text-blue-500 cursor-pointer">
        <FontAwesomeIcon className="mr-2 text-xl" icon={faFilter} />
        <span>Clear all filters</span>
      </div>
    </div>
  );
}

export default Filter;
