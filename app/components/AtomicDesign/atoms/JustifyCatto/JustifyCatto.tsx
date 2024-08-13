'use client';

type Props = {
  text: string;
  style: string;
  onClick2: string;
  // isButton?: boolean,
  // buttonText: string,
};

//  Chris Catto - Accretive Coding Challenge - Justified Text - 8.12.24
// JavaScript function named justifyLineCatto
//                     Input: line of text & desired length;
//                     Output: Justified string;


const JustifyCatto = () => {
  // ts below (used straight js since easier to use online code pens & fiddles to run):
  // const countNumberOfWords = (str: string) => {
  // js below
  const countNumberOfWords = (str) => {
    return (
      str.split(' ').filter((word) => {
        return word != '';
      }).length - 1
    );
  };

  const justifySentence = (sentence, lengthEntered) => {
    const sentenceWords = sentence.split(' ');
    const sentenceLength = sentence.length;
    let extraSpaces = lengthEntered - sentenceLength;
    let numberOfSpacesAdded = 0;
    let countOfExtraSpaceAdded = 0;
    let justifiedSentence = '';
    // could have taken the length of the sentenceWords array but this function maybe a little more accurate
    const totalOriginalSpaces = countNumberOfWords(sentence);
    numberOfSpacesAdded = Math.floor(extraSpaces / totalOriginalSpaces) + 1;
    countOfExtraSpaceAdded = extraSpaces % totalOriginalSpaces;

    sentenceWords.map((word, index) => {
      const noOfCharsInWord = word.length;
      let padding = 0;
      if (countOfExtraSpaceAdded >= index + 1) {
        padding = noOfCharsInWord + numberOfSpacesAdded + 1;
      } else {
        padding = noOfCharsInWord + numberOfSpacesAdded;
      }
      if (totalOriginalSpaces !== index) {
        justifiedSentence += word.padEnd(padding);
      } else if (totalOriginalSpaces === index) {
        justifiedSentence += word;
      }
    });
    return justifiedSentence;
  };

  const justifyLineCatto = (line, lengthEntered) => {
    const lineLength = line.length;
    if (lineLength < lengthEntered) {
      return justifySentence(line, lengthEntered);
    } else if (lineLength >= lengthEntered) {
      return line;
    }
  };

  const justifiedLineTest0 = justifyLineCatto(
    'The quick brown fox jumps over the lazy dog.',
    52,
  );
  // original test text is 44 chars & 52 desiredLength; 8 spaces originally & 52 - 44 = 8 extra chars - so justified string will have 2 spaces on each word separation; justified line:
  // The  quick  brown  fox  jumps  over  the  lazy  dog.

  const justifiedLineTest1 = justifyLineCatto(
    'The quick brown fox jumps over the lazy dog.',
    65,
  );
  // The    quick    brown    fox    jumps    over   the   lazy   dog.

  const justifiedLineTest2 = justifyLineCatto(
    'The quick brown fox jumps over the lazy dog.',
    44,
  );
  // original test text is 44 char length
  // The quick brown fox jumps over the lazy dog.

  const justifiedLineTest3 = justifyLineCatto('She fed the dog and cat.', 30);
  // She   fed  the  dog  and  cat.

  const justifiedLineTest4 = justifyLineCatto('She fed the dog and cat.', 42);
  // She     fed     the     dog    and    cat.

  const justifiedLineTest5 = justifyLineCatto('The quick chicken', 2);
  // original 17 chars; justified line below:
  // The  quick  chicken

  const justifiedLineTest6 = justifyLineCatto(
    'JavaScript is fun in Chinese too 代码干净好!',
    50,
  );
  // original 39 chars; justified line below:
  // JavaScript   is   fun   in   Chinese   too  代码干净好!

  console.log(
    'Chris Catto - Accretive Coding Challenge - Justified Text - 8.12.24',
  );
  console.log('JavaScript function named: justifyLineCatto');
  console.log(
    '                           Input: line of text & desired length;',
  );
  console.log('                           Output: Justified string;');
  console.log('Test 0: ');
  console.log(
    '🚀 ~  original test text is 44 chars & 52 desiredLength; 8 word spaces originally & 52 - 44 = 8 extra chars -',
  );
  console.log(
    ' so justified string will have 2 blank char spaces on each word separation; justified line:',
  );
  console.log(justifiedLineTest0);
  // The  quick  brown  fox  jumps  over  the  lazy  dog.
  console.log('Test 1: ');
  console.log(
    '🚀 ~  original test text is 44 chars & 65 desiredLength; 8 word spaces originally & 65 - 44 = 21 extra chars - ',
  );
  console.log(
    'so justified string will have 5 spaces between words of 4 blank char spaces & 3 spaces between words of 3 blank char space; justified line below:',
  );
  console.log(justifiedLineTest1);
  // The    quick    brown    fox    jumps    over   the   lazy   dog.
  console.log('Test 2: ');
  console.log(
    '🚀 ~  text is 44 chars & 44 desiredLength; so no extra chars added; justified line below:',
  );
  console.log(justifiedLineTest2);
  // The quick brown fox jumps over the lazy dog.
  console.log('Test 3: ');
  console.log(
    '🚀 ~ text is 24 chars & 30 desiredLength; 5 spaces between words one with 3 blank char & 4 with 2 blank chars; justified line below:',
  );
  console.log(justifiedLineTest3);
  // She   fed  the  dog  and  cat.
  console.log('Test 4: ');
  console.log(
    '🚀 ~ text is 24 chars & 42 desiredLength; 5 spaces between words 3 with 4 blank char & 2 with 3 blank chars; justified line below:',
  );
  console.log(justifiedLineTest4);
  // She     fed     the     dog    and    cat.
  console.log('Test 5: ');
  console.log(
    '🚀 ~ text is 18 chars & 2 desiredLength; therefore return full line not adding spaces; justified line below:',
  );
  console.log(justifiedLineTest5);
  // The quick chicken

  console.log('Test 6: ');
  console.log(
    '🚀 ~ Chinese char test - text is 39 chars & 50 desiredLength; 6 spaces between words 5 with 3 blank spaces & 1 with 2 blank spaces; justified line below:',
  );
  console.log(justifiedLineTest6);
  // JavaScript   is   fun   in   Chinese   too  代码干净好!

  return (
    <>
      <div>Catto Justify 44</div>
      {/* <button
        className={style}
        // onClick={onClick2}
        // Type 'string' is not assignable to type 'MouseEventHandler<HTMLDivElement>'.ts(2322)
      >
        {text}
      </button> */}
    </>
  );
};
export default JustifyCatto;
