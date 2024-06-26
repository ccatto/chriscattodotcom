// Carousel.tsx
'use client';
// Carousel.tsx
import React, { useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';
// import { useDrag } from 'react-use-gesture';
import Link from 'next/link';
import Image from 'next/image';

const carouselProducts = [
  {
    id: 1,
    name: 'Acme Circles T-Shirt',
    price: '$20.00 USD',
    imageUrl: '/images/Chris-Catto-Sunrise.jpg',
    link: 'https://demo.vercel.store/product/acme-geometric-circles-tshirt',
  },
  {
    id: 2,
    name: 'Acme Drawstring Bag',
    price: '$12.00 USD',
    imageUrl: '/hero-desktop.png',
    link: 'https://demo.vercel.store/product/acme-drawstring-bag',
  },
  {
    id: 3,
    name: 'Acme Cup',
    price: '$15.00 USD',
    imageUrl: '/images/Chris-Catto-Sunrise.jpg',
    link: 'https://demo.vercel.store/product/acme-cup',
  },
  {
    id: 4,
    name: 'Acme Circles T-Shirt',
    price: '$20.00 USD',
    imageUrl: '/hero-desktop.png',
    link: 'https://demo.vercel.store/product/acme-geometric-circles-tshirt',
  },
  {
    id: 5,
    name: 'Acme Drawstring Bag',
    price: '$12.00 USD',
    imageUrl: '/images/Chris-Catto-Sunrise.jpg',
    link: 'https://demo.vercel.store/product/acme-drawstring-bag',
  },
  {
    id: 6,
    name: 'Acme Cup',
    price: '$15.00 USD',
    imageUrl: '/hero-desktop.png',
    link: 'https://demo.vercel.store/product/acme-cup',
  },
];

export const CarouselSimple = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const totalSlides = carouselProducts.length;
  const [{ x }, set] = useSpring(() => ({ x: 0 }));

  const updateSlide = (direction: any) => {
    let newSlideIndex = slideIndex + direction;
    if (newSlideIndex < 0) {
      newSlideIndex = 0;
    } else if (newSlideIndex >= totalSlides) {
      newSlideIndex = totalSlides - 1;
    }
    setSlideIndex(newSlideIndex);
    set({ x: -newSlideIndex * 100 }); // Zakładając, że każdy slajd ma szerokość 100% kontenera
  };

  const handleDrag = (mx: any) => {
    if (mx < -100 && slideIndex < totalSlides - 1) {
      updateSlide(1);
    } else if (mx > 100 && slideIndex > 0) {
      updateSlide(-1);
    }
  };

  return (
    <div className="relative mt-10 w-full cursor-grab overflow-hidden bg-[#171717] pb-6 pt-1 pt-5">
      <h2 className="mb-5 ml-5 text-2xl font-bold text-white">
        Najnowsze i najlepsze
      </h2>

      <animated.ul
        className="animate-carousel"
        style={{ transform: x.to((x) => `translateX(${x}%)`) }}
        onMouseDown={(e) => handleDrag(e.movementX)}
        onTouchStart={(e) => handleDrag(e.touches[0].clientX)}
      >
        {carouselProducts.map((product, i) => (
          <li
            key={`${product.id}-${i}`}
            className="group relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none border-2 border-transparent bg-black transition-all duration-500 ease-in-out hover:border-blue-500 md:w-1/3"
          >
            <Link href={product.link} passHref>
              <div className="relative block h-full w-full cursor-pointer">
                <Image
                  alt={product.name}
                  src={product.imageUrl}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-white opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                  <p className="text-sm">{product.name}</p>
                  <p className="text-lg font-semibold">{product.price}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </animated.ul>
    </div>
  );
};

export default CarouselSimple;
