import { Metadata } from 'next';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Chris Catto Code JavaScript DayJS',
  description: 'Chris Catto Code JavaScript DayJS',
  alternates: {
    canonical: 'https://www.chriscatto.com/code/javascript/dayjs',
  },
};

export default function Page() {
  return (
    <>
      <div className="flex h-full w-full flex-col flex-nowrap ">
        <div className="flex">
          <JumbotronCattoFlexible
            title="JavaScript DayJS"
            description="JavaScript DayJS"
          />
        </div>
        <div className="m-4 flex-[80] rounded-2xl p-4 text-black ring-2 ring-gray-300 dark:bg-[#f7df1e] dark:ring-gray-500">
          <p>This will eventually be a DayJS section but at this time just a place holder. </p>
          <p>
            DayJS is a js library that parses; validates & manipulates dates & times. It's very similar to moment but better. 
          </p><p>
          import dayjs from "dayjs";
          const currentDate = dayjs();
const formattedDate = currentDate.format('YYYY-MM-DD HH:mm:ss');
console.log(formattedDate);
          </p>
        </div>
        {/* <hr className="m-3" /> */}
      </div>
    </>
  );
}
