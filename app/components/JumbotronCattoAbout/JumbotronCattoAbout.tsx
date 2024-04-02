'use client'
import Link from "next/link"

const JumbotronCattoAbout = () => {
  return (
    <section className="bg-center bg-no-repeat bg-[url('/images/ChrisCatto-Sunset.png')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Chris Catto</h1>
            <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                Insightful, results-driven application developer with notable successes automating business processes in support of company objectives. Excels at working on individual & team projects, providing clear and concise communication with team members and management. Extensive hands-on experience coordinating all aspects of software development, including analysis, user interface, design, architecture, coding, documentation, tes5ng, implementation, and training.
            </p>
            <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                With over 20 years of experience in developing software I still enjoy coding. I have worked for large fortune 500 companies to small startups. I have enjoyed working with many different technologies, earlier on in my career it was much more Microsoft .NET & currently have been utilizing Salesforce Commerce Cloud to build eCommerce sites. 
            </p>
        </div>
    </section>
  )
}
export default JumbotronCattoAbout
