import { useEffect, useState } from "react";

const GetPageListServerCatto = () => {

  const [pages, setPages] = useState({});

  const getPageData = async () => {
    console.log("0 here inside getPageData");
    try {
      const responsePageData = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + '/api/pages',
        {
          method: 'GET',
        },
      );
      // debugger;
      console.log('1 raw responsePageData === ', responsePageData);
      if (responsePageData) {
        console.log('3 inside here we have a response');
        const pagesData = await responsePageData.json();
        console.log("4 pagesData |||||| ================== ", pagesData);
        if (pagesData) {
          console.log('typeof pagesData ?  === ', typeof pagesData,);
          setPages(pagesData);
        }
        //   // setPages3(pagesData);
        //   // console.log('pages3 ---------------------       ----------', pages3);
        //   // setUsername(prevState => name);

        //   pagesData.forEach((value, key) => {
        //     console.log('5here YO value === ', value);
        //     console.log('6  here YO key === ', key);
        //   });

        //   console.log('-----YO we obviously have pagesData--');
        //   setPages2(pagesData);
        //   console.log('pages2 ', pages2);
        //   // var JS = ["ES1", "ES2", "ES3", "ES4", "ES5", "ES6"];
        //   // setPages3(JS);
        //   console.log('pages3 ', pages3);
        //   setTestingK8(true);
        //   console.log('testingK8 ', testingK8);
        // }
        // console.log(
        //   'what the fuck type is the state var pages ?  ',
        //   typeof pagesData,
        // );
        // console.log("pages === ", pages);
        // console.log('JSON.stringify pages ', JSON.stringify(pages));
      }
    } catch (error) {
      console.log('error 757 ', error);
    } finally {
      // setIsLoading(false);
    }
  };

  useEffect(() => {
    getPageData();
  }, []);

  console.log("before return pages === ", pages);
  // pages.map()

  return (
    <>
      <h1 className="text-white">
        GetPageListServerCatto
      </h1>
    </>
  );
}

export default GetPageListServerCatto;