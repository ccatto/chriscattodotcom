'use client';

type Props = {
  path: string;
  // height: string;
};

const CodeGistsCatto = ({ path }: Props) => {
  // const CodeGistsCatto = ({ path, height}: Props) => {
  return (
    <>
      {/* <div className="w-full "> */}
      <iframe width="100%" className=" h-[13303px]; overflow-hidden" allow="clipboard-write" src={path}></iframe>
      {/* </div> */}
    </>
  );
};
export default CodeGistsCatto;
