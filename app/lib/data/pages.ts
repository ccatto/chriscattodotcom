export async function getPagesData() {
  // const getPagesData = async () => {

  try {
    console.log('------ start');
    // let pagesDataResponse:{data:any};
    const pagesDataResponse = await fetch('/api/pages');
    console.log(' pagesDataResponse pagesDataResponse === ', pagesDataResponse);
    if (pagesDataResponse.status === 200) {
      console.log('inside 200');
      console.log('pagesDataResponse.json() ===', pagesDataResponse.json());

      // pagesDataResponse.json().results.map((page, index) =>(
      //   console.log("page == ", page);
      // ));

      // return pagesDataResponse.json();
    }
  } catch (e) {
    console.log('error inside get pages data');
  }
}

//   // fetch(`/api/pages`, method: "GET")
//   // .then((res) => res.json())
//   // .then((data) => {
//   //   ....
//   // });

//   const pagesDataResponse = await fetch('api/pages', {
//     method: 'GET',
//     // headers: {
//     //   'content-type': 'application/json',
//     // },
//     // body: JSON.stringify(data),
//   });
//   // console.log('--------------pagesDataResponse === ', pagesDataResponse);
//   console.log('--------------pagesDataResponse === ', pagesDataResponse);
// }
