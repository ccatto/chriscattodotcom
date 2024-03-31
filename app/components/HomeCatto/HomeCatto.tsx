import Image from "next/image"
import CarouselCatto from "../CarouselCatto/CarouselCatto";
import CarouselSimple from "../CarouselSimple/CarouselSimple";

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
              <CarouselSimple/>
              <CarouselCatto/>
              <h4>below Carousel </h4>
          </div>
      </>
    )
  }
  export default HomeCatto
  