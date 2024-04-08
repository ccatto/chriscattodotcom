import { Metadata } from 'next'
import JumbotronCattoFlexible from "@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible"
import SideNavGitCatto from '@/app/components/SideNavGitCatto/SideNavGitCatto'

export const metadata: Metadata = {
    title: 'Chris Catto Code Git Source Control Overview',
    description: 'Chris Catto Code Git Source Control Overview'
}

export default function Page() {
    return (
        <>
            <div className="flex h-screen">
                <aside className="flex-[20]" aria-label="Sidebar">
                    <SideNavGitCatto />
                </aside>
                <article className="flex-[80] bg-blue-500">
                    <div className='flex flex-col flex-nowrap justify-center items-center w-full h-full'>
                        <div className='flex-1 w-full bg-slate-500 justify-center items-center text-center'>
                            <JumbotronCattoFlexible
                                title="Git Overview"
                                description="Overview of Git."
                            />
                        </div>
                        <div className='flex-1 bg-red-300'>
                            middle
                        </div>
                        <div className='flex-1 bg-green-500'>
                            bottom
                        </div>
                    </div>
                    {/* <p>
                        asdfasdf
                    </p>

                    <p className='text-white'> 
                        hello
                    </p>
                    <hr className="m-3" /> */}
                    {/* </div> */}

                    {/* <JumbotronCattoFlexible
                        title="Installing Git"
                        description="Installation of Git is pretty straight forward."
                    /> */}
                </article>
            </div>
            <hr className="m-3" />
        </>
    )
}