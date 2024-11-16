import { Metadata } from 'next';
import Link from 'next/link';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
// import SideNavGitCatto from '@/app/components/SideNavGitCatto/SideNavGitCatto'
// import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Chris Catto Code CSS Styling Home Tutorial',
  description: 'Chris Catto Code CSS Styling Home Tutorial',
};

export default function Page() {
  return (
    <>
      <div className="flex h-full w-full flex-col flex-nowrap ">
        <div className="flex">
          <JumbotronCattoFlexible
            title=".NET Key Concepts by Chris Catto"
            description=".NET Key Concepts focuses on fundamentals and high-level understand of .NET Framework & technology."
          />
        </div>
        <div className="m-4 flex-[80] rounded-2xl p-4 text-[#FAFAFA] ring-2 ring-gray-300 dark:bg-[#232f3e] dark:ring-gray-500">
          <h2 className="mb-4 inline-block text-3xl font-extrabold tracking-tight">
            .NET - Key Concepts
          </h2>
          <div>
            <div>
              <ul className="text-xl font-normal text-gray-700 dark:text-gray-400">
                <li className="m-5">
                  .NET Framework is a very popular & mature software development framework
                </li>
              </ul>
            </div>
            <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-700 md:my-10" />
            <div>
              <p className="flex justify-center text-2xl">
                <span className="pr-2 font-bold">Summary</span>of .NET Key Concepts:
              </p>
              <div className="mt-4 flex justify-center">
                <ol className="w-full space-y-4">
                  <li>
                    <div
                      className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-900 dark:text-slate-200"
                      role="alert"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">
                          1. .NET General - Cloud Concepts
                        </h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-900 dark:text-slate-200"
                      role="alert"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">
                          2. Security & Compliance
                        </h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-900 dark:text-slate-200"
                      role="alert"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">
                          3. Services & Cloud technology
                        </h3>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="m-4 flex-[80] rounded-2xl p-4 text-white ring-2 ring-gray-300 dark:bg-[#232f3e] dark:ring-gray-500">
          <h1>AWS Cloud Practitioner Exam</h1>
          <h3>
            This section is to document & assist in learning the AWS Cloud
            Practitioner exam
          </h3>
          <div>
            The{' '}
            <Link
              href="https://aws.amazon.com/certification/certified-cloud-practitioner/"
              target="_blank"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              official AWS Cloud Practitioner exam page.
            </Link>{' '}
            Let us break this down into 4 sections.
          </div>
          <hr className="mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-700 md:my-10" />
          <h3 className="flex justify-center text-3xl font-bold dark:text-white">
            1. AWS General - Cloud Concepts
          </h3>
          <hr className="mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-700 md:my-10" />
          <div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                AWS Features & Benefits:
              </h3>
              <br />
              <ul className="max-w-md list-inside list-disc space-y-1">
                <li>
                  Global availability is a feature of AWS which will support an
                  international company to provide low latency to customers
                </li>
                <li>AWS feature reducing the TCO (total cost of ownership)</li>
                <li>
                  Reduce TCO total code of ownership & OPEX operational
                  expenditure
                </li>
                <li>
                  Reduced need for manual intervention & increased efficiency
                </li>
                <li>Ability to focus on revenue-generating activities;</li>
                <li>
                  Transitioning to a fully variable expense model from a capital
                  expense-heavy model;
                </li>
                <li>
                  Elasticity & Agility; the most celebrated benefit is
                  Elasticity since we can expand services as traffic grows;
                </li>
                <li>
                  Concept of elasticity:
                  <ul className="ml-5 max-w-md list-inside list-disc space-y-1">
                    <li>
                      The ability to adjust resource allocation in response to
                      changing demand.
                    </li>
                    <li>
                      The speed at which additional resources are made available
                      on demand.
                    </li>
                    <li>
                      <Link
                        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                        href="https://wa.aws.amazon.com/wat.concept.elasticity.en.html"
                        target="_blank"
                      >
                        Elasticity
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>Increase speed and agility</li>
                <li>Stop guessing about capacity</li>
                <li>
                  AWS performs infrastructure discovery scans on the customer's
                  behalf.
                </li>
                <li>
                  Making AWS cost effective for workload with dynamic user
                  demand
                </li>
                <li>
                  AWS shorten the time to provision IT resources by ??
                  programmatically provision existing resources.
                </li>
                <li>
                  Automatically Adjust the required resources based on demand
                  changes.
                </li>
                <li>AWS Cloud feature - agility:</li>
                <li>
                  Agility - "Quickly" deliver new functionality in an iterative
                  manner minimizing the time to market an example of AWS agility
                  is decreased acquisition time for new compute resources;
                  <br />
                  ability to scale up & down during peek times;
                  <br />
                  The rapid deployment of AWS services and resources
                </li>
                <li>
                  Massive economies of scale - pay-as-you-go prices is offered
                  as a benefit of AWS Cloud
                </li>
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html"
                    target="_blank"
                  >
                    6 Advantages of Cloud Computing
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://aws.amazon.com/what-is-cloud-computing/"
                    target="_blank"
                  >
                    Cloud Computing - overview
                  </Link>
                </li>
                <li>
                  Compute, Storage, and data transfer out of the AWS Cloud are
                  the 3 pricing fundamentals of the AWS Cloud.
                </li>
                <li>
                  Capacity is unlimited in the cloud, you do not need to worry
                  about it. The 4 points of considerations when choosing an AWS
                  Region are: compliance with data governance and legal
                  requirements, proximity to customers, available services and
                  features within a Region, and pricing.
                </li>
                <li>Pay-as-you-go pricing - pay only upon usage;</li>
                <li>
                  AWS helps users focus on business value by increasing speed
                  and agility through automatic scaling and deployment
                  capabilities.
                </li>
              </ul>
            </div>
            <hr className="mx-auto my-2 h-3 w-3 rounded border-0 bg-gray-200 dark:bg-gray-700 md:my-2"></hr>
            <div>
              <div
                className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                role="alert"
              >
                <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                  Elastic computing =&gt;
                </h3>
                Capacity to increase & decreasing capacity with investment = 0;
                therefore this is related to cost;
                <br />
                makes feasible to add remove resources
              </div>
            </div>
            <hr className="mx-auto my-2 h-3 w-3 rounded border-0 bg-gray-200 dark:bg-gray-700 md:my-2" />
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                AWS Config
              </h3>
              <ul className="max-w-md list-inside list-disc space-y-1">
                <li>Assess; audit & evaluate configurations resources.</li>
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://aws.amazon.com/config/"
                    target="_blank"
                  >
                    Amazon Config
                  </Link>
                </li>
                <li>
                  Config is good to "Audit" change management of AWS resources
                </li>
                <li>Tracking configuration changes</li>
                <li>
                  AWS Config is a service that enables you to assess, audit, and
                  evaluate the configurations of your AWS resources.
                </li>
                <li>Record configurations and changes over time</li>
              </ul>
            </div>
            <hr className="mx-auto my-2 h-3 w-3 rounded border-0 bg-gray-200 dark:bg-gray-700 md:my-2" />
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                Auto Scaling - enables compute capacity to adjust as loads
                change
              </h3>
            </div>
            <hr className="mx-auto my-2 h-3 w-3 rounded border-0 bg-gray-200 dark:bg-gray-700 md:my-2" />
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                Cloud - is a deployment models that enables customers to fully
                trade their CApital IT EXpenses for OPerational EXpenses
              </h3>
            </div>
            <hr className="mx-auto my-2 h-3 w-3 rounded border-0 bg-gray-200 dark:bg-gray-700 md:my-2" />
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                EC2 Auto Scaling
              </h3>
              groups help achieve high availability for a web app by
              automagically adding or replace instances across multiple
              Availability Zones. ASGs add & removed instances based on Demand.
              * can be used to run a "customer-managed relational database";
            </div>
            <hr className="mx-auto my-2 h-3 w-3 rounded border-0 bg-gray-200 dark:bg-gray-700 md:my-2" />
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                Application Load Balancer
              </h3>
              <ul className="max-w-md list-inside list-disc space-y-1">
                <li>groups help achieve high availability for a web</li>
                <li>Load balancing - distributing load.</li>
              </ul>
            </div>
            <hr className="mx-auto my-2 h-3 w-3 rounded border-0 bg-gray-200 dark:bg-gray-700 md:my-2" />
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                EC2 Auto Scaling
              </h3>
              <ul className="max-w-md list-inside list-disc space-y-1">
                <li>
                  app by automagically adding or replace instances across
                  multiple Availability Zones. ASGs add & removed instances
                  based on Demand. * can be used to run a "customer-managed
                  relational database"; - ensures that your app on EC2 always
                  has the right amount of capacity to handle the current traffic
                  demand
                </li>
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html"
                    target="_blank"
                  >
                    EC2 Auto Scaling
                  </Link>
                </li>
                <li>
                  EC2 Instance Store has a better I/O performance, but data is
                  lost if: the EC2 instance is stopped or terminated, or when
                  the underlying disk drive fails.
                </li>
                <li>
                  An Auto Scaling Group (ASG) can automatically and quickly
                  scale-in and scale-out to match the changing load on your
                  applications and websites.
                </li>
                <li>
                  Auto Scaling Groups (ASG) offers easy horizontal scaling of
                  compute capacity && offers the capacity to scale-out and
                  scale-in by adding or removing instances based on demand.
                </li>
                <li>
                  Auto Scaling Groups can add or remove instances, but from the
                  same type. They cannot change the EC2 Instances Types on the
                  fly.
                </li>
              </ul>
            </div>
            <hr className="mx-auto my-2 h-3 w-3 rounded border-0 bg-gray-200 dark:bg-gray-700 md:my-2" />
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                AMI - Amazon Machine Image
              </h3>
              <ul className="max-w-md list-inside list-disc space-y-1">
                <li>EC2 to launch a pre-configured EC2</li>
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html"
                    target="_blank"
                  >
                    AMIs Amazon Machine Images
                  </Link>
                </li>
                <li>
                  Select a pre-configured templated AMI Amazon Machine Image
                </li>
                <li>We must use AMI from the same region as EC2;</li>
                <li>
                  The region of AMI has no bearing on the performance of EC2;
                </li>
                <li>
                  An Amazon Machine Image (AMI) provides the information
                  required to launch an instance.
                </li>
              </ul>
            </div>
            <hr className="mx-auto my-2 h-3 w-3 rounded border-0 bg-gray-200 dark:bg-gray-700 md:my-2" />
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                AWS Trusted Advisor
              </h3>
              <ul className="max-w-md list-inside list-disc space-y-1">
                <li>
                  AWS Trusted Advisor
                  <ul className="ml-5 max-w-md list-inside list-disc space-y-1">
                    <li>optimizes costs</li>
                    <li>improve performance</li>
                    <li>address security gaps</li>
                  </ul>
                </li>
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://aws.amazon.com/premiumsupport/technology/trusted-advisor/"
                    target="_blank"
                  >
                    AWS Trusted Advisor
                  </Link>
                </li>
                <li>
                  AWS Trusted Advisor monitors & provides advises on
                  <ul>
                    <li>Compliance w/ security best practices</li>
                    <li>Cost optimization</li>
                  </ul>
                </li>
                <li>
                  Trusted Advisor will identify if unrestricted access to a
                  resource has been allowed by a "Security Group"
                </li>
                <li>
                  AWS Trusted Advisor can be run & review the findings with will
                  Determine if any security groups in AWS have been provisioned
                  to allow unrestricted access for specific ports by Ex. 2
                  categories: Instance Usage & Performance
                </li>
                <li>
                  Use Trusted Advisor if a Security officer wants a list of any
                  potential vulnerabilities in EC2
                </li>
                <li>
                  AWS Trusted Advisor is an online tool that provides you
                  real-time guidance to help you provision your resources
                  following AWS best practices on cost optimization, security,
                  fault tolerance, service limits and performance improvement.
                </li>
                <li>
                  A highly available workload in AWS with a disaster recovery
                  plan in case of a regional service interruption:
                  <br /> run on 2 Availability Zones in one region & using
                  another region for disaster recovery.
                </li>
                <li>
                  Trusted Advisor can help us analyze your infrastructure to
                  identify unattached or underutilized Amazon EBS Elastic
                  Volumes
                </li>
                <li>
                  Trusted Advisor provides recommendations that helps us reduce
                  costs;
                </li>
                <li>
                  AWS Trusted Advisor inspects AWS environment and makes
                  recommendations to help you save money, improve system
                  performance, and close security gaps. Trusted Advisor provides
                  real-time insight into your usage patterns, configurations,
                  and resources, then compares it to AWS best practices
                </li>
              </ul>
            </div>
            <hr className="mx-auto my-2 h-3 w-3 rounded border-0 bg-gray-200 dark:bg-gray-700 md:my-2" />
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                Regions & Availability Zones
              </h3>
              <ul className="max-w-md list-inside list-disc space-y-1">
                <li>
                  Expanding into another region; We create resources in a new
                  region;
                </li>
                <li>
                  Great white paper:{' '}
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://docs.aws.amazon.com/whitepapers/latest/get-started-documentdb/aws-regions-and-availability-zones.html"
                    target="_blank"
                  >
                    AWS Regions and Availability Zones
                  </Link>
                </li>
                <li>
                  Availability Zones are interconnected with a region for low
                  latency;
                </li>
                <li>
                  AWS availability zones are one or more discrete data centers;
                </li>
                <li>
                  a minimum of 2 zones must be provisioned to achieve high
                  availability
                </li>
                <li>
                  AWS Regions are separate geographic areas. They are an example
                  of global infrastructure ex. when choosing AWS region take
                  into consideration: reduced latency to users (important for
                  UX) & Data sovereignty compliance
                </li>
                <li>
                  What are the advantages of deploying an application with
                  Amazon EC2 instances in multiple Availability Zones?
                  <ul className="max-w-md list-inside list-disc space-y-1">
                    <li>increasing the availability of the app</li>
                    <li>preventing a single point of failure</li>
                  </ul>
                </li>
              </ul>
            </div>
            <hr className="mx-auto my-2 h-3 w-3 rounded border-0 bg-gray-200 dark:bg-gray-700 md:my-2" />
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                AWS Well architected framework - change management steps to
                achieve reliability:
                <br />
                AWS Certificate Manager ACM is a service manages SSL/TLS. AWS
                Certificate Manager is a service that lets you easily provision,
                manage, and deploy public and private Secure Sockets
                Layer/Transport Layer Security (SSL/TLS) certificates for use
                with AWS services and your internal connected resources.
              </h3>
              <Link
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                target="_blank"
                href={'https://aws.amazon.com/certificate-manager/'}
              >
                AWS Certificate Manager
              </Link>
            </div>
            <hr className="mx-auto my-2 h-3 w-3 rounded border-0 bg-gray-200 dark:bg-gray-700 md:my-2" />
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                Architecture Design Principles:
              </h3>
              <ul className="max-w-md list-inside list-disc space-y-1">
                <li>
                  Automatically recover from failure: By monitoring a workload
                  for key performance indicators (KPIs), you can run automation
                  when a threshold is breached.
                </li>
                <li>
                  * use fault-tolerant services; * use EBS elastic block store
                  snapshots; * auto-scaling for auto-recovery * example of
                  design for failure: distributing workloads across multiple
                  availability zones
                </li>
                <li>
                  * design for scalability - Design for failure principle |
                </li>
                <li>
                  Implement loose coupling - between services can also be done
                  by asynchronous integration.
                </li>
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/design-principles.html"
                    target="_blank"
                  >
                    AWS Design principles
                  </Link>
                </li>
                <li>
                  * ex. - using many instances in parallel is a good approach to
                  transcoding a large number of video files.
                </li>
                <li>
                  Design principles to improve operational workloads:
                  <ul>
                    <li>loose coupling</li>
                    <li>disposable resources</li>
                  </ul>
                </li>
                <li>use multiple availability zones</li>
                <li>
                  Multi-site active-active is the DR disaster recovery which
                  offers the lowest probability of down time; aka hot standby
                </li>
              </ul>
            </div>
            <hr className="mx-auto my-2 h-3 w-3 rounded border-0 bg-gray-200 dark:bg-gray-700 md:my-2" />
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                Implement Elasticity principle
              </h3>
              - ensure we scale up & down;
              <br />
              ex. re-architecting a large monolithic app: * using individual
              components * Elasticity principle - "growth in users"
              <br /> * 2 concepts of elasticity: scaling # of EC2 instances
              based on traffic && resizing RDS instances as business needs
              change;
            </div>
            <hr className="mx-auto my-2 h-3 w-3 rounded border-0 bg-gray-200 dark:bg-gray-700 md:my-2" />
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                Internet Gateway - is an allows inbound traffic from internet to
                access a VPC;
              </h3>
              <br />
              <Link
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html"
                target="_blank"
              >
                AWS Enable VPC internet access using internet gateways
              </Link>
            </div>
            <hr className="mx-auto my-2 h-3 w-3 rounded border-0 bg-gray-200 dark:bg-gray-700 md:my-2" />
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                AWS Acceptable Use Policy - AUP - policy describes prohibited
                uses of the web services offered by AWS
              </h3>
              <br />
              <Link
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                href="https://aws.amazon.com/aup/"
                target="_blank"
              >
                AWS Acceptable Use Policy - AUP
              </Link>
            </div>
            <hr className="mx-auto my-2 h-3 w-3 rounded border-0 bg-gray-200 dark:bg-gray-700 md:my-2" />
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                AWS Partner Solutions (formerly Quick Starts) - quickly deploy a
                popular tech on AWS
              </h3>
              <ul className="max-w-md list-inside list-disc space-y-1">
                <li>
                  AWS Partner Solutions are automated reference deployments
                  built by Amazon Web Services (AWS) solutions architects and
                  AWS Partners.
                </li>
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://aws.amazon.com/startups/partner-solutions"
                    target="_blank"
                  >
                    AWS Partner Solutions - Startups
                  </Link>
                </li>
              </ul>
            </div>
            <hr className="mx-auto my-2 h-3 w-3 rounded border-0 bg-gray-200 dark:bg-gray-700 md:my-2" />
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                The AWS Well-Architected Framework is based on six pillars
              </h3>
              <ul className="max-w-md list-inside list-disc space-y-1">
                <li>
                  <span className="font-bold">Operational Excellence</span> -
                  includes the ability to run and monitor systems to deliver
                  business value and to continually improve supporting processes
                  and procedures.
                  <br />
                  pillar of the AWS Well-Architected Framework recommends
                  maintaining infrastructure as code (IaC)
                  <br />
                  Adopt serverless architecture whenever possible
                </li>
                <li>
                  <span className="font-bold">Security</span> - focuses on
                  protecting information & systems
                  <br />
                  Implement the principle of least privilege to all AWS
                  resources
                  <br />
                  applying best practices around the protection
                </li>
                <li>
                  <span className="font-bold">Reliability</span> - focuses on
                  workloads performing their intended functions and how to
                  recover quickly from failure to meet demands.
                  <br />
                  Scale horizontally to increase aggregate workload
                  availability.
                  <br />
                  Ability to recover from failure automatically.
                  <br />
                  Horizontal scaling is another important aspect of the
                  Reliability Pillar. AWS offers elastic scaling capabilities
                  that allow applications to scale horizontally by adding more
                  instances to distribute the workload.
                  <br />
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://wa.aws.amazon.com/wellarchitected/2020-07-02T19-33-23/wat.pillar.reliability.en.html"
                    target="_blank"
                  >
                    AWS Reliability Pillar
                  </Link>
                </li>
                <li>
                  <span className="font-bold">Performance Efficiency</span> -
                  focuses on using IT and computing resources efficiently
                  <br />
                  provides guidance on selecting appropriate compute resources
                  based on workload needs
                  <br />
                  ensures the right selection of resource types and optimized
                  sizes for workload requirements
                  <br />
                  Use the right type and size of resources for your workload. By
                  using the correct type and size of resources, the system can
                  achieve optimal performance and reduce unnecessary costs.
                  <br />
                  Using serverless architectures is a key design principle
                  recommended by AWS for achieving performance efficiency
                </li>
                <li>
                  <span className="font-bold">Cost Optimization</span> - focuses
                  on avoiding un-needed costs. The Cost Optimization pillar
                  focuses on achieving the lowest cost of operation for a system
                  and reducing cost through effective resource management,
                  matching supply with demand and optimizing over time.
                </li>
                <li>
                  <span className="font-bold">Sustainability</span> - focuses on
                  minimizing the "environmental" impacts of running cloud
                  workloads.
                </li>
              </ul>
              <div>
                A user deploys an Amazon RDS DB instance in multiple
                Availability Zones. This strategy involves the Reliablity pillar
                of the AWS Well-Architected Framework
              </div>
            </div>
            <hr className="mx-auto my-2 h-3 w-3 rounded border-0 bg-gray-200 dark:bg-gray-700 md:my-2" />
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                APN Consulting Partner - is the global partner program for
                technology and consulting businesses that leverage Amazon Web
                Services to build solutions and services for customers
              </h3>
              <ul className="max-w-md list-inside list-disc space-y-1">
                <li>
                  Good for get expert professional advice on migrating to AWS
                  and managing their applications on AWS Cloud
                </li>
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://aws.amazon.com/partners/"
                    target="_blank"
                  >
                    AWS Partners Network
                  </Link>
                </li>
                <li>
                  Service to help identify the right solution we need when a
                  company wants to migrate infrastructure to the AWS cloud
                </li>
              </ul>
            </div>
            <hr className="mx-auto my-2 h-3 w-3 rounded border-0 bg-gray-200 dark:bg-gray-700 md:my-2" />
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                AWS Cloud Adoption Framework (AWS CAF)
              </h3>
              <ul className="max-w-md list-inside list-disc space-y-1">
                <li>Governance is key functionality of CAF</li>
                <li>
                  Cloud fluency capability is identified under the People
                  Perspective for organizational adaptation to cloud technology
                </li>
                <li>Roles: CTO & Engineer</li>
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://aws.amazon.com/cloud-adoption-framework/"
                    target="_blank"
                  >
                    AWS Cloud Adoption Framework (AWS CAF)
                  </Link>
                </li>
                <li>
                  Benefits management is a capability from AWS CAF governance
                  perspective is required to define and track business outcomes
                  during a cloud transformation journey
                </li>
                <li>
                  Data architecture is capability is included in the platform
                  perspective of CAF
                </li>
              </ul>
            </div>
            <hr className="mx-auto my-2 h-3 w-3 rounded border-0 bg-gray-200 dark:bg-gray-700 md:my-2" />
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                VPC Peering Connection - optimal way of privately sharing data
                between the two VPCs
              </h3>
              <ul className="max-w-md list-inside list-disc space-y-1">
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html"
                    target="_blank"
                  >
                    What is VPC Peering
                  </Link>
                </li>
                <li>
                  VPC Peering connection is a networking connection between two
                  VPCs using AWS' network.
                </li>
                <li>
                  AWS Site-to-Site VPN creates an encrypted connection between
                  on-prem & aws
                </li>
              </ul>
            </div>
            <hr className="mx-auto my-2 h-3 w-3 rounded border-0 bg-gray-200 dark:bg-gray-700 md:my-2" />
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                Amazon VPC
              </h3>
              <ul className="max-w-md list-inside list-disc space-y-1">
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html"
                    target="_blank"
                  >
                    Control traffic to your AWS resources using security group
                  </Link>
                </li>
                <li>An NACL contains both allowed and denied rules.</li>
                <li>A Security Group has only allowed rules.</li>
                <li>
                  Have complete control over the virtual networking environment.
                </li>
                <li>
                  Can configure network ACL that acts as a firewall for
                  controlling traffic.
                </li>
              </ul>
            </div>
            <hr className="mx-auto my-2 h-3 w-3 rounded border-0 bg-gray-200 dark:bg-gray-700 md:my-2" />
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                "6 R's" migration strategy in AWS
              </h3>
              <ul className="max-w-md list-inside list-disc space-y-1">
                <li>
                  Refactor, Rehost, Repurchase, Retain, Retire, and Rebuild
                </li>
                <li>not one of the 6 R's: Reiterate; Retry & Replicate</li>
                <li>
                  Refactor - enhance the scalability of its legacy application
                  by breaking it into smaller
                </li>
              </ul>
            </div>
            <hr className="mx-auto my-2 h-3 w-3 rounded border-0 bg-gray-200 dark:bg-gray-700 md:my-2" />
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                Cloud fluency
              </h3>
              <ul className="max-w-md list-inside list-disc space-y-1">
                <li>
                  In AWS Cloud Adoption Framework (CAF), cloud fluency is
                  identified under the People Perspective for organizational
                  adaptation to cloud technology
                </li>
                <li>
                  Cloud fluency emphasizes the importance of education and
                  knowledge across the organization about cloud technologies and
                  AWS services. Ensuring that staff are cloud-fluent means they
                  understand not only the technical aspects but also the
                  operational, financial, and business implications of using AWS
                  services.
                </li>
              </ul>
            </div>
            <hr className="mx-auto my-2 h-3 w-3 rounded border-0 bg-gray-200 dark:bg-gray-700 md:my-2" />
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                Multi-tier architecture benefits in AWS it improves security by
                separating public-facing and internal resources
              </h3>
              <ul className="max-w-md list-inside list-disc space-y-1">
                <li>
                  A multi-tier architecture separates systems into different
                  tiers or layers, each having a specific role and
                  responsibility. In a typical three-tier architecture, for
                  example, there's a presentation tier (public-facing, user
                  interface), a logic tier (application processing, business
                  logic), and a data tier (database, file storage). This
                  separation greatly enhances security by limiting the exposure
                  of the more sensitive tiers.
                </li>
              </ul>
            </div>
            <hr className="mx-auto my-2 h-3 w-3 rounded border-0 bg-gray-200 dark:bg-gray-700 md:my-2" />
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                AWS Elastic Disaster Recovery
              </h3>
              <ul className="max-w-md list-inside list-disc space-y-1">
                <li>
                  AWS Elastic Disaster Recovery (EDR) provides automated,
                  cross-region disaster recovery for critical workloads
                </li>
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://aws.amazon.com/disaster-recovery"
                    target="_blank"
                  >
                    AWS Elastic Disaster Recovery (EDR)
                  </Link>
                </li>
                <li>
                  EDR good for ability to quickly activate a standby environment
                  if the primary one fails.
                </li>
              </ul>
            </div>
            <hr className="mx-auto my-2 h-3 w-3 rounded border-0 bg-gray-200 dark:bg-gray-700 md:my-2" />
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                Amazon Kinesis Video Streams
              </h3>
              <ul className="max-w-md list-inside list-disc space-y-1">
                <li>
                  Amazon Kinesis Video Streams is a service for streaming video.
                  It makes it easy to securely stream video from connected
                  devices to AWS for analytics, machine learning (ML), and other
                  processing. This service does not handle the conversion of
                  media file formats.
                </li>
              </ul>
            </div>
            <hr className="mx-auto my-2 h-3 w-3 rounded border-0 bg-gray-200 dark:bg-gray-700 md:my-2" />
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                Amazon EFS with Lifecycle Management
              </h3>
              <ul className="max-w-md list-inside list-disc space-y-1">
                <li>
                  Amazon Elastic File System (EFS) is a scalable, elastic,
                  cloud-native file storage service for Linux-based workloads.
                  It seamlessly integrates with AWS cloud services and
                  on-premise resources, providing a simple, serverless,
                  set-and-forget elastic file system. Amazon EFS is designed to
                  be highly available and durable, offering a file system
                  interface and file system semantics. It allows multiple EC2
                  instances to access the data concurrently.
                </li>
                <li>
                  multiple EC2 instances simultaneously & ensure that
                  infrequently used files are moved to a more cost-effective
                  storage class;
                </li>
              </ul>
            </div>
            <hr className="mx-auto my-2 h-3 w-3 rounded border-0 bg-gray-200 dark:bg-gray-700 md:my-2" />
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                Amazon MemoryDB
              </h3>
              <ul className="max-w-md list-inside list-disc space-y-1">
                <li>
                  Amazon MemoryDB is a fully managed in-memory database service
                  built on an architecture designed for durability and fault
                  tolerance. It is designed to support applications requiring
                  microsecond read latency and high-speed data ingestion, making
                  it a perfect fit for a gaming application like the one
                  described.
                </li>
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://aws.amazon.com/memorydb"
                    target="_blank"
                  >
                    MemoryDB
                  </Link>
                </li>
              </ul>
            </div>
            <hr className="mx-auto my-2 h-3 w-3 rounded border-0 bg-gray-200 dark:bg-gray-700 md:my-2" />
          </div>
          <hr className="mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-700 md:my-10" />
          <h3 className="flex justify-center text-3xl font-bold dark:text-white">
            2. Security & Compliance
          </h3>
          <hr className="mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-700 md:my-10" />
          <div>
            <hr className="mx-auto my-2 h-3 w-3 rounded border-0 bg-gray-200 dark:bg-gray-700 md:my-2" />
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                AWS Shared Responsibility model - The Shared Responsibility
                Model defines who is responsible for what in the AWS Cloud.
              </h3>
              <ul className="max-w-md list-inside list-disc space-y-1">
                <li>
                  <span className="font-bold">Customers responsibility:</span>
                </li>
                <ul className="ml-5 max-w-md list-inside list-disc space-y-1">
                  <li>
                    Customers responsible for security{' '}
                    <span className="font-bold">"IN"</span> the cloud:
                  </li>
                  <li>
                    Data encryption - ensure that app data is encrypted at rest
                    && Encrypting data in transit & at rest
                  </li>
                  <li>Patching EC2 instances;</li>
                  <li>Ensure users have security training</li>
                  <li>Penetration tests</li>
                  <li>
                    Managing VPC network access control lists to secure apps
                  </li>
                  <li>Maintaining server-side Encryption</li>
                  <li>
                    Using RDS customer is responsible for controlling network
                    access through security groups;
                  </li>
                  <li>
                    Customers are responsible for defining and using IAM
                    policies.
                  </li>
                  <li>Configure an S3 bucket to allow public access;</li>
                  <li>
                    Customers are responsible for configuring firewalls and
                    access management.
                  </li>
                  <li>
                    Applying appropriate security levels of assets stored in the
                    AWS environment.
                  </li>
                  <li>
                    For EC2 instance; responsible for guest OS (including
                    patches & updates), firewall & network config, IAM &
                    encrypting app data
                  </li>
                  <li>
                    RDS: Check ports IP Security group inbound rules; user
                    permissions; create db with or without public access; ensure
                    DB is configured to only allow SSL connections && database
                    encryption settings
                  </li>
                  <li>
                    S3 Bucket config; bucket policy; IAM user & roles &
                    Encryption
                  </li>
                </ul>
                <li>
                  <span className="font-bold">AWS responsibility:</span>
                </li>
                <ul className="ml-5 max-w-md list-inside list-disc space-y-1">
                  <li>
                    AWS responsible for security{' '}
                    <span className="font-bold">"OF"</span> the cloud:
                  </li>
                  <li>
                    has sole responsibility for physical security; "Security of
                    the Cloud"
                  </li>
                  <li>
                    AWS is responsible for protecting the infrastructure that
                    runs all of the services offered in AWS Cloud;
                  </li>
                  <li>Updating firmware</li>
                  <li>Auditing physical data center assets</li>
                  <li>Patching db software</li>
                  <li>Backing up DBs</li>
                  <li>Securing the EC2 Hypervisor & physical controls</li>
                  <li>Edge location management</li>
                  <li>
                    For abstracted services like Amazon S3, AWS operates the
                    infrastructure layer, the operating system, and platforms
                  </li>
                  <li>
                    protecting infrastructure (hardware, software, facilities &
                    networking) that runs all the AWS Services; Managed services
                    like S3, DynamoDB, RDS
                  </li>
                  <li>
                    RDS DB & OS Patching; audit the underlying instance & disks
                  </li>
                  <li>
                    S3: guarantee unlimited storage & we get encryption; ensure
                    separation of data between different customers; ensure AWS
                    employees cannot access data;
                  </li>
                </ul>
                <li>
                  <span className="font-bold">Shared responsibility:</span>
                  <ul className="ml-5 max-w-md list-inside list-disc space-y-1">
                    <li>Awareness & training</li>
                    <li>Configuration Management</li>
                    <li>
                      Awareness & training is a shared control between customer
                      & AWS
                    </li>
                  </ul>
                </li>
                <li className="m-5">
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://docs.aws.amazon.com/whitepapers/latest/aws-risk-and-compliance/shared-responsibility-model.html"
                    target="_blank"
                  >
                    Shared responsibility model
                  </Link>
                </li>
              </ul>
            </div>
            <hr className="mx-auto my-2 h-3 w-3 rounded border-0 bg-gray-200 dark:bg-gray-700 md:my-2" />
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                Security - Security-related services AWS offers:
                <br />
                MFA physical tokens;
                <br />
                Data Encryption is often done with help of KMS
              </h3>
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                2 security measures to protect AWS accounts:
                <ul className="ml-5 max-w-md list-inside list-disc space-y-1">
                  <li>grant least</li>
                  <li>privilege access to IAM users; * Activate MFA</li>
                </ul>
              </h3>
            </div>
            <hr className="mx-auto my-2 h-3 w-3 rounded border-0 bg-gray-200 dark:bg-gray-700 md:my-2" />
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                Security Groups act as a virtual firewall for the Amazon EC2
                instance;
              </h3>
            </div>
            <hr className="mx-auto my-2 h-3 w-3 rounded border-0 bg-gray-200 dark:bg-gray-700 md:my-2" />
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                SECURITY Steps taken when conducting penetration testing on AWS?
              </h3>
              <ul className="ml-5 max-w-md list-inside list-disc space-y-1">
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://aws.amazon.com/security/penetration-testing/"
                    target="_blank"
                  >
                    Penetration Testing
                  </Link>
                </li>
                <li>
                  We request & wait for approval from AWS internal security
                  team.
                </li>
                <li>Penetration Tests || security assessments</li>
                <li>
                  AWS customers can carry out security assessments or
                  penetration tests against their AWS infrastructure without
                  prior approval for few common AWS services.
                </li>
              </ul>
            </div>
            <hr className="mx-auto my-2 h-3 w-3 rounded border-0 bg-gray-200 dark:bg-gray-700 md:my-2" />
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                U2F security key - hardware - Universal 2nd Factor (U2F)
                <br />
                Security Key is a device that you can plug into a USB port on
                your computer.
              </h3>
            </div>
            <hr className="mx-auto my-2 h-3 w-3 rounded border-0 bg-gray-200 dark:bg-gray-700 md:my-2" />
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                Virtual Multi-Factor Authentication (MFA) device
                <br />
                NOT a physical device - generates a six-digit numeric code
              </h3>
            </div>
            <hr className="mx-auto my-2 h-3 w-3 rounded border-0 bg-gray-200 dark:bg-gray-700 md:my-2" />
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                AWS CloudHSM | Hardware Security Model | Hardware data
                encryption - Manage single-tenant hardware security modules
                (HSMs) on AWS
              </h3>
              <ul className="ml-5 max-w-md list-inside list-disc space-y-1">
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://aws.amazon.com/cloudhsm/"
                    target="_blank"
                  >
                    AWS CloudHSM
                  </Link>
                </li>
                <li>
                  AWS CloudHSM is a cloud-based Hardware Security Module (HSM)
                  that enables you to easily generate and use your encryption
                  keys on the AWS Cloud.
                </li>
                <li>
                  CloudHSM is a security device to manage cryptographic keys to
                  use for highly secure sensitive data
                </li>
                <li>
                  AWS CloudHSM provides hardware-based key storage and
                  cryptographic operations within a tamper-resistant hardware
                  device. This service helps you meet corporate, contractual,
                  and regulatory compliance requirements for data security by
                  using dedicated HSM appliances within the AWS Cloud.
                </li>
              </ul>
            </div>
            <hr className="mx-auto my-2 h-3 w-3 rounded border-0 bg-gray-200 dark:bg-gray-700 md:my-2" />
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                AWS WAF - Web Application Firewall
              </h3>
              <ul className="ml-5 max-w-md list-inside list-disc space-y-1">
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://aws.amazon.com/waf/"
                    target="_blank"
                  >
                    AWS WAF
                  </Link>
                </li>
                <li>
                  AWS WAF - is a web application firewall that helps protect
                  your web applications or APIs against common web exploits that
                  may affect availability, compromise security, or consume
                  excessive resources.
                </li>
                <li>
                  WAF protects its web applications from common web exploits
                  that may affect availability, compromise security, or consume
                  excessive resources
                </li>
                <li>
                  WAF creates security rules to protect from cross-site
                  scripting attacks;
                </li>
                <li>
                  AWS <span className="font-bold">Shield</span> is only used to
                  safeguard running applications from DDoS attacks;
                </li>
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://aws.amazon.com/shield/"
                    target="_blank"
                  >
                    AWS Shield
                  </Link>
                </li>
                <li>
                  AWS Shield Standard is a managed Distributed Denial of Service
                  (DDoS) protection service that safeguards web applications
                  running on AWS
                </li>
                <li>
                  AWS Shield Advanced provides advanced DDoS protection by
                  offering additional DDoS mitigation capabilities over AWS
                  Shield Standard. It also includes cost protection and risk
                  management benefits.
                </li>
              </ul>
            </div>
            <hr className="mx-auto my-2 h-3 w-3 rounded border-0 bg-gray-200 dark:bg-gray-700 md:my-2" />
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                AWS Security Hub
              </h3>
              <ul className="ml-5 max-w-md list-inside list-disc space-y-1">
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://aws.amazon.com/security-hub/"
                    target="_blank"
                  >
                    AWS Security Hub
                  </Link>
                </li>
                <li>
                  Automate AWS security checks and centralize security alerts
                </li>
                <li>
                  Centrally automate security checks across several AWS accounts
                </li>
                <li>
                  AWS Security Hub provides us with a comprehensive view of your
                  security state within AWS and your compliance with security
                  standards and best practices.
                </li>
              </ul>
            </div>
            <hr className="mx-auto my-2 h-3 w-3 rounded border-0 bg-gray-200 dark:bg-gray-700 md:my-2" />
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                Root User Privileges
              </h3>
              <ul className="ml-5 max-w-md list-inside list-disc space-y-1">
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_root-user.html"
                    target="_blank"
                  >
                    Root User Privileges
                  </Link>
                </li>
                <li>Actions only by root user:</li>
                <li>Change account settings</li>
                <li>Close Account</li>
                <li>Change or cancel AWS Support plan</li>
                <li>Register as a seller in Reserved Instances Marketplace</li>
                <li>view tax invoices</li>
                <li>Restore IAM user permissions</li>
                <li>
                  Config S3 to enable MFA & edit S3 that include invalid VPC ID
                </li>
                <li>Sign up for GovCloud</li>
              </ul>
            </div>
            <hr className="mx-auto my-2 h-3 w-3 rounded border-0 bg-gray-200 dark:bg-gray-700 md:my-2" />
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                To gain programmatic access to an AWS account, the required
                credential components are an:
              </h3>
              <ul className="ml-5 max-w-md list-inside list-disc space-y-1">
                <li>access key ID</li>
                <li>secret access key</li>
                <li>
                  Access key ID and secret access key are both required to
                  access AWS CLI.
                </li>
              </ul>
            </div>
            <hr className="mx-auto my-2 h-3 w-3 rounded border-0 bg-gray-200 dark:bg-gray-700 md:my-2" />
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                Network ACL - Network Access Control List (ACL)
                <ul className="ml-5 max-w-md list-inside list-disc space-y-1">
                  <li>
                    ACL is a security layer in AWS that acts as a firewall for
                    controlling traffic at the subnet level.
                  </li>
                  <li>
                    <Link
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html"
                      target="_blank"
                    >
                      VPC Network Acts | Control subnet traffic with network
                      access control lists
                    </Link>
                  </li>
                  <li>
                    Used to control incoming and outgoing traffic at the subnet
                    level
                  </li>
                </ul>
              </h3>
            </div>
            <hr className="mx-auto my-2 h-3 w-3 rounded border-0 bg-gray-200 dark:bg-gray-700 md:my-2" />
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                AWS Service Catalog
              </h3>
              <ul className="ml-5 max-w-md list-inside list-disc space-y-1">
                <li>
                  AWS Service Catalog enables organizations to create and manage
                  catalogs of IT services for use on AWS
                </li>
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://aws.amazon.com/servicecatalog"
                    target="_blank"
                  >
                    AWS Service Catalog
                  </Link>
                </li>
                <li>
                  Manage its deployed IT services and govern infrastructure as
                  code (IaC) templates.
                </li>
              </ul>
            </div>
            <hr className="mx-auto my-2 h-3 w-3 rounded border-0 bg-gray-200 dark:bg-gray-700 md:my-2" />
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                AWS Audit Manager
              </h3>
              <ul className="ml-5 max-w-md list-inside list-disc space-y-1">
                <li>
                  Audit manager is a service that could provide insight into how
                  AWS services impact organizations in meeting SOC2 compliance
                  requirements
                </li>
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://aws.amazon.com/servicecatalog"
                    target="_blank"
                  >
                    AWS Service Catalog
                  </Link>
                </li>
                <li>
                  AWS Audit Manager helps automate the process of assessing,
                  managing, and reporting on compliance with regulations and
                  industry standards.
                </li>
              </ul>
            </div>
            <hr className="mx-auto my-2 h-3 w-3 rounded border-0 bg-gray-200 dark:bg-gray-700 md:my-2" />
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                Customer Managed Key
              </h3>
              <ul className="ml-5 max-w-md list-inside list-disc space-y-1">
                <li>
                  Store sensitive data in an Amazon S3 bucket and encrypt it
                  after upload. Therefore, they want to manage their own keys
                  for encryption in AWS services
                </li>
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk"
                    target="_blank"
                  >
                    Customer Managed Key
                  </Link>
                </li>
                <li>
                  A Customer Managed Key (CMK) is a key that's generated and
                  managed within AWS Key Management Service (KMS) by the
                  customer.
                </li>
              </ul>
            </div>
            <hr className="mx-auto my-2 h-3 w-3 rounded border-0 bg-gray-200 dark:bg-gray-700 md:my-2" />
          </div>
          <hr className="mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-700 md:my-10" />
        </div>
      </div>
    </>
  );
}
