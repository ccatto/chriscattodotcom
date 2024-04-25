
async function getNav() {
  const res = await fetch('http://localhost:3000/api/navigation');
  
  // const data = await res.json();
  // return data;

  if(!res.ok) {
    throw new Error('failed to fetch nav');
  }

  return await res.json();
  
}

// export default async function NavList(params:type) {
  export default async function NavList() {
    const navItems = await getNav();
    return (
      <>
      <h1>nav items! </h1>
      {navItems.map((navItem:any) => 
        <div>{navItem.nav_name}</div>)
      }
      <h6> below nav items</h6>
      </>
    )
}