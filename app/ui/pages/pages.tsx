
async function getPages() {
  const res = await fetch('http://localhost:3000/api/pages');

  // const data = await res.json();
  // return data;

  if (!res.ok) {
    throw new Error('failed to fetch nav');
  }
  console.log("res ==== ", res);
  return await res.json();

}

// export default async function NavList(params:type) {
export default async function Pages() {
  const pageItems = await getPages();
  console.log('pageItems === ', pageItems);
  return (
    <>
      <div>page items! </div>
      {pageItems.map((pageItem: any) =>
        <div>{pageItem.page_description}</div>)
      }
      <div> below page items -</div>
    </>
  )
}
