export function getPagesDataNow() {
  let dataArray = [];
  const getPageData = async () => {
    console.log('0 here inside getPageData');
    try {
      const responsePageData = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + '/api/pages',
        {
          method: 'GET',
        },
      );
      // debugger;
      console.log('8881 raw responsePageData === ', responsePageData);
      if (responsePageData) {
        console.log('8881 inside here we have a response');
        const pagesData = await responsePageData.json();
        console.log('8881 pagesData |||||| ================== ', pagesData);
        if (pagesData) {
          console.log('typeof pagesData ?  === ', typeof pagesData);
          console.log('2222222     22222222  ', pagesData);
          return pagesData;
          // setPages(pagesData);
        }
      }
    } catch (e) {
      console.log('error in pages data lib ');
    }
  };
  // (async function(){
  //   let localPagesData = await getPageData();
  //   console.log('!!!!!!!!!  localPagesData    !!!!!!! ', localPagesData);
  //   return localPagesData;
  //   // console.log(books);
  // })();

  const localPagesData = getPageData();
  // console.log("333333 333333 localPagesData ", localPagesData);
  // const newData =
  // localPagesData
  //   .then((data) => {
  //     console.log("444444444 4444444 data ", data);
  //     // return data;
  //     // return data;
  //     // dataArray = data;
  //     // console.log('dataArray ', dataArray);
  //     // return dataArray;

  //   })
  const newData = () => {
    localPagesData.then((data) => {
      console.log('444444444 4444444 data ', data);
      return data;
    });
  };
  const data25 = newData();
  console.log(
    ' newData newData newData newData newData newData newData newData newData data25',
    data25,
  );

  // console.log('dataArray 222', dataArray);
  // console.log("newData ", newData);

  //   localPagesData.then(
  //     (data) => {
  //     data.json();
  //  ).then((response)=> console.log(response)};

  // return false;
}
