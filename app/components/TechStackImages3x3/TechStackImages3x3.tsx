import ImageCatto from "../ImageCatto/ImageCatto";

const TechStackImages3x3 = () => {
  return (
    <>
      <hr className="m-10"/>
        <div className="w-full h-96 block rounded-lg shadow">
          <div className="flex h-64 flex-col m-2 p-2 rounded-xl items-start bg-red-300">
            {/* first row */}
            <div className="h-1/3 mb-1 flex flex-row bg-slate-50 self-stretch rounded-xl">
                <div id="1-1" className="w-1/3 p-2 rounded-lg">
                <div className="h-full w-full  overflow-hidden relative rounded-lg shadow text-center align-middle">
                   <ImageCatto
                      src="/images/icons/nextjs.svg" 
                      alt="cattoImage"
                      priority={false}
                      sizes="calc(49vw - 16px)"
                    />
                  </div>
                </div>
                <div id="1-2" className="w-1/3 p-2 text-center align-middle">
                  <div className="h-full w-full overflow-hidden relative bg-blue-400 rounded-lg shadow text-center align-middle">
                    <ImageCatto
                      src="/images/icons/aws.svg" 
                      alt="cattoImage"
                      priority={false}
                      sizes="calc(49vw - 16px)"
                    />
                  </div>
                </div>
                <div id="1-3" className="w-1/3 p-2 text-center align-middle">
                  <div className="h-full w-full overflow-hidden relative bg-blue-400 rounded-lg shadow text-center align-middle">
                      <ImageCatto
                        src="/images/icons/javascript.svg" 
                        alt="cattoImage"
                        priority={false}
                        sizes="calc(49vw - 16px)"
                      />
                  </div>
                </div>
            </div>
            {/* second row */}
            <div className="h-1/3 mb-1 flex flex-row self-stretch rounded-xl">
              <div id="1-1" className="w-1/3 p-2 rounded-lg">
                <div className="h-full w-full  overflow-hidden relative rounded-lg shadow text-center align-middle">
                  <ImageCatto
                    src="/images/icons/postgresql.svg" 
                    alt="cattoImage"
                    priority={false}
                    sizes="calc(49vw - 16px)"
                  />
                </div>
              </div>
              <div id="1-2" className="w-1/3 p-2 text-center align-middle">
                <div className="h-full w-full overflow-hidden relative bg-blue-400 rounded-lg shadow text-center align-middle">
                  <ImageCatto
                    src="/images/icons/Node-Expressjs.svg" 
                    alt="cattoImage"
                    priority={false}
                    sizes="calc(49vw - 16px)"
                  />
                </div>
              </div>
              <div id="1-3" className="w-1/3 p-2 text-center align-middle">
                <div className="h-full w-full overflow-hidden relative bg-blue-400 rounded-lg shadow text-center align-middle">
                    <ImageCatto
                      src="/images/icons/Tailwind-css.svg" 
                      alt="cattoImage"
                      priority={false}
                      sizes="calc(49vw - 16px)"
                    />
                </div>
              </div>
            </div>
            {/* 3rd row */}
            <div className="h-1/3 mb-1 flex flex-row bg-red-400 self-stretch rounded-xl">
              Three
            </div>
          </div>
        </div>
        <hr className="m-10"/>
    </>
  )
}
export default TechStackImages3x3;
