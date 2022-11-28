function CompanyDetail(props) {
  return (
    <div className="flex justify-start ml-96 items-start mb-10">
      <div className="flex justify-center h-80 ">
        <img src={props.image} className="w-80 border rounded-3xl" />
      </div>
      <div className="ml-10 w-96">
        <p className="text-5xl font-bold">{props.name}</p>
        <p className="text-3xl text-gray-600 mt-4">{props.location}</p>
      </div>
    </div>
  );
}

export default CompanyDetail;
