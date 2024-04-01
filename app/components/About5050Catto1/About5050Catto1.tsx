// import Image from "next/image";
import ImageCatto from "../ImageCatto/ImageCatto";

const About5050Catto1 = () => {
  return (
    <>
      <div className="flex m-4">
        <div className="w-1/2 bg-gray-400 h-12">
          some text
        </div>
        <div className="w-1/2 bg-gray-500">
          some text 2
          <ImageCatto photo="/Catto.png" />
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
