import { Metadata } from 'next';
import GetPageData44 from '@/app/components/Data/GetPageData44';

export const metadata: Metadata = {
  title: 'Chris Catto Blog A List',
  description: 'Chris Catto Blog Create a Blog Post',
};

export default function Page() {
  return (
    <div className="flex h-full flex-col flex-nowrap text-white ">
      <h1>test list</h1>
      <GetPageData44 />
    </div>
  );
}
