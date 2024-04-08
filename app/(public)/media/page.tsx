import CarouselCatto3 from "../../components/CarouselCatto3/CarouselCatto3";

const DATA = [{ image: "/images/Chris-Catto-Sunrise.jpg" },
 { image: "/hero-mobile.png" }, 
 { image: "/Catto.png" }]

export default function Page() {
    return (
      <>
        <h1>Media Page</h1>
        <CarouselCatto3 data={DATA} />
        <hr className="m-4"/>
        <h2>testing</h2>
      </>
    );
}