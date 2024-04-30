async function getNav3() {
  const res = await fetch('http://localhost:3000/api/nav3');

  // const data = await res.json();
  // return data;

  if (!res.ok) {
    throw new Error('failed to fetch nav');
  }
  console.log('res 3 ==== ', res);
  return await res.json();
}

// export default async function NavList(params:type) {
export default async function Nav3() {
  const navItems3 = await getNav3();
  console.log('navItems === ', navItems3);
  return (
    <>
      <div className="bg-red-500">
        <div>nav items 3! </div>
        {navItems3.map((navItem: any) => (
          <div>{navItem.nav_name}</div>
        ))}
        <h6> below 3 nav items -</h6>
      </div>
    </>
  );
}
