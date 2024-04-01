// import type { Photo } from @models/
import Image from "next/image";

// type Props = {
//   photo: Photo
// }

// const ImageCatto = ({ photo} : {photo: [photoURL: string, photoAlt: string}]) => {
const ImageCatto = ({ photo} : {photo: string}) => {
  return (
    <>
        <div className="rounded-xl h-96 relative overflow-hidden">
          ImageCatto
          <Image
            src={photo}
            alt={photo}
            fill={true}
            sizes="(max-width: 786px) 100vw, (max-width:1200px) 50vw, 33vw"
            className="object-cover" 
          />

          <h2>{photo}</h2>
        </div>
    </>
  )
}
export default ImageCatto
