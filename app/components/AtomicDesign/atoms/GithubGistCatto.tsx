'use client';

import Gist from 'super-react-gist';

type Props = {
  gitSecret: string;
  fileName: string;
};

const GithubGistCatto = () => {
  // const GithubGistCatto = ({ gitSecret, fileName}: Props) => {
  return (
    <Gist url='https://gist.github.com/ccatto/d33aadd7e683e25ba8c6942b5eeec9b1#file-name' />
 
  );
};
export default GithubGistCatto;

{/* <Gist url=gitSecret + "#" +fileName /> */}




