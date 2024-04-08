import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import { Image } from 'next/image';

const FooterCatto = () => {
  return (
    <>
        {/* <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600"> */}
        <footer className="bg-white dark:bg-gray-900 p-6">
            <div className=" bg-white rounded-xl shadow m-4 dark:bg-gray-800">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <Link href="/" className="flex items-center">
                                <Image className="w-10 h-10 rounded-full mr-3"
                                src="/images/ChrisCatto-Avatar.png"
                                width={50}
                                height={50}
                                alt="Rounded ChrisCatto.com avatar"/>
                                <span className="self-center text-lg lg:text-2xl font-semibold whitespace-nowrap dark:text-white">
                                    ChrisCatto.com
                                </span>
                                <Image className="w-10 h-10 ml-5"
                                    unoptimized
                                    src="/images/AmericanFlag.gif"
                                    width={50}
                                    height={50}
                                    alt="American Flag Chris Catto"/>
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Code</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <Link href="/code" className="hover:underline">
                                            Javascript
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/code" className="hover:underline">
                                            SFCC
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                    <Link href="/about">
                                        About
                                    </Link>
                                </h2>
                                {/* <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Resume</a>
                                    </li>
                                </ul> */}
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <Link
                                            href="/about/privacypolicy"
                                            className="hover:underline" aria-current="page"
                                        >
                                            <span>Privacy Policy </span>
                                        </Link>
                                    </li>
                                    {/* <li className="mb-4">
                                        <Link
                                            href="/sitemap.xml"
                                            className="hover:underline" aria-current="page"
                                        >
                                            <span>Sitemap</span>
                                        </Link>
                                    </li> */}
                                    {/* <li>
                                        <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                            © 2006 - {new Date().getFullYear()} Chris Catto .com™. All Rights Reserved.
                        </span>
                        <div className="flex mt-4 sm:justify-center sm:mt-0">
                            {/* https://tw-elements.com/docs/standard/components/social-buttons/ */}
                            <a href="https://github.com/ccatto" target="_blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <span className="[&>svg]:h-5 [&>svg]:w-5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 496 512">
                                        <path
                                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                                    </svg>
                                </span>
                                <span className="sr-only">GitHub account</span>
                            </a>
                            <a href="https://stackoverflow.com/users/17877/catto" target="_blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                <span className="[&>svg]:h-5 [&>svg]:w-5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 384 512">
                                        <path
                                        d="M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z" />
                                    </svg>
                                </span>
                                <span className="sr-only">Stack Overflow account</span>
                            </a>
                            <a href="https://www.linkedin.com/in/catto/" target="_blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                <span className="[&>svg]:h-5 [&>svg]:w-5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 448 512">
                                        <path
                                        d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                                    </svg>
                                </span>
                                <span className="sr-only">Linkedin account</span>
                            </a>
                            <a href="https://www.youtube.com/watch?v=vnqy4wR6QII&list=PLC1889B5D1F4DDD7A" target="_blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                <span className="[&>svg]:h-5 [&>svg]:w-5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 576 512">
                                    <path
                                    d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                                </svg>
                                </span>
                                <span className="sr-only">YouTube account</span>
                            </a>
                            {/* #todo get flex box to work on mobile for the extra 3 social */}
                            {/* <a href="https://sfcc-unofficial.slack.com/team/U04SR6SMJ80" target="_blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                <span className="[&>svg]:h-5 [&>svg]:w-5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 448 512">
                                        <path
                                        d="M94.1 315.1c0 25.9-21.2 47.1-47.1 47.1S0 341 0 315.1c0-25.9 21.2-47.1 47.1-47.1h47.1v47.1zm23.7 0c0-25.9 21.2-47.1 47.1-47.1s47.1 21.2 47.1 47.1v117.8c0 25.9-21.2 47.1-47.1 47.1s-47.1-21.2-47.1-47.1V315.1zm47.1-189c-25.9 0-47.1-21.2-47.1-47.1S139 32 164.9 32s47.1 21.2 47.1 47.1v47.1H164.9zm0 23.7c25.9 0 47.1 21.2 47.1 47.1s-21.2 47.1-47.1 47.1H47.1C21.2 244 0 222.8 0 196.9s21.2-47.1 47.1-47.1H164.9zm189 47.1c0-25.9 21.2-47.1 47.1-47.1 25.9 0 47.1 21.2 47.1 47.1s-21.2 47.1-47.1 47.1h-47.1V196.9zm-23.7 0c0 25.9-21.2 47.1-47.1 47.1-25.9 0-47.1-21.2-47.1-47.1V79.1c0-25.9 21.2-47.1 47.1-47.1 25.9 0 47.1 21.2 47.1 47.1V196.9zM283.1 385.9c25.9 0 47.1 21.2 47.1 47.1 0 25.9-21.2 47.1-47.1 47.1-25.9 0-47.1-21.2-47.1-47.1v-47.1h47.1zm0-23.7c-25.9 0-47.1-21.2-47.1-47.1 0-25.9 21.2-47.1 47.1-47.1h117.8c25.9 0 47.1 21.2 47.1 47.1 0 25.9-21.2 47.1-47.1 47.1H283.1z" />
                                    </svg>
                                </span>
                                <span className="sr-only">Slack account</span>
                            </a> */}
                            <a href="https://www.facebook.com/chriscattodotcom/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5" target="_blank">
                                <span className="[&>svg]:h-5 [&>svg]:w-5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 320 512">
                                        <path
                                        d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                                    </svg>
                                </span>
                                <span className="sr-only">Facebook page</span>
                            </a>
                            <a href="https://twitter.com/ccatto" target="_blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                <span className="[&>svg]:h-5 [&>svg]:w-5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 512 512">
                                    <path
                                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                </svg>
                                </span>
                                <span className="sr-only">Twitter X page</span>
                            </a>
                            <a href="https://www.instagram.com/chriscattousa" target="_blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                <span className="[&>svg]:h-5 [&>svg]:w-5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 448 512">
                                        <path
                                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                    </svg>
                                </span>
                                <span className="sr-only">Instagram</span>
                            </a>
                            {/* <a href="https://t.snapchat.com/UdLzmjxH" target="_blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                <span className="[&>svg]:h-5 [&>svg]:w-5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 512 512">
                                        <path
                                        d="M496.9 366.6c-3.4-9.2-9.8-14.1-17.1-18.2-1.4-.8-2.6-1.5-3.7-1.9-2.2-1.1-4.4-2.2-6.6-3.4-22.8-12.1-40.6-27.3-53-45.4a102.9 102.9 0 0 1 -9.1-16.1c-1.1-3-1-4.7-.2-6.3a10.2 10.2 0 0 1 2.9-3c3.9-2.6 8-5.2 10.7-7 4.9-3.2 8.8-5.7 11.2-7.4 9.4-6.5 15.9-13.5 20-21.3a42.4 42.4 0 0 0 2.1-35.2c-6.2-16.3-21.6-26.4-40.3-26.4a55.5 55.5 0 0 0 -11.7 1.2c-1 .2-2.1 .5-3.1 .7 .2-11.2-.1-22.9-1.1-34.5-3.5-40.8-17.8-62.1-32.7-79.2A130.2 130.2 0 0 0 332.1 36.4C309.5 23.5 283.9 17 256 17S202.6 23.5 180 36.4a129.7 129.7 0 0 0 -33.3 26.8c-14.9 17-29.2 38.4-32.7 79.2-1 11.6-1.2 23.4-1.1 34.5-1-.3-2-.5-3.1-.7a55.5 55.5 0 0 0 -11.7-1.2c-18.7 0-34.1 10.1-40.3 26.4a42.4 42.4 0 0 0 2 35.2c4.1 7.8 10.7 14.7 20 21.3 2.5 1.7 6.4 4.2 11.2 7.4 2.6 1.7 6.5 4.2 10.3 6.7a11.1 11.1 0 0 1 3.3 3.3c.8 1.6 .8 3.4-.4 6.6a102 102 0 0 1 -8.9 15.8c-12.1 17.7-29.4 32.6-51.4 44.6C32.4 348.6 20.2 352.8 15.1 366.7c-3.9 10.5-1.3 22.5 8.5 32.6a49.1 49.1 0 0 0 12.4 9.4 134.3 134.3 0 0 0 30.3 12.1 20 20 0 0 1 6.1 2.7c3.6 3.1 3.1 7.9 7.8 14.8a34.5 34.5 0 0 0 9 9.1c10 6.9 21.3 7.4 33.2 7.8 10.8 .4 23 .9 36.9 5.5 5.8 1.9 11.8 5.6 18.7 9.9C194.8 481 217.7 495 256 495s61.3-14.1 78.1-24.4c6.9-4.2 12.9-7.9 18.5-9.8 13.9-4.6 26.2-5.1 36.9-5.5 11.9-.5 23.2-.9 33.2-7.8a34.6 34.6 0 0 0 10.2-11.2c3.4-5.8 3.3-9.9 6.6-12.8a19 19 0 0 1 5.8-2.6A134.9 134.9 0 0 0 476 408.7a48.3 48.3 0 0 0 13-10.2l.1-.1C498.4 388.5 500.7 376.9 496.9 366.6zm-34 18.3c-20.7 11.5-34.5 10.2-45.3 17.1-9.1 5.9-3.7 18.5-10.3 23.1-8.1 5.6-32.2-.4-63.2 9.9-25.6 8.5-42 32.8-88 32.8s-62-24.3-88.1-32.9c-31-10.3-55.1-4.2-63.2-9.9-6.6-4.6-1.2-17.2-10.3-23.1-10.7-6.9-24.5-5.7-45.3-17.1-13.2-7.3-5.7-11.8-1.3-13.9 75.1-36.4 87.1-92.6 87.7-96.7 .6-5 1.4-9-4.2-14.1-5.4-5-29.2-19.7-35.8-24.3-10.9-7.6-15.7-15.3-12.2-24.6 2.5-6.5 8.5-8.9 14.9-8.9a27.6 27.6 0 0 1 6 .7c12 2.6 23.7 8.6 30.4 10.2a10.7 10.7 0 0 0 2.5 .3c3.6 0 4.9-1.8 4.6-5.9-.8-13.1-2.6-38.7-.6-62.6 2.8-32.9 13.4-49.2 26-63.6 6.1-6.9 34.5-37 88.9-37s82.9 29.9 88.9 36.8c12.6 14.4 23.2 30.7 26 63.6 2.1 23.9 .3 49.5-.6 62.6-.3 4.3 1 5.9 4.6 5.9a10.6 10.6 0 0 0 2.5-.3c6.7-1.6 18.4-7.6 30.4-10.2a27.6 27.6 0 0 1 6-.7c6.4 0 12.4 2.5 14.9 8.9 3.5 9.4-1.2 17-12.2 24.6-6.6 4.6-30.4 19.3-35.8 24.3-5.6 5.1-4.8 9.1-4.2 14.1 .5 4.2 12.5 60.4 87.7 96.7C468.6 373 476.1 377.5 462.9 384.9z" />
                                    </svg>
                                </span>
                                <span className="sr-only">SnapChat community</span>
                            </a>
                            <a href="https://discord.com/users/catto#6016" target="_blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                <span className="[&>svg]:h-5 [&>svg]:w-5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 640 512">
                                        <path
                                        d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z" />
                                    </svg>
                                </span>
                                <span className="sr-only">Discord community</span>
                            </a> */}
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}
export default FooterCatto
