import { Metadata } from 'next';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import CommandPromptDisplay from '@/app/components/Utils/CommandPromptDisplay/CommandPromptDisplay';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Chris Catto Code Git Tutorial Commands Push',
  description: 'Chris Catto Code Git Tutorial Commands Push',
};

export default function Page() {
  return (
    <div className="flex h-full w-full flex-col flex-nowrap ">
      <div className="flex-[20]">
        <JumbotronCattoFlexible
          title="Git Command Push"
          description="Push is a command we can use to upload local repo content to a remote repo."
        />
      </div>
      <hr className="p-0" />
      <div className="flex-[80] p-2 dark:bg-gray-700">
        <h2 className="mb-4 inline-block pl-5 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Terminal example:
        </h2>
        <CommandPromptDisplay
          command="git push"
          output="remote: Resolving deltas: 100% (8/8), completed with 4 local objects."
        />
        <p className="pl-5 indent-4">
          When pushing remember what ObiWan said to Luke "Use the Force". It's
          often needed to use force flag. One time I often use force is when
          rebasing and then need to push. So for an example there we want to
          push to origin and use force.
        </p>
        <CommandPromptDisplay
          command="git push origin branchName --force"
          output=" + 2339f78...59f9746 branchName -> branchName (forced update)"
        />
        <p className="pl-5 indent-4">
          We can also use force with lease. This flag will protect all remote
          refs that are going to be updated.
        </p>
        <CommandPromptDisplay
          command="git push origin branchName --force-with-lease"
          output=" + 2339f78...59f9746 branchName -> branchName (forced update)"
        />
        <p className="pl-5">
          Here is the{' '}
          <Link
            href="https://git-scm.com/docs/git-push"
            target="_blank"
            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            official git docs page on git push.
          </Link>
        </p>
      </div>
      <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-blue-100 dark:bg-blue-700 md:my-10" />
    </div>
  );
}
