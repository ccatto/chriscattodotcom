'use client';

// import CarouselCatto from '../NavCatto/NavCatto';
import Image from 'next/image';
import { Button } from '@/app/ui/button';

const CarouselCatto = () => {
  //   const carouselElement: HTMLElement = document.getElementById('catto-carousel');

  //   const items: CarouselItem[] = [
  const items = [
    {
      position: 0,
      el: document.getElementById('carousel-item-1'),
    },
    {
      position: 1,
      el: document.getElementById('carousel-item-2'),
    },
    {
      position: 2,
      el: document.getElementById('carousel-item-3'),
    },
    {
      position: 3,
      el: document.getElementById('carousel-item-4'),
    },
  ];

  // set event listeners for prev and next buttons
  const $prevButton = document.getElementById('data-carousel-prev');
  const $nextButton = document.getElementById('data-carousel-next');
  // $prevButton.addEventListener('click', () => {
  //     carousel.prev();
  // });

  // $nextButton.addEventListener('click', () => {
  //     carousel.next();
  // });
  //   console.log('carouselElement ', carouselElement);
  //   carouselElement = 'basd';
  return (
    <>
      <h1>Top of Carousel</h1>
      <div className="bg-white">
        <div
          id="catto-carousel"
          className="relative w-full"
          data-carousel="slide"
        >
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            {/* <!-- Item 1 --> */}
            <div
              id="carousel-item-1"
              className="duration-700 ease-in-out"
              data-carousel-item
            >
              <Image
                src="/images/Chris-Catto-Sunrise.jpg"
                className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
                alt="blah image 1..."
                width={200}
                height={200}
              />
            </div>
            {/* <!-- Item 2 --> */}
            <div
              id="carousel-item-2"
              className="hidden duration-700 ease-in-out"
              data-carousel-item
            >
              <Image
                src="/hero-desktop.png"
                className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
                alt="image 2..."
                width={200}
                height={200}
              />
            </div>
            {/* <!-- Item 3 --> */}
            <div
              id="carousel-item-3"
              className="hidden duration-700 ease-in-out"
              data-carousel-item
            >
              <Image
                src="/hero-mobile.png"
                className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
                alt="Image 3 "
                width={200}
                height={200}
              />
            </div>
            {/* <!-- Item 4 --> */}
            <div
              id="carousel-item-4"
              className="hidden duration-700 ease-in-out"
              data-carousel-item
            >
              <Image
                src="/images/Chris-Catto-Sunrise.jpg"
                className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
                alt="i 4"
                width={200}
                height={200}
              />
            </div>
            {/* <!-- Item 5 --> */}
            <div
              id="carousel-item-5"
              className="hidden duration-700 ease-in-out"
              data-carousel-item
            >
              <Image
                src="/hero-desktop.png"
                className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
                alt=". 5.."
                width={200}
                height={200}
              />
            </div>
          </div>
          {/* <!-- Slider indicators --> */}
          <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse">
            <button
              type="button"
              className="h-3 w-3 rounded-full"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              type="button"
              className="h-3 w-3 rounded-full"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
            <button
              type="button"
              className="h-3 w-3 rounded-full"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to="2"
            ></button>
            <button
              type="button"
              className="h-3 w-3 rounded-full"
              aria-current="false"
              aria-label="Slide 4"
              data-carousel-slide-to="3"
            ></button>
            <button
              type="button"
              className="h-3 w-3 rounded-full"
              aria-current="false"
              aria-label="Slide 5"
              data-carousel-slide-to="4"
            ></button>
          </div>
          {/* <!-- Slider controls --> */}
          <button
            type="button"
            className="group absolute start-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
              <svg
                className="h-4 w-4 text-white rtl:rotate-180 dark:text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="group absolute end-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
              <svg
                className="h-4 w-4 text-white rtl:rotate-180 dark:text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </>
  );
};
export default CarouselCatto;
