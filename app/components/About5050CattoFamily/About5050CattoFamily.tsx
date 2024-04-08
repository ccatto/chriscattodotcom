import ImageCatto from "../ImageCatto/ImageCatto";

const About5050CattoFamily = () => {
  return (
    <div className="flex m-4 h-[23rem] lg:h-[17rem]">
      <div className="w-1/2 bg-gray-400 h-full mr-3">
        <div className="h-full w-full overflow-hidden relative rounded-lg shadow dark:bg-gray-500 dark:border-gray-700 dark:hover:bg-gray-700">
          <ImageCatto
            src="/images/CattoFam.svg"
            alt="cattoImage"
            priority={false}
            sizes="calc(49vw - 16px)"
          />
        </div>
      </div>
      <div className="w-1/2 bg-gray-400 h-full ml-3">
        <div className="h-full w-full block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-md lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Personal Life - Family
          </h5>
          <div className="font-normal text-gray-700 dark:text-gray-400">
            <div className="hidden lg:block">
              <p className="indent-4">
                I grew up in the finger lakes in upstate New York with my parents & two older brothers. My father pushed education ever since I was little. While other kids played games on Atari's we had an IBM with 5 1/4 floppy disks that I learned to code on. I enjoyed playing many sports too such as hockey & tennis.
              </p>
              <p className="indent-4">
                I moved to attend Florida Atlantic University to study computer engineering; met my wife there & have lived in Florida ever since. We have three children; I enjoy spending my spare time with family; coding & still play sports for recreation.
              </p>
              {/* <p className="indent-4">
                I grew up in the finger lakes in upstate New York with my parents & two older brothers. 
              </p> */}
            </div>
            <div className="block lg:hidden">
              <p className="indent-4 text-sm">
                I grew up in NY; moved to Florida to study computer science at FAU where I met my wife. We have three children & I have a lot to be thankful for.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About5050CattoFamily
