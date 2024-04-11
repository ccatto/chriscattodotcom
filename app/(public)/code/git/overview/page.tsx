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
            description="Git if free & open source version control system that is an industry standard. We are able to clone a repo; branch & merge.  "
          />
        </div>
        <hr className="p-1" />
        <div className='flex-1 p-5 m-5 border-2 border-white rounded-2xl bg-[#f0efe7] text-[#4e443c] '>
          <h1>
            A simple common sample of steps we take in git.
          </h1>
          <br />
          <ul>
            <li>
              Install Git - need to have git installed to utilize it;
            </li>
            <li>
              Clone a repo - we clone the repo which is basically copying the repo to our local computer;
            </li>
            <li>
              Branch - We create a local branch to work on;
            </li>
            <li>
              Commit - we make an alter on one or a group of files then add & commit the files locally;
            </li>
            <li>
              Push - we push our changes to the origin which will move the files from our local computer to the repo so everyone else can view them;
            </li>
            <li>
              Pull Request - we will create a PR in the repo hosting manager tool such as Github || GitLab || BitBucket which are a few popular ones;
            </li>
            <li>
              Merge - We will merge our feature branch into the working/develop branch so others can view it.
            </li>
            <li>
              Fetch & Pull - fetching & pulling is another key concept & action that we take often to ensure our local branch is up to date with our teams alter;
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
