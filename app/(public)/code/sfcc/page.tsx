import { Metadata } from 'next'
import JumbotronCattoFlexible from "@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible"
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Chris Catto Code SFCC',
  description: 'Chris Catto Code Salesforce Commerce Cloud'
}

export default function Page() {
  return (
    <>
      <div className="flex flex-col flex-nowrap h-full w-full ">
        <div className='flex-1'>
          <JumbotronCattoFlexible
            title="SFCC"
            description="Salesforce Commerce Cloud is an eCommerce platform."
          />
        </div>
        <div className='flex-[80] m-4 p-4 rounded-2xl dark:bg-[#0064a5] text-black ring-2 ring-gray-300 dark:ring-gray-500'>
          <ul className="space-y-2 font-medium">
            <li>
              <Link href="/code/javascript/overview" className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white group">
                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                  <path fillRule="evenodd" d="M6,9 C6.55228,9 7,9.44772 7,10 L7,14 C7,14.5523 6.55228,15 6,15 L2,15 C1.44772,15 1,14.5523 1,14 L1,10 C1,9.44772 1.44772,9 2,9 L6,9 Z M14,13 C14.5523,13 15,13.4477 15,14 C15,14.5523 14.5523,15 14,15 L10,15 C9.44772,15 9,14.5523 9,14 C9,13.4477 9.44772,13 10,13 L14,13 Z M5,11 L3,11 L3,13 L5,13 L5,11 Z M14,9 C14.5523,9 15,9.44772 15,10 C15,10.5523 14.5523,11 14,11 L10,11 C9.44772,11 9,10.5523 9,10 C9,9.44772 9.44772,9 10,9 L14,9 Z M6,1 C6.55228,1 7,1.44772 7,2 L7,6 C7,6.55228 6.55228,7 6,7 L2,7 C1.44772,7 1,6.55228 1,6 L1,2 C1,1.44772 1.44772,1 2,1 L6,1 Z M14,5 C14.5523,5 15,5.44772 15,6 C15,6.51283143 14.613973,6.93550653 14.1166239,6.9932722 L14,7 L10,7 C9.44772,7 9,6.55228 9,6 C9,5.48716857 9.38604429,5.06449347 9.88337975,5.0067278 L10,5 L14,5 Z M5,3 L3,3 L3,5 L5,5 L5,3 Z M14,1 C14.5523,1 15,1.44772 15,2 C15,2.55228 14.5523,3 14,3 L10,3 C9.44772,3 9,2.55228 9,2 C9,1.44772 9.44772,1 10,1 L14,1 Z" />
                </svg>
                <span className="ms-3">
                  SFCC
                </span>
                {/* <Link href="https://www.salesforce.com/products/commerce/" target='_blank'>SFCC</Link> Overview */}
              </Link>
            </li>
          </ul>
        </div>
        <hr className="m-3" />
      </div>
    </>
  )
}