// CarouselCatto2.tsx
"use client"
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const CarouselCatto3 = ({ data }: {
    data: {
        image: string
    }[]
}) => {
    // State and Ref initialization
    const [currentImg, setCurrentImg] = useState(0)
    const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 })
    const carouselRef = useRef(null)
    let totalSlides = data.length; // Total slides
    console.log('totalSlides === ', totalSlides);
    console.log('currentImg ===', currentImg);
    const clickNextHandler = () => {
        return (event: React.MouseEvent) => {
            if (currentImg + 1 === totalSlides ) {
                console.log('inside AT END');
                setCurrentImg(0);
            } else {
                console.log('not at end yet');
                setCurrentImg(currentImg + 1);
            }
          event.preventDefault();
        }
    }
    const clickPreviousHandler = () => {
        return (event: React.MouseEvent) => {
            console.log('inside PREVIOUS CLICK');
            if (currentImg === 0 ) {
                console.log('inside AT beginning');
                setCurrentImg(totalSlides - 1);
            } else {
                console.log('not at end yet');
                setCurrentImg(currentImg - 1);
            }
          event.preventDefault();
        }
      }
    // useEffect to get the initial carousel size
    useEffect(() => {
        let elem = carouselRef.current as unknown as HTMLDivElement
        let { width, height } = elem.getBoundingClientRect()
        if (carouselRef.current) {
            setCarouselSize({
                width,
                height,
            })
        }
    }, [])

    return (
        <>
            {/* Carousel container */}
            <div id="indicators-carousel" className="relative w-full">
            {/* <div className='w-80 h-60 rounded-md overflow-hidden relative'> */}
                {/* Carousel Wrapper */}
                {/* <div className="relative h-56 overflow-hidden rounded-lg md:h-96"> */}
                    {/* Image container */}
                    <div
                        ref={carouselRef}
                        style={{
                            left: -currentImg * carouselSize.width
                        }}
                    
                        className='relative h-56 overflow-hidden rounded-lg md:h-96'>
                        {/* Map through data to render images */}
                        {data.map((v, i) => (
                            <div key={i} className='duration-700 ease-in-out'>
                                <Image
                                    className='absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                                    alt={`carousel-image-${i}`}
                                    fill
                                    src={v.image || "/hero-desktop.png"}
                                />
                            </div>
                        ))}
                    </div>
                {/* </div> */}


            </div>

            {/* Navigation buttons */}
            <div className='flex justify-center mt-3'>
                <button
                    // disabled={currentImg === 0}
                    onClick={clickPreviousHandler()}
                    // onClick={() => setCurrentImg(prev => prev - 1)}
                    className={`border px-4 py-2 font-bold ${currentImg === 0 && 'opacity-50'}`}
                >
                    {"<"}
                </button>
                <button
                    // disabled={currentImg === data.length - 1}
                    // getNextImageNumber();
                    onClick={clickNextHandler()}
                    // onClick={() => setCurrentImg(prev => prev + 1)}
                    className={`border px-4 py-2 font-bold ${currentImg === data.length - 1 && 'opacity-50'}`}
                >
                    {">"}
                </button>
            </div>
        </>
    )
}

export default CarouselCatto3
