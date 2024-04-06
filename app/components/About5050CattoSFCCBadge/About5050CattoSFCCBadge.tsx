// import Image from "next/image";
import ImageCatto from "../ImageCatto/ImageCatto";



const About5050CattoSFCCBadge = () => {
  return (
    <>
      <div className="flex m-4 h-[23rem] lg:h-[33rem]">
      {/* <div className="flex m-4 lg:h-[30rem] md:h-[68rem]"> */}
      {/* 68rem need to make mobile height alter to bigger */}
        <div className="w-1/2 bg-gray-400 h-full mr-3">
          <div className="h-full w-full block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-md lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Salesforce Commerce Cloud B2C Developer Certified
            </h5>
            <div className="font-normal text-gray-700 dark:text-gray-400">
              <p>
                I have enjoyed eCommerce development with SFCC since it was Demandware in 2015.
              </p>
              <div className="hidden lg:block">
                <p>
                  Over the years I have worked on many areas of the platform including:
                </p>
                <ul className="w-full mt-2 mb-2">
                  <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    Utilized different architecture such as SFRA; Composable/PWA kit; OCAPI; SCAPI & good ol' SiteGen
                  </li>
                  <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                    Worked within all area's of Business Manager
                  </li>
                  <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                    Integration of 3rd party link cartridges such as payment processors, API's; taxes; subscriptions & loyalty.
                  </li>
                  <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                    Development of jobs to automate tasks & processes including custom scripts & out of the box job steps
                  </li>
                  <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                    Implemented javascript controllers & ISML templates
                  </li>
                  <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                    Developed with Page designer; content slots & content assets
                  </li>
                  <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                    Utilized & developed custom hooks to configure functionality
                  </li>
                  <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                    Used OCAPI Open Commerce API to access HTTP requests & responses
                  </li>
                  <li className="w-full px-4 py-2 rounded-b-lg">
                    Measured & ensure site performance
                  </li>        
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 bg-gray-400 h-full ml-3">
          <div className="h-full w-full overflow-hidden relative rounded-lg shadow dark:bg-gray-500 dark:border-gray-700 dark:hover:bg-gray-700">
            {/* <div>test</div> */}
            <ImageCatto 
              src="/images/Chris-Catto-SFCC-Certified-B2C-Commerce-Developer-Badge.png" 
              alt="cattoImage"
              priority={false}
              sizes="calc(49vw - 16px)"
            />
          </div>
          {/* <ImageCatto photo="/images/Chris-Catto-SFCC-Certified-B2C-Commerce-Developer-Badge.png" /> */}

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
export default About5050CattoSFCCBadge
