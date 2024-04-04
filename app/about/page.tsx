import JumbotronCattoAbout from "../components/JumbotronCattoAbout/JumbotronCattoAbout";
import About5050Catto1 from "../components/About5050Catto1/About5050Catto1";
import { Metadata } from 'next'
import About5050CattoSFCCBadge from "../components/About5050CattoSFCCBadge/About5050CattoSFCCBadge";

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
      <About5050CattoSFCCBadge/>
      <hr className="m-3"/>
    </div>
  );
}