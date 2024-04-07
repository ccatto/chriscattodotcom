// import JumbotronCattoCode from "../components/JumbotronCattoCode/JumbotronCattoCode"
import { Metadata } from 'next'
import JumbotronCattoFlexible from "@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible"

export const metadata: Metadata = {
    title: 'Chris Catto Code Git Source Control',
    description: 'Chris Catto Code Git Source Control'
}

export default function Page() {
    return (
        <>
            <hr className="m-3" />
            <JumbotronCattoFlexible
                title="Git Source Control"
                description="Git is the industry standard for source control. This section I am displaying some of the commands that I use frequently."
            />
            <hr className="m-3" />
            <section>
                This is some raw ideas of how to organize the Git section:
                ------------
                https://www.datacamp.com/tutorial/github-and-git-tutorial-for-beginners
                Definition:
                What is git
                github vs git vs gitlab
                How does it work
                Branches
                commits

                ------------
                * Installing Git
                ------------
                * Commands:
                * Git Version
                * Git
                init
                clone
                add
                status
                push
                checkout -b
                remote -v
                branch
                pull
                merge
                log
                rebase
                clean
                git rebase

                ------------
                * Tools:
                * SourceTree
                * Github desktop
                ------------
                * Tips:
                * Create Shell function to add commit & push all in one command easily;

                create a shell function:
                {/* 
                    function qg() {
                        git add .
                        git commit -a -m "$*"
                        git push 
                    }
                */}
            </section>
        </>
    )
}