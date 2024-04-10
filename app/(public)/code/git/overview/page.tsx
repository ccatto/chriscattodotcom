import { Metadata } from 'next'
import JumbotronCattoFlexible from "@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible"

export const metadata: Metadata = {
  title: 'Chris Catto Code Git Tutorial Overview',
  description: 'Chris Catto Code Git Tutorial Overview'
}

export default function Page() {
  return (
    <>
      <div className="flex flex-col flex-nowrap h-full w-full ">
        <div className='h-56 flex-1'>
          <JumbotronCattoFlexible
            title="Git Overview"
            description="Git has a bunch of info "
          />
        </div>
        <hr className="p-1" />

        <div className='p-5 m-5 flex-1 border-2 border-white rounded-2xl bg-[#f0efe7] '>
          <h2 className='text-[#f14e32]'>
            HEADER 2
          </h2>
          <p className='text-[#4e443c]'>
            inside tex
          </p>
          <br />
          2
          <br />
          12
          <br />
          23423
          <br />
          1
          <br />
          2
          <br />
          1
          <br />
          223423
          <br />
          1
          <br />
          2
          <br />
          12
          <br />
          23423
          <br />
          toward
          <br />
          2
          <br />
          1
          <br />
          223423
          <br />
          1
          <br />
          2
          <br />
          12
          <br />
          23423
          <br />
          1
          <br />
          2
          <br />
          1
          <br />
          <br />
          2
          <br />
          1
          <br />
          blue green
          <br />
          1
          <br />
          2
          <br />
          12
          <br />
          black grey
          <br />
          1
          <br />
          2 blue
          <br />
          1
          <br />
          orange
          <br />
        </div>
      </div>
    </>

  )
}
