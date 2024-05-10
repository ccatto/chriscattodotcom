import Link from 'next/link';
import Image from 'next/image';

const NavLeftNameImageCatto = () => {
  return (
    // Top left Site name & image
    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <Image
        src="/Chris-Catto-dot-com.png"
        width={107}
        height={50}
        className="hidden rounded-2xl md:block"
        alt="ChrisCatto.com"
      />
      <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
        ChrisCatto.com
      </span>
    </Link>
  );
};

export default NavLeftNameImageCatto;
