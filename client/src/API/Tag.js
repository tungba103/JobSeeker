// useEffect(() => {
//     fetch('/tag')
//       .then((response) => response.json())
//       .then((data) => {
//         setBackendData(data);
//       });
//   }, [backendData]);
const addTag = (tag) => {
  fetch('/tag/create/' + tag, {
    method: 'POST',
  });
  console.log('new Tag added');
};

export { addTag };
