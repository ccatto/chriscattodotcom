import ImageCatto from "../ImageCatto/ImageCatto";

const TechStackImages3x3 = () => {
  return (
    <>
      <div className="w-full h-full">
        <div className="flex h-full flex-col rounded-2xl items-start bg-gray-500">
          {/* first row */}
          <div className="h-1/3 mb-1 flex flex-row self-stretch rounded-2xl">
            <div className="w-1/3 p-1 lg:p-2 rounded-2xl">
              <div className="h-full w-full overflow-hidden relative bg-slate-300 rounded-2xl shadow text-center align-middle">
                <ImageCatto
                  src="/images/icons/javascript.svg"
                  alt="cattoImage"
                  priority={false}
                  sizes="calc(49vw - 16px)"
                />
              </div>
            </div>
            <div className="w-1/3 p-1 lg:p-2 text-center align-middle">
              <div className="h-full w-full overflow-hidden relative bg-slate-300 rounded-2xl shadow text-center align-middle">
                <ImageCatto
                  src="/images/icons/nextjs.svg"
                  alt="cattoImage"
                  priority={false}
                  sizes="calc(49vw - 16px)"
                />
              </div>
            </div>
            <div className="w-1/3 p-1 lg:p-2 text-center align-middle">
              <div className="h-full w-full overflow-hidden relative bg-slate-300 rounded-2xl shadow text-center align-middle">
                <ImageCatto
                  src="/images/icons/aws.svg"
                  alt="cattoImage"
                  priority={false}
                  sizes="calc(49vw - 16px)"
                />
              </div>
            </div>
          </div>
          {/* second row */}
          <div className="h-1/3 mb-1 flex flex-row self-stretch rounded-xl">
            <div className="w-1/3 p-1 lg:p-2 rounded-lg">
              <div className="h-full w-full  overflow-hidden relative bg-slate-300 rounded-2xl shadow text-center align-middle">
                <ImageCatto
                  src="/images/icons/postgresql.svg"
                  alt="cattoImage"
                  priority={false}
                  sizes="calc(49vw - 16px)"
                />
              </div>
            </div>
            <div className="w-1/3 p-1 lg:p-2 text-center align-middle">
              <div className="h-full w-full overflow-hidden relative bg-slate-300 rounded-2xl shadow text-center align-middle">
                <ImageCatto
                  src="/images/icons/Node-Expressjs.svg"
                  alt="cattoImage"
                  priority={false}
                  sizes="calc(49vw - 16px)"
                />
              </div>
            </div>
            <div className="w-1/3 p-1 lg:p-2 text-center align-middle">
              <div className="h-full w-full overflow-hidden relative bg-slate-300 rounded-2xl shadow text-center align-middle">
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
          <div className="h-1/3 mb-1 flex flex-row self-stretch rounded-xl">
            <div className="w-1/3 p-1 lg:p-2 rounded-lg">
              <div className="h-full w-full  overflow-hidden relative bg-slate-300 rounded-2xl shadow text-center align-middle">
                <ImageCatto
                  src="/images/icons/typescript.svg"
                  alt="cattoImage"
                  priority={false}
                  sizes="calc(49vw - 16px)"
                />
              </div>
            </div>
            <div className="w-1/3 p-1 lg:p-2 text-center align-middle">
              <div className="h-full w-full overflow-hidden relative bg-slate-300 rounded-2xl shadow text-center align-middle">
                <ImageCatto
                  src="/images/icons/graphql.svg"
                  alt="cattoImage"
                  priority={false}
                  sizes="calc(49vw - 16px)"
                />
              </div>
            </div>
            <div className="w-1/3 p-1 lg:p-2 text-center align-middle">
              <div className="h-full w-full overflow-hidden relative bg-slate-300 rounded-2xl shadow text-center align-middle">
                <ImageCatto
                  src="/images/icons/react.svg"
                  alt="cattoImage"
                  priority={false}
                  sizes="calc(49vw - 16px)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default TechStackImages3x3;
