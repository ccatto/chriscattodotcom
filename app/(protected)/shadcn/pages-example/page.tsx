import { PagesColumns } from '@/components/ui/data-table/PagesColumns';
import { Page } from '@/app/lib/definitions';
// import { DataTable } from '@/components/ui/data-table/data-table';
import { DataTable } from '@/components/ui/data-table/data-table-input';

async function getData(): Promise<Page[]> {
  // Fetch data from your API here.
  return [
    {
      page_id: 1234,
      page_name: "Page Name K8",
      page_title: 'Title Page K8 YO!',
    },
    {
      page_id: 43,
      page_name: "2 Page Name K8",
      page_title: '2 Title Page K8 YO!',
    },
    {
      page_id: 4223,
      page_name: "33 2 Page Name K8",
      page_title: '4442 Title Page K8 YO!',
    },
    // ...
  ];
}

export default async function DemoPage() {
  console.log("inside pages-example");
  const data = await getData();
  console.log("-------------- inside pages-example data === ",data);
  console.log("PagesColumns === ", PagesColumns);
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={PagesColumns} data={data} input={'page_id'}/>
      <br/>
      <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-blue-100 dark:bg-blue-700 md:my-10" />
    </div>
  );
}

// http://localhost:3000/shadcn/pages-example
