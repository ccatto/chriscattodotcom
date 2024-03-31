'use client'

// import CarouselCatto from '../NavCatto/NavCatto';
import Image from 'next/image';
import { Button } from '@/app/ui/button';

const CarouselCatto = () => {
  const carouselElement: HTMLElement = document.getElementById('catto-carousel');

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
        <div className='bg-white'>
            <div id="catto-carousel" className="relative w-full" data-carousel="slide">
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    {/* <!-- Item 1 --> */}
                    <div id="carousel-item-1" className="duration-700 ease-in-out" data-carousel-item>
                        <Image 
                            src="/images/Chris-Catto-Sunrise.jpg" 
                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" 
                            alt="blah image 1..."
                            width={200}
                            height={200}
                        />
                    </div>
                    {/* <!-- Item 2 --> */}
                    <div id="carousel-item-2" className="hidden duration-700 ease-in-out" data-carousel-item>
                        <Image 
                            src="/hero-desktop.png" 
                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" 
                            alt="image 2..."
                            width={200}
                            height={200}
                        />
                    </div>
                    {/* <!-- Item 3 --> */}
                    <div id="carousel-item-3" className="hidden duration-700 ease-in-out" data-carousel-item>
                        <Image 
                            src="/hero-mobile.png" 
                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" 
                            alt="Image 3 "
                            width={200}
                            height={200}
                        />
                    </div>
                    {/* <!-- Item 4 --> */}
                    <div id="carousel-item-4" className="hidden duration-700 ease-in-out" data-carousel-item>
                        <Image 
                            src="/images/Chris-Catto-Sunrise.jpg" 
                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" 
                            alt="i 4"
                            width={200}
                            height={200}
                        />
                    </div>
                    {/* <!-- Item 5 --> */}
                    <div id="carousel-item-5" className="hidden duration-700 ease-in-out" data-carousel-item>
                        <Image 
                            src="/hero-desktop.png" 
                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" 
                            alt=". 5.."
                            width={200}
                            height={200}
                        />
                    </div>
                </div>
                {/* <!-- Slider indicators --> */}
                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                </div>
                {/* <!-- Slider controls --> */}
                <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </div>
    </>
  )
}
export default CarouselCatto