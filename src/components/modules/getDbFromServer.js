
export function getDbFromServer(linkDb)
fetch(linkDb,
  {
    method: 'GET',
    mode:cors
  })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    return data;
  });

  // export default getDbFromServer();