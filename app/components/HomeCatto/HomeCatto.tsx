// import Image from "next/image"
// import CarouselCatto from "../CarouselCatto/CarouselCatto";
// import CarouselSimple from "../CarouselSimple/CarouselSimple";
// import CarouselCatto2 from "../CarouselCatto2/CarouselCatto2";
// import CarouselCatto3 from "../CarouselCatto3/CarouselCatto3";
import JumbotronCatto from '../HomeJumbotronCatto/HomeJumbotronCatto';

const DATA = [
  { image: '/images/Chris-Catto-Sunrise.jpg' },
  { image: '/hero-mobile.png' },
  { image: '/Catto.png' },
];

const HomeCatto = () => {
  return (
    <>
      <hr className="m-3" />
      <section>
        <JumbotronCatto />
      </section>
      <hr className="m-3" />
    </>
  );
};
export default HomeCatto;
