'use client';
import Link from 'next/link';

type Props = {
  linkText: string;
  href: string;
};

const LinkCatto = ({ linkText = 'home', href = '/' }: Props) => {
  return (
    <Link
      href={href}
      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
    >
      {linkText}
    </Link>
  );
};
export default LinkCatto;
