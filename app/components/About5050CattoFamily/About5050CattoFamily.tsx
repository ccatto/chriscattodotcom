import ImageCatto from '../ImageCatto/ImageCatto';

const About5050CattoFamily = () => {
  return (
    <div className="m-4 flex h-[23rem] lg:h-[17rem]">
      <div className="mr-3 h-full w-1/2 bg-gray-400">
        <div className="relative h-full w-full overflow-hidden rounded-lg shadow dark:border-gray-700 dark:bg-gray-500 dark:hover:bg-gray-700">
          <ImageCatto
            src="/images/CattoFam.svg"
            alt="cattoImage"
            priority={false}
            sizes="calc(49vw - 16px)"
          />
        </div>
      </div>
      <div className="ml-3 h-full w-1/2 bg-gray-400">
        <div className="block h-full w-full rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <h5 className="text-md mb-2 font-bold tracking-tight text-gray-900 dark:text-white lg:text-2xl">
            Personal Life - Family
          </h5>
          <div className="font-normal text-gray-700 dark:text-gray-400">
            <div className="hidden lg:block">
              <p className="indent-4">
                I grew up in the finger lakes in upstate New York with my
                parents & two older brothers. My father pushed education ever
                since I was little. While other kids played games on Atari's we
                had an IBM with 5 1/4 floppy disks that I learned to code on. I
                enjoyed playing many sports too such as hockey & tennis.
              </p>
              <p className="indent-4">
                I moved to attend Florida Atlantic University to study computer
                engineering; met my wife there & have lived in Florida ever
                since. We have three children; I enjoy spending my spare time
                with family; coding & still play sports for recreation.
              </p>
              {/* <p className="indent-4">
                I grew up in the finger lakes in upstate New York with my parents & two older brothers. 
              </p> */}
            </div>
            <div className="block lg:hidden">
              <p className="indent-4 text-sm">
                I grew up in NY; moved to Florida to study computer science at
                FAU where I met my wife. We have three children & I have a lot
                to be thankful for.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About5050CattoFamily;
