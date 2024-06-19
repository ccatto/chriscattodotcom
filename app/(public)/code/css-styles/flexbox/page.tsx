import { Metadata } from 'next';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import CommandPromptDisplay from '@/app/components/Utils/CommandPromptDisplay/CommandPromptDisplay';
import SyntaxHighlightingReactCatto from '@/app/components/Utils/SyntaxHighlightingReactCatto/SyntaxHighlightingReactCatto';
const codeBlock =
  "<div className='flex w-full bg-pink-400'>\n  <div className='bg-orange-300 text-black'>Div 1</div>\n  <div className='bg-blue-400 text-black'>2nd Div</div>\n  <div className='bg-green-400 text-black'>3rd div</div>\n</div>";
const codeBlock2 =
  "<div className='flex w-full'>\n  <div className='flex-1 bg-orange-300 text-black'>Div 1</div>\n  <div className='flex-1 bg-blue-400 text-black'>2nd Div</div>\n  <div className='flex-1 bg-green-400 text-black'>3rd div</div>\n</div>";
const codeBlock3 =
  "<div className='flex flex-col w-full'>\n  <div className='flex-1 bg-orange-300 text-black'>Div 1</div>\n  <div className='flex-1 bg-blue-400 text-black'>2nd Div</div>\n  <div className='flex-1 bg-green-400 text-black'>3rd div</div>\n</div>";
const codeBlock4 =
  "<div className='flex flex-col w-full'>\n  <div className='flex-[10%] bg-orange-300 text-black'>Div 1</div>\n  <div className='flex-[80%] bg-blue-400 text-black'>2nd Div</div>\n  <div className='flex-[10%] bg-green-400 text-black'>3rd div</div>\n</div>";
const codeBlock5 =
  "<div className='flex flex-col w-full'>\n  <div className='flex-1 bg-orange-300 text-black'>Div 1</div>\n  <div className='flex-1 bg-blue-400 text-black'>2nd Div</div>\n  <div className='flex-1 bg-green-400 text-black'>3rd div</div>\n</div>";
const codeBlock5a =
  "<div className='flex justify-center h-20 w-96 bg-orange-300 text-black'>\n  justify-center(horizontally)\n</div>";
const codeBlock5b =
  '<div className="flex items-center h-20 w-96 bg-orange-300 text-black">\n  items-center(vertically)\n</div>';
  const codeBlock5c =
  '<div className="flex justify-end h-20 w-96 bg-orange-300 text-black">\n  justify-content: flex-end\n</div>';
  const codeBlock6 =
  "<div className='flex flex-col w-full'>\n  <div className='flex-1 bg-orange-300 text-black'>Div 1</div>\n  <div className='flex-1 bg-blue-400 text-black'>2nd Div</div>\n  <div className='flex-1 bg-green-400 text-black'>3rd div</div>\n</div>";

export const metadata: Metadata = {
  title: 'Chris Catto Code CSS-Styles Flexbox',
  description: 'Chris Catto Code CSS-Styles Flexbox',
};

