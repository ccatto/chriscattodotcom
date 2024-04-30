async function getNav() {
  const res = await fetch('http://localhost:3000/api/navigation');

  if (!res.ok) {
    throw new Error('failed to fetch nav');
  }
  return await res.json();
}

async function getNav2() {
  const res = await fetch('http://localhost:3000/api/navigation');

  // const data = await res.json();
  // return data;

  if (!res.ok) {
    throw new Error('failed to fetch nav');
  }

  return await res.json();
}

// export default async function NavList(params:type) {
export default async function NavList() {
  const navItems = await getNav2();
  // console.log('navItems === ', navItems);
  return (
    <>
      <div>nav items! </div>
      {navItems.map((navItem: any) => (
        <div>{navItem.nav_name}</div>
      ))}
      <div> below nav items -</div>
    </>
  );
}
