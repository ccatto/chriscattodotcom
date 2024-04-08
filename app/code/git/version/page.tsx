import { Metadata } from 'next'
import JumbotronCattoFlexible from "@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible"
import SideNavGitCatto from '@/app/components/SideNavGitCatto/SideNavGitCatto'

export const metadata: Metadata = {
    title: 'Chris Catto Code Git Commands Version',
    description: 'Chris Catto Code Git Commands Version'
}

export default function Page() {
    return (
        <>
            <div className="flex h-screen">
                <aside className="flex-[20]" aria-label="Sidebar">
                    <SideNavGitCatto />
                </aside>
                <article className="flex-[80] bg-blue-500 w-full">
                    <div className='flex flex-col flex-nowrap justify-center items-center w-full h-full'>
                        <div className='flex-1 w-full bg-slate-500 justify-center items-center text-center'>
                            top22
                            <JumbotronCattoFlexible
                                title="Git Commands Version"
                                description="Git Version is a good command to check that git is installed & to display which version we are using."
                            />
                        </div>
                        <div className='flex-1 w-full bg-red-300'>
                            <div className="w-full">
                                middle 2
                            </div>
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