export default function Page() {
  return (
    <div className="flex h-full w-full flex-col flex-nowrap ">
      <div className="flex-[20]">
        <JumbotronCattoFlexible
          title="CSS-Styles Flexbox"
          description="The CSS3 Flexbox is a layout that allows responsive elements within a container to be automatically arranged depending on viewport size."
        />
      </div>
      <hr className="p-0" />

      <div className="flex-[80] p-2 dark:bg-gray-700">
        <h2 className="mb-4 inline-block text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Flexbox examples to learn by doing; please note we will be utlizing
          TailwindCSS classes.
        </h2>
        <h4>For these next code examples we have a container & 3 children</h4>
        <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-blue-100 dark:bg-blue-700 md:my-10" />
        <h6>Ex. 1: only the container has the display:flex</h6>
        <p>
          So as we see the the children are now on the same row not all stacked
          if we didn't use the flex attributes.
        </p>
        <br />
        <div className="flex w-full bg-pink-400">
          <div className="bg-orange-300 text-black">Div 1</div>
          <div className="bg-blue-400 text-black">2nd Div</div>
          <div className="bg-green-400 text-black">3rd div</div>
        </div>
        <SyntaxHighlightingReactCatto codeString={codeBlock} />
        <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-blue-100 dark:bg-blue-700 md:my-10" />
        <h6>
          Ex. 2: Container has the display:flex && children have flex-1
          specifically: flex: 1 1 0%
        </h6>
        <br />
        <div className="flex w-full">
          <div className="flex-1 bg-orange-300 text-black">Div 1</div>
          <div className="flex-1 bg-blue-400 text-black">2nd Div</div>
          <div className="flex-1 bg-green-400 text-black">3rd div</div>
        </div>
        <SyntaxHighlightingReactCatto codeString={codeBlock2} />
        <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-blue-100 dark:bg-blue-700 md:my-10" />
        <h6>
          Ex. 3: Let's take a look at flex-direction column. Adding the
          flex-direction: column; will make the children div's to stack
        </h6>
        <br />
        <div className="flex w-full flex-col">
          <div className="flex-1 bg-orange-300 text-black">Div 1</div>
          <div className="flex-1 bg-blue-400 text-black">2nd Div</div>
          <div className="flex-1 bg-green-400 text-black">3rd div</div>
        </div>
        <SyntaxHighlightingReactCatto codeString={codeBlock3} />
        <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-blue-100 dark:bg-blue-700 md:my-10" />
        <h6>
          Ex. 4: Let's take a look at flex with percent inside a child. Instead
          of just flex-1 we can use a percent:
        </h6>
        <br />
        <div className="flex w-full">
          <div className="flex-[10%] bg-orange-300 text-black">Div 1</div>
          <div className="flex-[80%] bg-blue-400 text-black">2nd Div</div>
          <div className="flex-[10%] bg-green-400 text-black">3rd div</div>
        </div>
        <SyntaxHighlightingReactCatto codeString={codeBlock4} />
        <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-blue-100 dark:bg-blue-700 md:my-10" />
        <h6>
          Ex. 5: Let's take a look aligning. Adding the justify-content: center;
          will align horizontally & items-center will align vertically:
        </h6>
        <br />
        <p>Simple justify-center example</p>
        <br />
        <div className="flex h-20 w-96 justify-center bg-orange-300 text-black">
          justify-center(horizontally)
        </div>
        <SyntaxHighlightingReactCatto codeString={codeBlock5a} />
        <br />
        <p>Simple align-items: center; example</p>
        <br />
        <div className="flex h-20 w-96 items-center bg-orange-300 text-black">
          items-center(vertically)
        </div>
        <SyntaxHighlightingReactCatto codeString={codeBlock5b} />
        <p>Simple justify-content: flex-end; to right justify</p>
        <br />
        <div className="flex justify-end h-20 w-96 bg-orange-300 text-black">
          justify-content: flex-end
        </div>
        <SyntaxHighlightingReactCatto codeString={codeBlock5c} />
        <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-blue-100 dark:bg-blue-700 md:my-10" />
        <h6>
          Ex. 6: Let's take a look aligning & centering in a nested flexbox.
          Adding the flex-direction: column; will make the children div's to
          stack
        </h6>
        <br />
        <div className="flex h-20 w-full">
          <div className="flex-1 bg-orange-300 text-black">
            <div className="flex h-full justify-center">Div 1</div>
          </div>
          <div className="flex-1 bg-blue-400 text-black">
            <div className="flex h-full items-center">2nd Div</div>
          </div>
          <div className="flex-1 items-center justify-center bg-green-400 text-black">
            <div className="flex h-full items-center justify-center">
              3rd Div
            </div>
          </div>
        </div>
        <SyntaxHighlightingReactCatto codeString={codeBlock5} />
      </div>
    </div>
  );
}
