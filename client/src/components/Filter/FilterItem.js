function FilterItem(props) {
  return (
    <div>
      <select className="mx-4 w-40 p-2 border bg-gray-50 cursor-pointer">
        {props.value.map((item, index) => {
          return <option key={index}>{item}</option>;
        })}
      </select>
    </div>
  );
}

export default FilterItem;
