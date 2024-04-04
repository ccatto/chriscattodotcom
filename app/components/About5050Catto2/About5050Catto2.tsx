// import Image from "next/image";
import ImageCatto from "../ImageCatto/ImageCatto";

const About5050Catto2 = () => {
  return (
    <>
      <div className="flex m-4">
        <div className="w-1/2 bg-gray-500">
          raw text
          {/* <ImageCatto photo="/images/ibm-5150.png" /> */}
        </div>
        <div className="w-1/2 bg-gray-400 h-12">
          <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Enjoyed playing & watching sports
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Even before I could talk I would play hockey in my basement and ride my tricycle around pretending to be the zamboni. My brothers taught me 
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
export default About5050Catto2
