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
        <section 
            // className="h-[296rem]"
        >
            Main Text
            <JumbotronCatto/>
            {/* <Image 
            className="mt-20 rounded-full w-96 h-96" 
            src="/images/Chris-Catto-Sunrise.jpg"
            width={800}
            height={374}
            alt="Chris Catto Sunrise"/> */}
            <h3>above Carousel </h3>
            {/* <CarouselSimple/> */}
            {/* <CarouselCatto2 data={DATA}/> */}
            <CarouselCatto3 data={DATA}/>
            <h4>below Carousel </h4>
        </section>
    )
  }
  export default HomeCatto
  