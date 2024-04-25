'use client'
import Link from "next/link"

type Props = {
  linkText: string,
  href: string,
}

const LinkCatto = ({ linkText = 'home', href = '/' }: Props) => {
  return (
    <Link href={href} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
      {linkText}
    </Link>
  )
}
export default LinkCatto;
