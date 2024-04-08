type Props = {
  command: string,
  output: string,
}

const CommandPromptDisplay = ({ command, output }: Props) => {
  return (
    <section className="flex flex-col h-72 w-[40rem] bg-gray-900 text-gray-200 font-mono rounded-xl border-2 border-gray-300 ">
      {/* Top bar */}
      <div className="flex items-center h-10 px-4 bg-gray-800 rounded-t-xl border-b-[1px] border-gray-500">
        <div className="h-3 w-3 mr-2 rounded-full bg-red-500"></div>
        <div className="h-3 w-3 mr-2 rounded-full bg-yellow-500"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
        <div className="p-52 text-slate-400">Terminal</div>
      </div>
      {/* CMD body */}
      <div className="flex-1 p-4">
        <div className="flex">
          <div className="mr-2">&gt;</div>
          <div className="flex-1 bg-gray-800 focus:outline-none">
            {command}
          </div>
        </div>
        <div className="mt-2">
          <span className="text-green-500">&gt; Output:</span>
          <div className="bg-gray-800 p-2 mt-1">
            <p>
              {output}
            </p>
            {/* <p>
              {outputLine2}
            </p> */}
          </div>
        </div>
      </div>
    </section>
  )
}
export default CommandPromptDisplay