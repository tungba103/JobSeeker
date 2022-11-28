import Search from './Search';

function SearchContainer() {
  return (
    <div className="mt-16 bg-gray-800 h-96 flex flex-col justify-center items-center">
      <div className="text-white text-3xl mb-12">Thousand Jobs for You</div>
      <Search />
      <ul className="text-white flex mt-12">
        <li className="px-2 hover:underline cursor-pointer">Tester</li>
        <li className="px-2 hover:underline cursor-pointer">Java</li>
        <li className="px-2 hover:underline cursor-pointer">PHP</li>
        <li className="px-2 hover:underline cursor-pointer">Android</li>
        <li className="px-2 hover:underline cursor-pointer">Node</li>
        <li className="px-2 hover:underline cursor-pointer">Javascript</li>
      </ul>
    </div>
  );
}

export default SearchContainer;
