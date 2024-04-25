import ImageCatto from '../ImageCatto/ImageCatto';

const About5050CattoSFCCBadge = () => {
  return (
    <div className="m-4 flex h-[23rem] lg:h-[36rem]">
      <div className="mr-3 h-full w-1/2 bg-gray-400">
        <div className="block h-full w-full rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <h5 className="text-md mb-2 font-bold tracking-tight text-gray-900 dark:text-white lg:text-2xl">
            Salesforce Commerce Cloud B2C Developer Certified
          </h5>
          <div className="font-normal text-gray-700 dark:text-gray-400">
            <p>
              I have enjoyed eCommerce development with SFCC since it was
              Demandware in 2015.
            </p>
            <div className="hidden lg:block">
              <p>
                Over the years I have worked on many areas of the platform
                including:
              </p>
              <ul className="mb-2 mt-2 w-full">
                <li className="w-full rounded-t-lg border-b border-gray-200 px-4 py-2 dark:border-gray-600">
                  Utilized different architecture such as SFRA; Composable/PWA
                  kit; OCAPI; SCAPI & good ol' SiteGen
                </li>
                <li className="w-full border-b border-gray-200 px-4 py-2 dark:border-gray-600">
                  Worked within all area's of Business Manager
                </li>
                <li className="w-full border-b border-gray-200 px-4 py-2 dark:border-gray-600">
                  Integration of 3rd party link cartridges such as payment
                  processors, API's; taxes; subscriptions & loyalty.
                </li>
                <li className="w-full border-b border-gray-200 px-4 py-2 dark:border-gray-600">
                  Development of jobs to automate tasks & processes including
                  custom scripts & out of the box job steps
                </li>
                <li className="w-full border-b border-gray-200 px-4 py-2 dark:border-gray-600">
                  Implemented javascript controllers & ISML templates
                </li>
                <li className="w-full border-b border-gray-200 px-4 py-2 dark:border-gray-600">
                  Developed with Page designer; content slots & content assets
                </li>
                <li className="w-full border-b border-gray-200 px-4 py-2 dark:border-gray-600">
                  Utilized & developed custom hooks to configure functionality
                </li>
                <li className="w-full border-b border-gray-200 px-4 py-2 dark:border-gray-600">
                  Used OCAPI Open Commerce API to access HTTP requests &
                  responses
                </li>
                <li className="w-full rounded-b-lg px-4 py-2">
                  Measured & ensure site performance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-3 h-full w-1/2 bg-gray-400">
        <div className="relative h-full w-full overflow-hidden rounded-lg shadow dark:border-gray-700 dark:bg-gray-500 dark:hover:bg-gray-700">
          <ImageCatto
            src="/images/Chris-Catto-SFCC-Certified-B2C-Commerce-Developer-Badge.png"
            alt="cattoImage"
            priority={false}
            sizes="calc(49vw - 16px)"
          />
        </div>
      </div>
    </div>
  );
};
export default About5050CattoSFCCBadge;
