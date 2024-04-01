import JumbotronCattoAbout from "../components/JumbotronCattoAbout/JumbotronCattoAbout";
import About5050Catto1 from "../components/About5050Catto1/About5050Catto1";

export default function Page() {
  return (
    <div className="bg-slate-400 h-lvh">
      <p>About Page</p>
      {/* <About5050Catto1/>
      <hr/> */}
      <JumbotronCattoAbout/>
      <hr/>
      <About5050Catto1/>
    </div>
  );
}