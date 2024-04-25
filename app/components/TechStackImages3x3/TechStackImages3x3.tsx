import ImageCatto from '../ImageCatto/ImageCatto';

const TechStackImages3x3 = () => {
  return (
    <>
      <div className="h-full w-full">
        <div className="flex h-full flex-col items-start rounded-2xl bg-gray-500">
          {/* first row */}
          <div className="mb-1 flex h-1/3 flex-row self-stretch rounded-2xl">
            <div className="w-1/3 rounded-2xl p-1 lg:p-2">
              <div className="relative h-full w-full overflow-hidden rounded-2xl bg-slate-300 text-center align-middle shadow">
                <ImageCatto
                  src="/images/icons/javascript.svg"
                  alt="cattoImage"
                  priority={false}
                  sizes="calc(49vw - 16px)"
                />
              </div>
            </div>
            <div className="w-1/3 p-1 text-center align-middle lg:p-2">
              <div className="relative h-full w-full overflow-hidden rounded-2xl bg-slate-300 text-center align-middle shadow">
                <ImageCatto
                  src="/images/icons/nextjs.svg"
                  alt="cattoImage"
                  priority={false}
                  sizes="calc(49vw - 16px)"
                />
              </div>
            </div>
            <div className="w-1/3 p-1 text-center align-middle lg:p-2">
              <div className="relative h-full w-full overflow-hidden rounded-2xl bg-slate-300 text-center align-middle shadow">
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
          <div className="mb-1 flex h-1/3 flex-row self-stretch rounded-xl">
            <div className="w-1/3 rounded-lg p-1 lg:p-2">
              <div className="relative h-full  w-full overflow-hidden rounded-2xl bg-slate-300 text-center align-middle shadow">
                <ImageCatto
                  src="/images/icons/postgresql.svg"
                  alt="cattoImage"
                  priority={false}
                  sizes="calc(49vw - 16px)"
                />
              </div>
            </div>
            <div className="w-1/3 p-1 text-center align-middle lg:p-2">
              <div className="relative h-full w-full overflow-hidden rounded-2xl bg-slate-300 text-center align-middle shadow">
                <ImageCatto
                  src="/images/icons/Node-Expressjs.svg"
                  alt="cattoImage"
                  priority={false}
                  sizes="calc(49vw - 16px)"
                />
              </div>
            </div>
            <div className="w-1/3 p-1 text-center align-middle lg:p-2">
              <div className="relative h-full w-full overflow-hidden rounded-2xl bg-slate-300 text-center align-middle shadow">
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
          <div className="mb-1 flex h-1/3 flex-row self-stretch rounded-xl">
            <div className="w-1/3 rounded-lg p-1 lg:p-2">
              <div className="relative h-full  w-full overflow-hidden rounded-2xl bg-slate-300 text-center align-middle shadow">
                <ImageCatto
                  src="/images/icons/typescript.svg"
                  alt="cattoImage"
                  priority={false}
                  sizes="calc(49vw - 16px)"
                />
              </div>
            </div>
            <div className="w-1/3 p-1 text-center align-middle lg:p-2">
              <div className="relative h-full w-full overflow-hidden rounded-2xl bg-slate-300 text-center align-middle shadow">
                <ImageCatto
                  src="/images/icons/graphql.svg"
                  alt="cattoImage"
                  priority={false}
                  sizes="calc(49vw - 16px)"
                />
              </div>
            </div>
            <div className="w-1/3 p-1 text-center align-middle lg:p-2">
              <div className="relative h-full w-full overflow-hidden rounded-2xl bg-slate-300 text-center align-middle shadow">
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
  );
};
export default TechStackImages3x3;
