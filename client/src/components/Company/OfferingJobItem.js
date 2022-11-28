function OfferingJobItem(props) {
  return (
    <div className="flex justify-start border p-4 mb-4">
      <div className="w-32">
        <p>{props.name}</p>
        <p>{props.price}</p>
        <p>{props.tag}</p>
        <p>{props.date}</p>
      </div>
      <div className="w-96">
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default OfferingJobItem;
