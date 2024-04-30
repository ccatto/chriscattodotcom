import Image from 'next/image';
// import type { Photo } from @models/
// import { ImageClass } from "@/app/models/image";

type Props = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes: string;
};

// const imageOne = new ImageClass('urlFake', 'altFake');
// console.log("imageOne === ", imageOne);
// const ImageCatto = ({ photo} : {photo: [photoURL: string, photoAlt: string}]) => {
// const ImageCatto = ({ photo} : {photo: string}) => {

const ImageCatto = ({ src, alt, priority, sizes }: Props) => {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill={true}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAHaAz4DASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAEEAwX/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APFAdGQAAAAAAAAAAAAEAAAABAAAEBAAABAAAAQABFQBFQBFQAAEABAAQAEAQQABFQBFQBFQEAARUARUAAARUQAAAAAAAAFRRQAFAUAAURQAAUAAAFAAAAVFAAAAAABuAaQAAAAAAAAAAAAQAAAEVAAEAAEAAABAAAQAABAARUARUABAAAQAEABAEEABAAQAEABAAQABFQAAEAQAAAAAAAAABVAAVFUAAFRQAAUAAAFEUAABUAURQAAAAbgGkAAAAAAAQFEAAAAABAABAAAQAAAEAAABAABAAAQABAARUARUABAAQAEQAAQAEABAAQAEABAAEVAAEAAAQBRFFAAAAURVAAFEUAAFAAVFAAAVAFEUAAAABUAUQBvEGkVAAAAAAAAAAEAAEAAAEBUAAABAAAABAAAEABFQAEAABAAEABAAQAEVEBFQBFQBFQBFQAEABAAAQAAEQABQAAAFEAUAAAFEVQVAFABRFAABRAFAAABRAFEUAAAAG4QVFEAUQBRAAAAAAAAQBUAAAAEBUAAAAQAAAQAAQAEAAAQAAQAEABAARAABAAQAEABAAEABAAQBQEAAAAQBAFEAURQAAUQUUAFEUBUAUABUAURQAAUQBQAAAAAAAbhBUUQBRAFEAUQAAAAAAAEAVAAAAEAAAAQAABAABAAAAQAEABAAAQBAQBRAAQAEABAAQAEAAEABAAAEAABAAAAAAUFQBRFAVAFEUFEAUAFEAUABUAURQAAUQBRAFEAbhBUUQBRAFEAUQBUAAAAAAQBRAAAAQAAAEAAABAAABAABAAQAAUQEBAABAAQAEABAAQAEABAAQAAEAAEAAAAEAAABQVAFAAVAFABRAVQAUQBQAUQBQAFQBRAFEAUQBuEFZUQBRAFEAUQAAABAUQBRAAAAQBRAAAAQBUAAQABAVAFBAABAQAEAAEABAAQAEABAAQAEABAAQAEBUAAQBUBFAAAAAAUQBRFUFQBRAFVAFEUFEAURQUQBRFAAAVAFEAUQBuEFZUQAAAAABAUQBRAFEAAAAQFEAVAAEAUQABAVAFARBUAAEAAAQABAAEABAAQAEABAAQAEAEAAQAEBUBFAAAAAQFEAUAAAAAABRRAFABRAFEUFEAURQUQBRAFEAURQAAbRBWVEAUQQUQUUQQUQBUAAEBRAFEAVAABAUQAAFBAFQAAQFQABAAEBUABAAEABAAEABABAAQAQABAUBAAEAEBUAAAABAAAAAAUUQBQAAAAFBUAUQBVQBRAFEAVUAUQBRAFEAbhAZUQAAAAABAUQBRAFEAUQAAAEBVEAAABAFEAAQFEABAFQABAAEBUEBUABAAQAEABAAQBRAAQEAABAAAQAAAAAAAAAAAAAAAAFQUUQBQAAAAFAABUBVEAUQBRAFEAbhAYUQBRAFEAUQBRAUAAEAUQBRAFQABAFEAVAAEAUQABAUQABAVAAEABAAEABAAQAEFVBAARAAAEAAEAAAAAAAAAAAAAAAAAAAAAAAAAABUFFEAUAAAAAABQAAAFbBAZUQBRBBRBRRBBRAFEAUQAAAEAUQBRAAEBRAFQABAFQABAFQABAAEBUEBUEBUAUQABABAABAVAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFQBRBRRAFEAUQBsEBFEAVAAAABAUQBRAFEAUQBUAAEBRAFEAAABAFQAAQFEABAFQQVUAAQAEAAQAEBUABAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAahBUUQBRAFEAUQBRAAAAEBRAFEAUQABAUQBRAAEBRAFQABAVUEBRAAQAEAAQFQAARAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABoEBFEAUQBRAFEAUQBRAFEAVAABAUQBRAFQABAFEAVBBVEAVBAUQAEAAQFQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHcQQUQBRAFEAUQAAAAABAUQBRAFQAAQFEFFQABAFEAAQFEAAQFQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHUBkAAAAAAAAAFAQBRAFEAAAAABAFQAAABAAAAEBUAABQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdAGQAAAAAAAAAAAAAAEAVAAAUAAEAAAAAAQAAAAUEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHQBkAAAAAAAAAAEAAAAAAAAABAUAAAAAQAAABQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdAGVABAAAAAAAABFAQVAAAAAAAEVFAAAABFQAAABRBUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB1AZURQEFAQUBBQEFAQAAAQRQEFFEAAABBUAAAABAAAFBFAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHUUZVBQEFAQUBBQEFQABUAAEUBBUAABBQEFQBFAQABFAQBQABBUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB2FEVBQRBQEFAQAAAAABFAQUBAAAAQVAAAQVFBFAQVAEUBAAAAQVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdwEAAAAAAAAAABFAQUBAFAAEFAQABFAQVAEUBAAQVAEUBAAAAQVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaAEAAABQAAABBQEFQAAAABFAQVAAAQVAAAQVAEUEQAEFQBFAQAURQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABpRQEFAQUBBQEFQAAAAAAEFAQAAAEFAQABFAQAEAVEFQABBAAQVAABRFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGkAAAAAAAAABFAQUBAAAAEUBAAAAEVFAAEFQQRUAABAAEVEBFAQAAAVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaQAAAAAAAAAAAAAAAQAAABFQABQABAAEVBAAEAARUAABAEEAAAFEVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaQAAAAAAAAAAAAAAAQAAABFQABQAARUARUEAAQABFQAAEAQQAAAURUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//2Q=="
        sizes={sizes}
        className="mx-auto h-auto w-full rounded-2xl object-contain hover:opacity-80"
        priority={!!priority}
        // className="object-cover h-auto max-w-full"
        // className="w-full h-full top-0 left-0 object-cover rounded-2xl"
        // width={650}
        // height={650}
        // sizes="calc(49vw - 16px)"
      />
      {/* <div className="rounded-xl relative overflow-hidden"> */}
      {/* <div className="w-full relative pt-[100%]"> */}
      {/* // <h2>{blah}</h2> */}
      {/* </div> */}
    </>
  );
};
export default ImageCatto;
