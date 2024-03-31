import Image from "next/image"
import CarouselCatto from "../CarouselCatto/CarouselCatto";
import CarouselSimple from "../CarouselSimple/CarouselSimple";
import CarouselCatto2 from "../CarouselCatto2/CarouselCatto2";
const DATA = [{ image: "/images/Chris-Catto-Sunrise.jpg" },
 { image: "/hero-mobile.png" }, 
 { image: "/Catto.png" }]

const HomeCatto = () => {
    return (
      <>
          <div className="h-96">
              Main Text

              {/* <Image 
                className="mt-20 rounded-full w-96 h-96" 
                src="/images/Chris-Catto-Sunrise.jpg"
                width={800}
                height={374}
                alt="Chris Catto Sunrise"/> */}
              <h3>above Carousel </h3>
              {/* <CarouselSimple/> */}
              <CarouselCatto2 data={DATA}/>
              <h4>below Carousel </h4>
          </div>
      </>
    )
  }
  export default HomeCatto
  