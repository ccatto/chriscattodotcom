import JumbotronCattoAbout from "../components/JumbotronCattoAbout/JumbotronCattoAbout";
import { Metadata } from 'next'
import About5050CattoSFCCBadge from "../components/About5050CattoSFCCBadge/About5050CattoSFCCBadge";
import About5050Catto3x3TechGrid from "../components/About5050Catto3x3TechGrid/About5050Catto3x3TechGrid";
import About5050CattoFamily from "../components/About5050CattoFamily/About5050CattoFamily";
import TechStackImages3x3 from "../components/TechStackImages3x3/TechStackImages3x3";
import About5050Catto1 from "../components/About5050Catto1/About5050Catto1";

export const metadata: Metadata = {
  title: 'About Chris Catto',
  description: 'About Chris Catto including Code and Family'
}

export default function Page() {
  return (
    <div className="bg-slate-400 h-lvh">
      <JumbotronCattoAbout/>
      <hr className="m-1"/>
      <About5050Catto3x3TechGrid/>
      <hr className="m-3"/>
      <About5050CattoSFCCBadge/>
      <hr className="m-3"/>
      <About5050CattoFamily/>
      <hr className="m-3"/>
      {/* <p>About Page</p> */}
      {/* <About5050Catto1/> */}
      {/* <hr/> */}
      {/* <hr className="m-3"/>
      <TechStackImages3x3/> */}
      {/* <hr className="m-3"/> */}
    </div>
  );
}