import { Metadata } from 'next'
import JSOverview from '@/app/components/JavaScript/JSOverview/JSOverview';
// import type { NextPageContext } from 'next'; 
import NavList from '@/app/ui/navigation/navlist';

export const metadata: Metadata = {
  title: 'Chris Catto Code JavaScript Tutorial Overview',
  description: 'Chris Catto Code JavaScript Tutorial Overview'
}

// type Nav = {
//   navigation_id: number,
//   nav_name: string,
//   nav_link: string,
//   nav_image: string,
//   created_date: Date
// }
export default function Page() {
  // export default function Page({ stars }: { stars: number }) {
  // export default function Page({navData}:InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <h1 className='bg-orange-500'>yo: <NavList /> Nav</h1>
      <JSOverview />
    </>
  )
}

// Page.getInitialProps = async (ctx: NextPageContext) => {
//   // const res = await fetch('http://localhost:3000/api/navigation')
//   const res = await fetch('https://api.github.com/repos/vercel/next.js')
//   const json = await res.json();
//   // console.log('json', json);
//   return { stars: json.stargazers_count }
// }

// export async function getStaticProps() {  
//   const res = await fetch('http://localhost:3000/api/navigation')
//   const navigationItems = await res.json()
//   return {
//     props: {
//       navigationItems,
//     },
//   }
// }

// export const getStaticProps = (async (context) => {
//   const res = await fetch('http://localhost:3000/api/navigation')
//   const navData = await res.json()
//   return { props: { navData } }
// }) satisfies GetStaticProps<{
//   navData: Nav
// }>
