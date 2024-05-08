// import

const GetPagesServer = async () => {
  console.log('inside Server GetPages2 ||||||||||||');

  const getPagesData89 = async () => {
    try {
      const pagesDataResponse7 = await (
        await fetch(process.env.APIPATH + '/api/pages')
      ).json();
      // let response8 = await getPage();
      console.log('response 7 88  ', pagesDataResponse7);
      return pagesDataResponse7;
    } catch (e) {
      console.log('error 222 e');
    }
  };

  getPagesData89()
    .then((data) => {
      console.log('------------------');
      // console.log(data);
      return data;
    })
    .catch((reason) => console.log(reason.message));

  //   const pagesDataResponse = await fetch('/api/pages');
  //   console.log(" pagesDataResponse pagesDataResponse === ", pagesDataResponse);
  //   if (pagesDataResponse.status === 200){
  //     console.log('inside 200 ~~~~~~~~~~~~~~~~~~~~~');
  //     let jsonResponse = await pagesDataResponse.json();
  //     return jsonResponse;
  //   }
  // } catch(e){
  //   console.log("error inside get pages data");
  //   return "error YO";
};
export default GetPagesServer;

// const pagesDataResponse = await fetch('/api/pages');
// console.log(" pagesDataResponse pagesDataResponse === ", pagesDataResponse);
// if (pagesDataResponse.status === 200){
//   console.log('inside 200 ~~~~~~~~~~~~~~~~~~~~~');
//   let jsonResponse = await pagesDataResponse.json();
//   return jsonResponse;
// console.log('inside 200');
// console.log("pagesDataResponse.json() ===", pagesDataResponse.json());

// pagesDataResponse.json().results.map((page, index) =>(
//   console.log("page == ", page);
// ));

// return pagesDataResponse.json();
// }

// const myFalse = false;

// return myFalse;
// return (

//   // <>
//   //   <h1>get pages</h1>
//   //   // <div className="h-96 bg-red-800">
//   //   // zzzComponentExample
//   //   // </div>
//   // </>
// );
