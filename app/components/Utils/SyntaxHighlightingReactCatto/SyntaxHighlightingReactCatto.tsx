'use client';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// #todo: pass in an array
// interface codeBlocks {
//   codeBlocks: codeBlock[]
// }

// interface codeBlock {
//   line1: string;
//   line2: string;
//   // line3: string;
//   // line4: string;
//   // line5: string;
//   // line6: string;
//   // line7: string;
//   // line8: string;
//   // line9: string;
//   // line10: string;
// }

// type Props = {
//   // codeString: string,
//   codeString: codeBlock[],
//   nullableProperty?: number,
// }

type Props = {
  codeString: string;
  codeString1?: string;
  // codeString2?: string,
  // codeString3?: string,
  // codeString4?: string,
  // codeString5?: string,
  // codeString6?: string,
  // codeString7?: string,
  // codeString8?: string,
  // codeString9?: string,
  // codeString10?: string,
  // codeString11?: string,
  // codeString12?: string,
  // codeString13?: string,
};

// const SyntaxHighlightingReactCatto = ({ codeString }: Props) => {
const SyntaxHighlightingReactCatto = ({
  codeString,
  codeString1,
  // codeString2,
  // codeString3,
  // codeString4,
  // codeString5,
  // codeString6,
  // codeString7,
  // codeString8,
  // codeString9,
  // codeString10,
  // codeString11,
  // codeString12,
  // codeString13,
}: Props) => {
  const codeString22 = '(num) => num + 1<br/> next + "\n" + address';

  // codeString.forEach(function (miniCodeString, index) {
  //   // console.log(index); // index
  //   // console.log(codeString); // value
  //   if (codeString !== null) {
  //     console.log(codeString);
  //   }
  // });

  const str = 'Hello \n World';

  // const addLineBreak = (str: string) =>
  // str.split('\n').map((subStr) => {
  //   return (
  //     <>
  //       {subStr}
  //       <br />
  //     </>
  //   );
  // });

  return (
    <SyntaxHighlighter
      language="javascript"
      style={materialDark}
      showLineNumbers
    >
      {codeString}
      {/* {addLineBreak(str)} */}
    </SyntaxHighlighter>
  );
};

export default SyntaxHighlightingReactCatto;
