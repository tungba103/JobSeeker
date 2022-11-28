import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FilterItem from './FilterItem';

function FilterCompanyDetailJob() {
  const JobLevel = ['Job Level', 'Fresher', 'Junior', 'Senior', 'Manager'];
  const SalaryRange = ['Salary Range', '>= 500 USD', '>= 1000 USD', '>= 2000 USD', '>= 2500 USD'];
  const CompanyType = ['Company Type', 'Outsourcing', 'Product'];
  const Type = ['Type', 'Fulltime', 'Parttime'];
  const Tag = ['Tag', 'Java', 'NodeJS'];
  return (
    <div className="flex ml-96 mb-10">
      <FilterItem value={Tag} />
      <FilterItem value={Type} />
      <FilterItem value={JobLevel} />
      <FilterItem value={SalaryRange} />
      <FilterItem value={Location} />
      {/* <FilterItem value={CompanyType} /> */}
      <div className="flex justify-center items-center text-blue-500 cursor-pointer">
        <FontAwesomeIcon className="mr-2 text-xl" icon={faFilter} />
        <span>Clear all filters</span>
      </div>
    </div>
  );
}

export default FilterCompanyDetailJob;
