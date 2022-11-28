import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FilterItem from './FilterItem';
import { Button } from 'flowbite-react';
function Filter() {
  const JobLevel = ['Job Level', 'Fresher', 'Junior', 'Senior', 'Manager'];
  const SalaryRange = ['Salary Range', '>= 500 USD', '>= 1000 USD', '>= 2000 USD', '>= 2500 USD'];
  const TypeOfTime = ['Type Of Time', 'Outsourcing', 'Product'];
  const Tag = ['Tag', 'NodeJS', 'Network', 'C', 'C++', 'BA', 'Tester', 'Java', 'JavaScript', 'Python'];
  const TypeOfWork = ['Type Of Work', 'Fulltime', 'Parttime'];
  const Location = ['Location', 'HCM', 'Ha Noi', 'Da Nang'];
  const Company = ['Company', 'FPT Sortware', 'Viettel Telecom', 'Base Enterprise', 'CMC Telecom'];
  return (
    <div className="flex ml-60 mb-10">
      <FilterItem value={Company} />
      <FilterItem value={Tag} />
      <FilterItem value={TypeOfWork} />
      <FilterItem value={TypeOfTime} />
      <FilterItem value={JobLevel} />
      <FilterItem value={SalaryRange} />
      <FilterItem value={Location} />
      <div className="flex justify-center items-center text-blue-500 cursor-pointer">
        <FontAwesomeIcon className="mr-2 text-xl" icon={faFilter} />
        <Button onClick={() => {}}>Clear all filters</Button>
      </div>
    </div>
  );
}

export default Filter;
