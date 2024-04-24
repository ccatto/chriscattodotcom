// import Image from "next/image";
import ImageCatto from "../ImageCatto/ImageCatto";

const About5050Catto1 = () => {
  return (
    <>
      <div className="flex m-4">
        <div className="w-1/2 bg-gray-400 h-12">
          <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Learned to code on IBM in early 1980's
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              My father taught me how to code on an IBM with 5 1/4 floppy's when I was in grade school. I learned DOS & Lotus 1-2-3 which stated my love for coding.
            </p>
          </div>
        </div>
        <div className="w-1/2 bg-gray-500">
          {/* <ImageCatto photo="/images/ibm-5150.png" /> */}
          {/* <Image 
            className="mt-20 rounded-full w-96 h-96" 
            src="/images/Chris-Catto-Sunrise.jpg"
            width={800}
            height={374}
            alt="Chris Catto Sunrise"/> */}
        </div>
      </div>
    </>
  )
}

export default About5050Catto1
