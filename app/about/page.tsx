import JumbotronCattoAbout from "../components/JumbotronCattoAbout/JumbotronCattoAbout";
import About5050Catto1 from "../components/About5050Catto1/About5050Catto1";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Chris Catto',
  description: 'About Chris Catto including Code and Family'
}

export default function Page() {
  return (
    <div className="bg-slate-400 h-lvh">
      {/* <p>About Page</p> */}
      {/* <About5050Catto1/>
      <hr/> */}
      <hr className="m-3"/>
      <JumbotronCattoAbout/>
      <hr className="m-3"/>
      {/* <About5050Catto1/> */}
    </div>
  );
}