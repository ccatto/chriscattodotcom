'use client';
import { useState, useEffect } from 'react';

export const GetPageData44 = () => {
  type Page = {
    created_date?: Date;
    is_active?: boolean;
    is_draft?: boolean;
    page_body?: string;
    page_description?: string;
    page_id?: number;
    page_name?: string;
    page_title?: string;
  };

  const [pages, setPages] = useState([]);

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
      console.log('1 raw responsePageData === ', responsePageData);
      if (responsePageData) {
        console.log('3 inside here we have a response');
        const pagesData = await responsePageData.json();
        console.log('4 pagesData |||||| ================== ', pagesData);
        if (pagesData) {
          // console.log('typeof pagesData ?  === ', typeof pagesData,);
          setPages(pagesData);
        }
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

  console.log('before return pages === ', pages);
  (pages as Page[]).map((item) => {
    console.log('item 2 == ', item);
  });

  // const users = (data as User[]).map(user => { // <-error line under map method
  //   return {
  //     id: user.id,
  //     name: user.name,
  //     created_at: user.created_at,

  //   }
  // });

  // pages.map()

  return (
    <>
      <h1> GetPageData44 </h1>

      {(pages as Page[]).map((item) => (
        <h1>{item.page_body}</h1>
      ))}
    </>
  );
};
export default GetPageData44;
