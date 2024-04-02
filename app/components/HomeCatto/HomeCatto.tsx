import Image from "next/image"
import CarouselCatto from "../CarouselCatto/CarouselCatto";
import CarouselSimple from "../CarouselSimple/CarouselSimple";
import CarouselCatto2 from "../CarouselCatto2/CarouselCatto2";
import CarouselCatto3 from "../CarouselCatto3/CarouselCatto3";
import JumbotronCatto from "../JumbotronCatto/JumbotronCatto";

const DATA = [{ image: "/images/Chris-Catto-Sunrise.jpg" },
 { image: "/hero-mobile.png" }, 
 { image: "/Catto.png" }]

const HomeCatto = () => {
    return (
        <>
            <hr className="m-3"/>
            <section 
                // className="h-[296rem]"
            >
                <JumbotronCatto/>
            </section>
            <hr className="m-3"/>
        </>
    )
  }
  export default HomeCatto
  