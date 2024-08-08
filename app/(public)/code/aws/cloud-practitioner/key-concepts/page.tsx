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
            title="AWS Cloud Practitioner"
            description="Amazon Web Services Cloud Practitioner is an AWS certification which focuses on fundamentals and high-level understand of AWS cloud services & technology."
          />
        </div>
        <div className="m-4 flex-[80] rounded-2xl p-4 text-[#FAFAFA] ring-2 ring-gray-300 dark:bg-[#232f3e] dark:ring-gray-500">
          <h2 className="mb-4 inline-block text-3xl font-extrabold tracking-tight">
            AWS Cloud Practitioner - Key Concepts
          </h2>
          <div>
            <div>
              <ul className="text-xl font-normal text-gray-700 dark:text-gray-400">
                <li className="m-5">
                  Amazon Web Services Cloud Practitioner is an AWS certification
                  which focuses on fundamentals and high-level understand of AWS
                  cloud services & technology.
                </li>
              </ul>
            </div>
            <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-700 md:my-10" />
            <div>
              <p className="flex justify-center text-2xl">
                <span className="pr-2 font-bold">Summary</span>of AWS Cloud
                Practitioner Key Concepts:
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
                          1. AWS General - Cloud Concepts
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
                  <li>
                    <div
                      className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-900 dark:text-slate-200"
                      role="alert"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">
                          4. Billing; Pricing & Services
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
          <br /> ---------------- -----------------------
          <br />
          -- 1. AWS General - Cloud Concepts
          <br /> --- ---------------- -----------------------
          <br />
          <div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                AWS Features & Benefits:
              </h3>
              <br />
              <ul className='className="max-w-md list-inside list-disc space-y-1'>
                <li>
                  Global availability is a feature of AWS which will support an
                  international company to provide low latency to customers
                </li>
                <li>AWS feature reducing the TCO (total cost of ownership)</li>

                <li>
                  Reduce TCO total code of ownership & OPEX operational
                  expenditure
                </li>
                <li>Ability to focus on revenue-generating activities;</li>
                <li>
                  Elasticity & Agility; the most celebrated benefit is
                  Elasticity since we can expand services as traffic grows;
                </li>
                <li>
                  Concept of elasticity:
                  <ul>
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
                        href="https://wa.aws.amazon.com/wellarchitected/2020-07-02T19-33-23/wat.concept.elasticity.en.html"
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
                <li>AWS Cloud feature - agility:</li>
                <li>
                  Agility - "Quickly" deliver new functionality in an iterative
                  manner minimizing the time to market an example of AWS agility
                  is decreased acquisition time for new compute resources;
                  <br />
                  ability to scale up & down during peek times;
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
              </ul>
            </div>
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
            <br />
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                Pay-as-you-go pricing - pay only upon usage;
              </h3>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                AWS Config
              </h3>
              <ul className='className="max-w-md list-inside list-disc space-y-1'>
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
                  Config is good to "Audit" change management of AWS resources *
                  tracking configuration changes
                </li>
                <li>
                  AWS Config is a service that enables you to assess, audit, and
                  evaluate the configurations of your AWS resources.
                </li>
                <li>Record configurations and changes over time</li>
              </ul>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                Auto Scaling - enables compute capacity to adjust as loads
                change
              </h3>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                Load balancing - distributing load.
              </h3>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                Cloud - is a deployment models that enables customers to fully
                trade their capital IT expenses for operational expenses
              </h3>
            </div>
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
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                Application Load Balancer
              </h3>
              <ul className='className="max-w-md list-inside list-disc space-y-1'>
                <li>groups help achieve high availability for a web</li>
              </ul>
              app by automagically adding or replace instances across multiple
              Availability Zones. ASGs add & removed instances based on Demand.
              * can be used to run a "customer-managed relational database"; -
              ensures that your app on EC2 always has the right amount of
              capacity to handle the current traffic demand
              <br />
              <Link
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html"
                target="_blank"
              >
                EC2 Auto Scaling
              </Link>
              <div>
                EC2 Instance Store has a better I/O performance, but data is
                lost if: the EC2 instance is stopped or terminated, or when the
                underlying disk drive fails.
              </div>
              <div>
                An Auto Scaling Group (ASG) can automatically and quickly
                scale-in and scale-out to match the changing load on your
                applications and websites.
              </div>
              <div>
                Auto Scaling Groups (ASG) offers easy horizontal scaling of
                compute capacity && offers the capacity to scale-out and
                scale-in by adding or removing instances based on demand.
              </div>
              <div>
                Auto Scaling Groups can add or remove instances, but from the
                same type. They cannot change the EC2 Instances Types on the
                fly.
              </div>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                AMI - Amazon Machine Image
              </h3>
              <ul className='className="max-w-md list-inside list-disc space-y-1'>
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
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                AWS Trusted Advisor
              </h3>
              <ul className='className="max-w-md list-inside list-disc space-y-1'>
                <li>
                  AWS Trusted Advisor
                  <ul className='className="max-w-md ml-5 list-inside list-disc space-y-1'>
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
              </ul>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                Regions & Availability Zones
              </h3>
              <ul className='className="max-w-md list-inside list-disc space-y-1'>
                <li>
                  Expanding into another region; We create resources in a new
                  region;
                </li>
                <li>
                  great white paper:
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
                  <ul>
                    <li>increasing the availability of the app</li>
                    <li>preventing a single point of failure</li>
                  </ul>
                </li>
              </ul>
            </div>
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
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                Architecture Design Principles:
              </h3>
              <ul className='className="max-w-md list-inside list-disc space-y-1'>
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
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                AWS Partner Solutions (formerly Quick Starts) - quickly deploy a
                popular tech on AWS
              </h3>
              <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                <li>
                  AWS Partner Solutions are automated reference deployments
                  built by Amazon Web Services (AWS) solutions architects and
                  AWS Partners.
                </li>
                <Link
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  href="https://aws.amazon.com/startups/partner-solutions"
                  target="_blank"
                >
                  AWS Partner Solutions - Startups
                </Link>
              </ul>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                The AWS Well-Architected Framework is based on six pillars
              </h3>
              <ul className='className="max-w-md list-inside list-disc space-y-1'>
                <li>
                  Operational Excellence - includes the ability to run and
                  monitor systems to deliver business value and to continually
                  improve supporting processes and procedures.
                  <br />
                  pillar of the AWS Well-Architected Framework recommends
                  maintaining infrastructure as code (IaC)
                </li>
                <li>Security - focuses on protecting information & systems</li>
                <li>
                  Reliability - focuses on workloads performing their intended
                  functions and how to recover quickly from failure to meet
                  demands.
                </li>
                <li>
                  Performance Efficiency - focuses on using IT and computing
                  resources efficiently
                  <br />
                  provides guidance on selecting appropriate compute resources
                  based on workload needs
                </li>
                <li>Cost Optimization - focuses on avoiding un-needed costs</li>
                <li>
                  Sustainability - focuses on minimizing the environmental
                  impacts of running cloud workloads.
                </li>
              </ul>
              <div>
                A user deploys an Amazon RDS DB instance in multiple
                Availability Zones. This strategy involves the Reliablity pillar
                of the AWS Well-Architected Framework
              </div>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                APN Consulting Partner - is the global partner program for
                technology and consulting businesses that leverage Amazon Web
                Services to build solutions and services for customers
              </h3>
              <ul className='className="max-w-md list-inside list-disc space-y-1'>
                <li>
                  good for get expert professional advice on migrating to AWS
                  and managing their applications on AWS Cloud
                </li>
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://aws.amazon.com/partners/"
                    target="_blank"
                  >
                    Partners
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                AWS Cloud Adoption Framework (AWS CAF)
              </h3>
              <ul className='className="max-w-md list-inside list-disc space-y-1'>
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
              </ul>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                VPC peering connection - optimal way of privately sharing data
                between the two VPCs
              </h3>
              <ul className='className="max-w-md list-inside list-disc space-y-1'>
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
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                "6 R's" migration strategy in AWS
              </h3>
              <ul className='className="max-w-md list-inside list-disc space-y-1'>
                <li>
                  Refactor, Rehost, Repurchase, Retain, Retire, and Rebuild
                </li>
                <li>not one of the 6 R's: Reiterate; Retry & Replicate</li>
              </ul>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                Cloud fluency
              </h3>
              <ul className='className="max-w-md list-inside list-disc space-y-1'>
                <li>
                  In AWS Cloud Adoption Framework (CAF), cloud fluency is identified under the People Perspective for organizational adaptation to cloud technology
                </li>
                <li>
                  Cloud fluency emphasizes the importance of education and knowledge across the organization about cloud technologies and AWS services. Ensuring that staff are cloud-fluent means they understand not only the technical aspects but also the operational, financial, and business implications of using AWS services.
                </li>
              </ul>
            </div>
          </div>
          ---------------- ----------------
          <br />
          -- 2. Security & Compliance ---
          <br />
          ---------------- ----------------
          <div>
            <div>
              <div
                className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                role="alert"
              >
                <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                  AWS Shared Responsibility model - The Shared Responsibility
                  Model defines who is responsible for what in the AWS Cloud.
                </h3>
                <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                  <li>Customers responsibility:</li>
                  <ul className="text-xl font-normal text-gray-700 dark:text-gray-400">
                    <li>
                      * data encryption - ensure that app data is encrypted at
                      rest && Encrypting data in transit & at rest
                    </li>
                    <li>* patching EC2 instances;</li>
                    <li>* ensure users have security training</li>
                    <li>* penetration tests</li>
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
                    <li>Configure an S3 bucket to allow public access.</li>
                  </ul>
                  <li>AWS responsibility:</li>
                  <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                    <li>AWS responsible for security "OF" the cloud:</li>
                    <li>
                      * has sole responsibility for physical security; "Security
                      of the Cloud"
                    </li>
                    <li>
                      * AWS is responsible for protecting the infrastructure
                      that runs all of the services offered in AWS Cloud; *
                      updating firmware
                    </li>
                    <li>Auditing physical data center assets</li>
                    <li>Patching db software</li>
                    <li>Backing up DBs</li>
                    <li>Securing the EC2 Hypervisor & physical controls</li>
                    <li>Edge location management</li>
                    <li>
                      For abstracted services like Amazon S3, AWS operates the
                      infrastructure layer, the operating system, and platforms
                    </li>
                  </ul>
                  <li>
                    Shared responsibility-
                    <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                      <li>Awareness & training</li>
                      <li>Configuration Management</li>
                      <li>
                        Awareness & training is a shared control between
                        customer & AWS
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
              <div
                className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                role="alert"
              >
                <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                  Security - Security-related services AWS offers: MFA physical
                  tokens; Data Encryption is often done with help of KMS
                </h3>
              </div>
              <div
                className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                role="alert"
              >
                <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                  2 security measures to protect AWS accounts:
                  <ul className="text-xl font-normal text-gray-700 dark:text-gray-400">
                    <li>* grant least</li>
                    <li>privilege access to IAM users; * Activate MFA</li>
                  </ul>
                </h3>
              </div>
              <div
                className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                role="alert"
              >
                <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                  Security Groups act as a virtual firewall for the Amazon EC2
                  instance;
                </h3>
              </div>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                SECURITY Steps taken when conducting penetration testing on AWS?
              </h3>
              <ul className="text-xl font-normal text-gray-700 dark:text-gray-400">
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
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                U2F security key - hardware - Universal 2nd Factor (U2F)
                Security Key is a device that you can plug into a USB port on
                your computer.
              </h3>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                Virtual Multi-Factor Authentication (MFA) device - NOT a
                physical device - generates a six-digit numeric code
              </h3>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                AWS CloudHSM | Hardware Security Model | Hardware data
                encryption - Manage single-tenant hardware security modules
                (HSMs) on AWS
                <Link
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  href="https://aws.amazon.com/cloudhsm/"
                  target="_blank"
                >
                  AWS CloudHSM
                </Link>
              </h3>
              <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
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
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                AWS WAF - Web Application Firewall -
                <Link
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  href="https://aws.amazon.com/waf/"
                  target="_blank"
                >
                  AWS WAF
                </Link>
              </h3>
              <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
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
                  scripting attacks.
                </li>
                <li>
                  AWS Shield is only used to safeguard running applications from
                  DDoS attacks.
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
              </ul>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                AWS Security Hub
                <Link
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  href="https://aws.amazon.com/security-hub/"
                  target="_blank"
                >
                  AWS Security Hub
                </Link>
              </h3>
              <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                <li>
                  Automate AWS security checks and centralize security alerts
                </li>
                <li>
                  Centrally automate security checks across several AWS accounts
                </li>
                <li>
                  AWS Security Hub provides you with a comprehensive view of
                  your security state within AWS and your compliance with
                  security standards and best practices.
                </li>
              </ul>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                Root User Privileges
                <Link
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_root-user.html"
                  target="_blank"
                >
                  Root User Privileges
                </Link>
              </h3>
              <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
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
            <div>
              To gain programmatic access to an AWS account, the required
              credential components are an:
              <ul>
                <li>access key ID</li>
                <li>secret access key</li>
              </ul>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                Network ACL - Network Access Control List (ACL) is a security layer in AWS that acts as a firewall for controlling traffic at the subnet level.
                <Link
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html"
                  target="_blank"
                >
                  VPC Network Acts | Control subnet traffic with network access control lists
                </Link>
              </h3>
              <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                <li>
                  Used to control incoming and outgoing traffic at the subnet level
                </li>
              </ul>
            </div>
          </div>
          ---------------- -----------------------
          <br />
          -- 3. Services & Cloud technology <br />
          --- ---------------- -----------------------
          <div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                IAM - Identity & Access Management
              </h3>
              <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                <li>
                  adds security & identity * MFA & enforcing pw strength &
                  expiration IAM policies don't have access keys. The only way
                  you will ever get an Access key is to create them from an IAM
                  user.
                </li>
                <li>
                  Apply an IAM policy to an IAM group - apply common access
                  controls to large set of use
                </li>
                <li>* IAM groups able to administer multiple users</li>
                <li>IAM policies can limit S3 access to specific users.</li>
                <li>
                  AWS IAM Identity Center - SSO - access management to multiple
                  AWS accounts as well as facilitate AWS Single Sign-On (AWS
                  SSO) access to its AWS accounts
                </li>
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://aws.amazon.com/iam/identity-center/"
                    target="_blank"
                  >
                    AWS IAM Identity Center - SSO
                  </Link>
                </li>
                <li>
                  Connect your existing workforce identity source and centrally
                  manage access to AWS
                </li>
                <li>
                  Always free to use IAM || IAM enables us to manage access to
                  AWS services & resources securely. Using IAM, we can create &
                  manage AWS users & groups, & use permissions to allow & deny
                  their access to AWS resources. IAM is a feature of your AWS
                  account offered at no additional charge.
                </li>
                <li>
                  IAM Credentials report is a Security tool that lists all your
                  account's users and the status of their various credentials.
                  The other IAM Security Tool is IAM Access Advisor. It shows
                  the service permissions granted to a user and when those
                  services were last accessed.
                </li>
                <li>
                  An IAM policy is an entity that, when attached to an identity
                  or resource, defines their permissions. JSON docs to define
                  users; groups || roles permissions;
                </li>
                <li>IAM is a global service (encompasses all regions).</li>
                <li>
                  AWS IAM policy and a roles: A policy is a set of permissions
                  that determine what an AWS service can do, while a role is a
                  temporary identity that can be assumed by a user or AWS
                  service.
                </li>
              </ul>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">EC2</h3>
              <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                <li>
                  {' '}
                  * can be used to manually launch "instances" bases on resource
                  requirements
                </li>
                <li>can be used to host MS SQL Server</li>
              </ul>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                AWS Cloud Tail
              </h3>
              <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                <li>
                  {' '}
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://aws.amazon.com/cloudtrail/"
                    target="_blank"
                  >
                    AWS CloudTrail
                  </Link>
                </li>
                <li>Track user activity & API usage.</li>
                <li>a service to gather info about AWS account activity</li>
                <li>
                  Use CloudTrail to log, monitor and retain account activity
                  related to actions across your AWS infrastructure
                </li>
                <li>
                  Ensure that its AWS account activity meets the governance,
                  compliance and auditing norms
                </li>
                <li>
                  CloudTrail can record the history of events/API calls made
                  within you AWS account, which will help determine who or what
                  deleted the resource. You should investigate it first.
                </li>
                <li>
                  CloudTrail can ensure the AWS account activity meets
                  governance, compliance & auditing norms.
                </li>
              </ul>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                Amazon GuardDuty Protect your AWS accounts, workloads, and data
                with intelligent threat detection
              </h3>
              <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                <li>assists in threat protection</li>
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://aws.amazon.com/guardduty/"
                    target="_blank"
                  >
                    AWS GuardDuty
                  </Link>
                </li>
                <li>
                  Amazon GuardDuty is a threat detection service that
                  continuously monitors for malicious activity and unauthorized
                  behavior to protect your AWS accounts and workloads.
                </li>
              </ul>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                Amazon RDS - relational Database Service advantage is it
              </h3>
              <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                <li>simplifies administration tasks.</li>
                <li>* used to host db's</li>
                <li>AWS Manages the maintenance of the OS</li>
                <li>MS SQL Server - RDS can be used to host</li>
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://aws.amazon.com/rds/"
                    target="_blank"
                  >
                    AWS RDB
                  </Link>
                </li>
                <li>suited for OLTP workloads</li>
                <li>
                  RDS Multi-AZ deployments' main purpose is high availability,
                  while RDS Read replicas' main purpose is scalability.
                </li>
              </ul>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                Read Replicas provide enhanced performance and durability for
                Amazon RDS database (DB) instance & improves scalability
              </h3>
              <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://aws.amazon.com/rds/features/read-replicas/"
                    target="_blank"
                  >
                    Read Replicas
                  </Link>
                </li>
                <li>
                  Read Replica improves database scalability & performance; -
                  scale out globally
                </li>
                <li>
                  RDS Multi-AZ enhances database availability - benefit of
                  deploying an Amazon RDS Multi-AZ database with one standby
                </li>
                <li>
                  AWS DMS database migration service https://aws.amazon.com/dms/
                </li>
                <li>
                  AWS MGN Application Migration Service. migrate physical
                  servers like dbs or app to EC2.
                </li>
              </ul>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                AWS CloudFormation - speed up cloud provisioning with
                infrastructure as code;
              </h3>
              <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://aws.amazon.com/cloudformation/"
                    target="_blank"
                  >
                    AWS CloudFormation
                  </Link>
                </li>
                <li>
                  CloudFormation good for deploying identical resources across
                  all AWS regions and accounts using templates while estimating
                  costs
                </li>
                <li>
                  CloudFormation can provision the same AWS infrastructure
                  across multiple regions.
                </li>
                <li>
                  AWS CloudFormation templates are JSON or YAML-formatted text
                  files. They are declarations of the AWS resources that make up
                  a stack.
                </li>
                <li>
                  CloudFormation is free of use; but we do pay for the resources
                  created.
                </li>
              </ul>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                AWS CodeDeploy - automates software deployments
              </h3>
              <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://aws.amazon.com/codedeploy/"
                    target="_blank"
                  >
                    AWS CodeDeploy
                  </Link>
                </li>
                <li>Automate code deployment to maintain application uptime</li>
                <li>
                  AWS CodeArtifact (repo for code dependencies) is a managed
                  artifact repository (also called code dependencies)
                </li>
                <li>
                  AWS CodeArtifact allows you to publish and share software
                  packages used in the software development process;
                </li>
                <li>
                  AWS CodeBuild is a fully managed continuous integration
                  service that compiles source code, runs tests, and produces
                  software packages that are ready to deploy
                </li>
                <li>
                  AWS CodeDeploy is a hybrid service that automates code
                  deployments to any instance, including Amazon EC2 instances
                  and instances running on-premises.
                </li>
                <li>
                  AWS CodeCommit is a secure, highly scalable, managed source
                  control service that makes it easier for teams to collaborate
                  on code. It also provides software version control.
                </li>
                <li>
                  AWS Cloud Development Kit (AWS CDK) is an open source software
                  development framework to define your cloud application
                  resources using familiar programming languages.
                </li>
              </ul>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                Aurora - scale MySQL & PostgreSQL
              </h3>
              <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://aws.amazon.com/rds/aurora/"
                    target="_blank"
                  >
                    AWS Aurora
                  </Link>
                </li>
                <li>
                  Amazon Aurora is a MySQL and PostgreSQL-compatible relational
                  database built for the cloud, that combines the performance
                  and availability of traditional enterprise databases with the
                  simplicity and cost-effectiveness of open source databases. It
                  is a proprietary technology from AWS.
                </li>
                <li>
                  A relational database & is a proprietary technology from AWS
                  and is cloud-optimized
                </li>
              </ul>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                Amazon QLDB - Quantum Ledger Database
              </h3>
              <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://aws.amazon.com/qldb/"
                    target="_blank"
                  >
                    AWS QLDB
                  </Link>
                </li>
                <li>A service that is an immutable ledger database</li>
                <li>
                  Amazon QLDB is a fully managed ledger database that provides a
                  transparent, immutable, and cryptographically verifiable
                  transaction log owned by a central trusted authority
                </li>
              </ul>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                AWS EMR - Elastic MapReduce Hadoop cluster Big Data - Easily run
                and scale Apache Spark, Hive, Presto, and other big data
                workloads
              </h3>
              <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://aws.amazon.com/emr/"
                    target="_blank"
                  >
                    AWS EMR
                  </Link>
                </li>
                <li>
                  Amazon EMR is a web service that enables businesses,
                  researchers, data analysts, and developers to easily and
                  cost-effectively process vast amounts of data. EMR helps
                  creating Hadoop clusters (Big Data) to analyze and process
                  vast amount of data
                </li>
              </ul>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                DynamoDB - NoSQL db's / schemaless database
              </h3>
              <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://aws.amazon.com/pm/dynamodb"
                    target="_blank"
                  >
                    DynamoDB - NoSQL
                  </Link>
                </li>
                <li>
                  Serverless, NoSQL, fully managed database with single-digit
                  millisecond performance at any scale
                </li>
                <li>
                  Global tables - NoSQL supports active-active configuration in
                  both the East and West US AWS regions
                </li>
                <li>
                  DynamoDB - good for store data from a recommendation engine in
                  a database with Least operational overhead for any scale;
                </li>
                <li>
                  Amazon DynamoDB Accelerator (DAX) is a fully managed, highly
                  available, in-memory cache for Amazon DynamoDB that delivers
                  up to a 10 times performance improvement—from milliseconds to
                  microseconds—even at millions of requests per second.
                </li>
              </ul>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                AWS Athena
              </h3>
              <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://aws.amazon.com/athena/"
                    target="_blank"
                  >
                    AWS Athena
                  </Link>
                </li>
                <li>Serverless SQL</li>
                <li>
                  Amazon Athena is an interactive query service that makes it
                  easy to analyze data in Amazon S3 using standard SQL. Athena
                  is serverless, so there is no infrastructure to manage, and
                  you pay only for the queries that you run.
                </li>
              </ul>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                Redshift - big data as service / cloud data warehouse
              </h3>
              <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://aws.amazon.com/pm/redshift/"
                    target="_blank"
                  >
                    AWS Redshift
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                AWS KMS - Key Management Service
              </h3>
              <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://aws.amazon.com/kms/"
                    target="_blank"
                  >
                    AWS KMS
                  </Link>
                </li>
                <li>
                  create & control keys used to encrypt or digitally sign data;
                </li>
                <li>
                  AWS KMS is a managed service that enables you to easily create
                  and control the keys used for cryptographic operations. It is
                  managed by AWS.
                </li>
              </ul>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                AWS Direct Connect - enables us to connect securely AWS to
                on-prem data center. ex. Direct connect can connect Amazon VPC
                to on-premises data center.
              </h3>
              <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                <li>On-Prem connections</li>
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://aws.amazon.com/directconnect/"
                    target="_blank"
                  >
                    AWS Direct Connect
                  </Link>
                </li>
                <li>
                  AWS Direct Connect is a cloud service solution that makes it
                  easy to establish a dedicated private network connection from
                  your premises to AWS.
                </li>
                <li>
                  Direct Connect is used to establish a consistent & private
                  connection from company's on-prem data center to AWS.
                </li>
              </ul>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">AWS VPC</h3>
              <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://aws.amazon.com/vpc/"
                    target="_blank"
                  >
                    AWS VPC
                  </Link>
                </li>
                <li>2 features that can be configured with VPC are:</li>
                <li>
                  * Security Groups - operate at instance level and can control
                  traffic in & out of EC2
                </li>
                <li>* subnets</li>
                <li>
                  Virtual private cloud (VPC) is a virtual network dedicated to
                  your AWS account. It is logically isolated from other virtual
                  networks in the AWS Cloud. You can launch your AWS resources,
                  such as Amazon EC2 instances, into your VPC.
                </li>
                <li>
                  NAT Gateways allow your instances in your private subnets to
                  access the Internet while remaining private, and are managed
                  by AWS.
                </li>
                <li>
                  A public subnet is accessible from the Internet while a
                  private subnet is not accessible from the Internet.
                </li>
                <li>
                  NACL - network access control list is an optional layer of
                  security for your VPC that acts as a firewall for controlling
                  traffic in and out of one or more subnets. They have both
                  ALLOW and DENY rules.
                </li>
                <li>
                  AWS Transit Gateway connects thousands of VPC and on-premises
                  networks together in a single gateway.
                </li>
                <li>
                  An internet gateway is a horizontally scaled, redundant, and
                  highly available VPC component that allows communication
                  between your VPC and the internet.
                </li>
              </ul>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                AWS Lambda - runs code serverless without thinking of servers or
                clusters;
              </h3>
              <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://aws.amazon.com/lambda/"
                    target="_blank"
                  >
                    AWS Lambda
                  </Link>
                </li>
                <li>
                  charged by - users pay based on the number of requests &
                  consumed compute resources.
                </li>
                <li>
                  Lambda is charged by # of requests & time it takes for
                  function to run;
                </li>
                <li>
                  Amazon API Gateway is a fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs at any scale
                </li>
              </ul>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                Amazon Step Functions; Amazon DynamoDB & Amazon SNS - serverless
                platform;
              </h3>
              <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                <li>Amazon DynamoDB</li>
                <li>Amazon SNS</li>
                <li>
                  Lambda is charged by call & duration; In AWS Lambda, we are
                  charged per request and compute time, that's it.
                </li>
              </ul>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                AWS Personal Health Dashboard
              </h3>
              <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                <li>
                  Provides alerts when an AWS event may impact a company's AWS
                  resources. Provides alerts & remediation guidance when AWS is
                  experiencing events.
                </li>
                <li>
                  * ex. provides a customized view of the health of specific AWS
                  services that power a customers workloads running on AWS.
                </li>
                <li>
                  AWS Health - Your Account Health Dashboard | gives a
                  personalized view of the status of the AWS services that are
                  part of your Cloud architecture so that you can quickly assess
                  the impact on your business when AWS service(s) are
                  experiencing issues
                </li>
              </ul>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                AWS Health Dashboard - Service Health -
              </h3>
              <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                <li>
                  used to subscribe to an RSS feed to be notified of the status
                  of all AWS service interruptions
                </li>
                <li>
                  * Service health is the single place to learn about the
                  availability and operations of AWS services
                </li>
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://docs.aws.amazon.com/health/latest/ug/aws-health-dashboard-status.html"
                    target="_blank"
                  >
                    AWS Health Dashboard Status
                  </Link>
                </li>
                <li>
                  AWS Health - Your Account Health Dashboard - personalized view
                  of the status of the AWS services that are part of your Cloud
                  architecture so that you can quickly assess the impact on your
                  business when AWS service(s) are experiencing issues
                </li>
                <li>
                  AWS Health - Your Account Health Dashboard provides alerts and
                  remediation guidance when AWS is experiencing events that may
                  impact you.
                </li>
                <li>
                  AWS Health Dashboard provides alerts and remediation guidance
                  when AWS is experiencing events that may impact you.
                </li>
                <li>
                  AWS Health Dashboard - Service Health can be used to subscribe
                  to an RSS feed to be notified of the status of all AWS service
                  interruptions
                </li>
              </ul>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                AWS Marketplace - search for software listing that runs on AWS
              </h3>
              <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://aws.amazon.com/marketplace"
                    target="_blank"
                  >
                    AWS Marketplace
                  </Link>
                </li>
                <li>
                  Sell Software as a Service (SaaS) solutions to AWS customers
                </li>
              </ul>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                Facilitates use cases:
              </h3>
              <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                <li>
                  Sell Software as a Service (SaaS) solutions to AWS customers
                </li>
                <li>
                  AWS customer can buy software that has been bundled into
                  customized Amazon Machine Image (AMIs) by the AWS Marketplace
                  sellers
                </li>
              </ul>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                AWS managed services such as ElastiCache & RDS benefits are:
                they simplify patching & updating OS's.
              </h3>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                RDS & EFS are services for read/write of constantly changing
                data Amazon Elastic File System EFS
              </h3>
              <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://aws.amazon.com/efs/"
                    target="_blank"
                  >
                    EFS - Amazon Elastic File System
                  </Link>
                </li>
                <li>
                  Amazon EFS is a fully managed service that makes it easy to
                  set up, scale, and cost-optimize file storage in the Amazon
                  Cloud.
                </li>
                <li>
                  EFS - EC2 Storage used to create a shared network file system
                  for EC2 Instances
                </li>
                <li>
                  * EFS provides simple scalable elastic NFS file system & can
                  be used for on-premises including Linux Glacier is used for
                  archiving | long term low cost storage;
                </li>
                <li>
                  Amazon Elastic File System (Amazon EFS) - use a storage
                  service which would be accessed by hundreds of EC2 instances
                  simultaneously to append data to existing files
                </li>
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://aws.amazon.com/s3/storage-classes/"
                    target="_blank"
                  >
                    Storage Classes
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                AWS Glacier - Long-term, secure, durable storage classes for
                data archiving at the lowest cost and milliseconds access
              </h3>
              <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                <li>
                  Deep Archive - lowest-cost storage class and supports
                  long-term retention and digital preservation for data that may
                  be accessed once or twice in a year
                </li>
                <li>
                  Flexible Retrieval - delivers low-cost storage, up to 10%
                  lower cost (than Amazon S3 Glacier Instant Retrieval), for
                  archive data that is accessed 1—2 times per year and is
                  retrieved asynchronously
                </li>
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://aws.amazon.com/pm/s3-glacier"
                    target="_blank"
                  >
                    S3 Glacier
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                Amazon S3 - object storage build to retrieve any amount of data
                from anywhere lowest cost durable storage option for retaining
                database backups for immediate retrieval;
              </h3>
              <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://aws.amazon.com/s3/"
                    target="_blank"
                  >
                    AWS S3
                  </Link>
                </li>
                <li>
                  * can be used for serving large amounts of online video
                  content with lowest possible latency
                </li>
                <li>* can be used for hosting static websites;</li>
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html"
                    target="_blank"
                  >
                    Hosting a static website using Amazon S3
                  </Link>
                </li>
                <li>S3 One Zone-IA used to store thumbnails images</li>
                <li>
                  Use Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA) to
                  store the thumbnails
                </li>
                <li>
                  Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA) is for
                  data that is accessed less frequently but requires rapid
                  access when needed.
                </li>
                <li>S3 buckets have encryption configured by default</li>
                <li>
                  Lifecycle Rules can be used to define when S3 objects should
                  be transitioned to another storage class or when objects
                  should be deleted after some time.
                </li>
                <li>
                  Amazon S3 Standard-Infrequent Access allow you to store
                  infrequently accessed data, with rapid access when needed, has
                  a high durability, and is stored in several Availability Zones
                  to avoid data loss in case of a disaster. It can be used to
                  store data for disaster recovery, backups, etc.
                </li>
                <li>
                  S3 Standard-IA has a higher storage cost but a lower retrieval
                  cost, while S3 Glacier has a lower storage cost but a higher
                  retrieval cost. S3 Standard-IA has a higher storage cost than
                  S3 Glacier because it is designed to provide fast access to
                  data;
                </li>
                <li>
                  S3 Transfer Acceleration enables fast, easy, and secure
                  transfers of files over long distances between your client and
                  an S3 bucket.
                </li>
                <li>Inbound data transfer in the S3 region is free.</li>
                <li>
                  AWS Outposts bring native AWS services, infrastructure, and
                  operating models to virtually any data center, co-location
                  space, or on-premises facility.
                </li>
              </ul>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                Routing types:
              </h3>
              <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html"
                    target="_blank"
                  >
                    Routing Policy
                  </Link>
                </li>

                <li>
                  Weighted routing - lets you associate multiple resources with
                  a single domain name
                  <br />
                  Weighted routing is an AWS Route 53 routing policy would you
                  use to route traffic to multiple resources and also choose how
                  much traffic is routed to each resource
                </li>
                <li>
                  Failover routing - This routing policy is used when you want
                  to configure active-passive failover.
                </li>
                <li>
                  Simple routing - With simple routing, you typically route
                  traffic to a single resource, for example, to a web server for
                  your website.
                </li>
                <li>
                  Latency-based routing - This routing policy is used when you
                  have resources in multiple AWS Regions and you want to route
                  traffic to the region that provides the best latency.
                </li>
                <li>
                  Route 53 - DNS reliable & cost effective way to route end
                  users to apps; Route 53 is considered global not regional
                </li>
                <li>
                  AWS Wavelength (5G) is an AWS Infrastructure offering
                  optimized for mobile edge computing applications. Wavelength
                  combines the high bandwidth and ultra-low latency of 5G
                  networks with AWS compute and storage services to enable
                  developers to innovate and build a whole new class of
                  applications.
                </li>
                <li>
                  Route 53 Policy: Weighted Routing Policy is used to route
                  traffic to multiple resources in proportions that you specify.
                </li>
                <li>
                  Route 53 some features are: Domain Registration, DNS, Health
                  Checks, Routing Policy
                </li>
                <li>
                  Use Amazon Route 53 with latency-based routing to ensure global content delivery with the lowest possible latency
                </li>
              </ul>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                AWS EBS - Elastic Block Store - high performance block storage
              </h3>
              <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://aws.amazon.com/ebs/"
                    target="_blank"
                  >
                    EBS - Amazon Elastic Block Store
                  </Link>
                </li>
                <li>
                  is a device you can mount onto EC2 it is a block storage so
                  you format it; we are able to chose which type of file we
                  want.
                </li>
                <li>
                  EBS Volumes can be attached to only one EC2 Instance at a
                  time, but EC2 Instances can have multiple EBS Volumes attached
                  to them.
                </li>
                <li>
                  EBS Volumes allows instances' data to persist even after their
                  termination.
                </li>
                <li>
                  EBS Snapshots are used to backup data on your EBS Volumes at a
                  point in time.
                </li>
                <li>EBS Volumes are tied to only one availability zone.</li>
                <li>EBS Snapshots are added cost in GB per month</li>
              </ul>
            </div>
            <div>
              <div
                className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                role="alert"
              >
                <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                  AWS CLI - to access with IAM we utilize access keys;
                </h3>
                <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                  <li>
                    <Link
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      href="https://docs.aws.amazon.com/cli/v1/userguide/cli-authentication-user.html"
                      target="_blank"
                    >
                      Authenticate with IAM user credentials
                    </Link>
                  </li>
                </ul>
              </div>
              <div
                className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                role="alert"
              >
                <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                  AWS CloudWatch - observe & monitor resources & apps ex. a
                  metrics repo with customizable notification thresholds &
                  channels CloudWatch logs: advantages are real-time monitoring
                  & adjustable retention
                </h3>
                <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                  <li>
                    <Link
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      href="https://aws.amazon.com/cloudwatch/"
                      target="_blank"
                    >
                      Amazon CloudWatch
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html"
                      target="_blank"
                    >
                      Amazon CloudWatch Logs
                    </Link>
                  </li>
                  <li>
                    CloudWatch to gain system-wide visibility into resource
                    utilization; app perf & operational health
                  </li>
                  <li>
                    Amazon CloudWatch Logs to monitor, store, log files from
                    EC2; on-premises servers & many others;
                  </li>
                  <li>
                    CloudWatch Logs are good for a company to centralize the
                    server logs for its EC2 instances & on-premises servers
                  </li>
                  <li>
                    CloudWatch Alarms feature allows you to watch CloudWatch
                    metrics and to receive notifications when the metrics fall
                    outside of the levels (high or low thresholds) that you
                    configure.
                  </li>
                  <li>
                    CloudWatch Logs to monitor, store, and access your log files
                    from Amazon Elastic Compute Cloud (Amazon EC2) instances,
                    AWS CloudTrail, Route 53, and other sources.
                  </li>
                  <li>
                    CloudWatch we can set up metrics monitoring for every
                    service in AWS
                  </li>
                </ul>
              </div>
              <div
                className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                role="alert"
              >
                <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                  AWS Redshift - scalable data warehouse solution | power data
                  driven decisions with the best price-performance cloud data
                  warehouse
                </h3>
                <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                  <li>
                    <Link
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      href="https://aws.amazon.com/redshift/"
                      target="_blank"
                    >
                      AWS Redshift
                    </Link>
                  </li>
                </ul>
              </div>
              <div
                className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                role="alert"
              >
                <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                  Elastic Load Balancing ELB - Distribute network traffic to
                  improve application scalability
                </h3>
                <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                  <li>
                    automatically distributes incoming app traffic across
                    multiple targets such as EC2 instances; containers; IPs ||
                    Lambda functions.
                  </li>
                  <li>
                    Elastic Load Balancing (ELB) automatically distributes
                    incoming application traffic across multiple targets, such
                    as Amazon EC2 instances, containers, and IP addresses
                  </li>
                  <li>
                    ELB Benefits:
                    <ul className="ml-5">
                      <li>Fault tolerance</li>
                      <li>High Availability</li>
                    </ul>
                  </li>
                  <li>
                    <Link
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      href="https://aws.amazon.com/elasticloadbalancing/"
                      target="_blank"
                    >
                      Elastic Load Balancing (ELB)
                    </Link>
                  </li>
                  <li>
                    A Network Load Balancer ultra-high performance - can handle
                    millions of requests per second with low-latency. It
                    operates at Layer 4, and is best-suited for load-balancing
                    TCP, UDP, and TLS traffic with ultra high-performance.
                  </li>
                  <li>
                    Application Load - HTTP / HTTPS only layer 7. Application
                    Load Balancers are used for HTTP and HTTPS load balancing.
                    They are the best-suited for this kind of traffic.
                  </li>
                </ul>
              </div>
              <div
                className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                role="alert"
              >
                <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                  AWS Services ways for customer to interact: * AWS Management
                  console - GUI * CLI control from command line * SDKs access
                  via many programming languages
                </h3>
              </div>
              <div
                className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                role="alert"
              >
                <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                  AWS CloudFront - CDN service build for perf; security &
                  developers * can be used to serve large amounts of online
                  video with lowest possible latency
                </h3>
                <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                  <li>
                    <Link
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      href="https://aws.amazon.com/cloudfront/"
                      target="_blank"
                    >
                      AWS CloudFront
                    </Link>
                  </li>
                  <li>CloudFront is global not regional.</li>
                  <li>CloudFront decreases latency & increases perf</li>
                  <li>
                    CloudFront delivers content worldwide through data centers
                    called "Edge Locations"; AWS Edge location is a site that
                    CloudFront uses to cache copies of the content for faster
                    delivery to users at any location;
                  </li>
                  <li>
                    Uses Caching Content in Edge Locations to improve read
                    performance; CloudFront uses Edge Location to cache content,
                    and therefore bring more of your content closer to your
                    viewers to improve read performance.
                  </li>
                  <li>
                    CloudFront pricing is different across different geographic
                    regions.
                  </li>
                  <li>
                    CloudFront achieves lower latency & high transfer speeds; it
                    speeds up distribute of static & dynamic web content.
                  </li>
                </ul>
              </div>
              <div
                className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                role="alert"
              >
                <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                  AWS Professional Services is an AWS team that can assist
                  customers with accelerating adoption through paid engagements.
                  * provides architect prototypes & solutions tailers to the
                  customer.
                </h3>
                <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                  <li>
                    <Link
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      href="https://aws.amazon.com/professional-services/"
                      target="_blank"
                    >
                      AWS Professional Services
                    </Link>
                  </li>
                </ul>
              </div>
              <div
                className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                role="alert"
              >
                <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                  AWS Partner Network Consulting Partners is an org that is
                  focused on assisting customers with advice; professional
                  services when moving to AWS. AWS Partner Network Technology
                  Partners refers to a company that is developing their own
                  product/service.
                </h3>
              </div>
              <div
                className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                role="alert"
              >
                <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                  AWS Storage Gateway - service provides a hybrid storage
                  service that enables on-premises app to seamlessly use cloud
                  storage;
                </h3>
                <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                  <li>
                    <Link
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      href="https://aws.amazon.com/storagegateway/"
                      target="_blank"
                    >
                      AWS Storage Gateway
                    </Link>
                  </li>
                  <li>
                    Encrypted by default - All data transferred between the
                    gateway and AWS storage is encrypted using SSL
                  </li>
                </ul>
              </div>
              <div
                className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                role="alert"
              >
                <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                  Amazon ElastiCache
                </h3>
                <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                  <li>
                    <Link
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      href="https://aws.amazon.com/pm/elasticache"
                      target="_blank"
                    >
                      Amazon ElastiCache
                    </Link>
                  </li>
                  <li>
                    Storing common database query results which helps alleviate
                    db access load.
                  </li>
                  <li>decreases latency & increase perf;</li>
                </ul>
              </div>
              <div
                className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                role="alert"
              >
                <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                  AWS Quick start reference deployments - help deploy popular IT
                  solution & start using it immediately
                </h3>
              </div>
              <div
                className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                role="alert"
              >
                <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                  AWS Directory Service - SSO - AWS SSO is an service that lets
                  you access from MS AD;
                </h3>
                <ul>
                  <li>
                    AWS Security Token Service (AWS STS) is a web service that
                    enables you to request temporary, limited-privilege
                    credentials for AWS Identity and Access Management (IAM)
                    users or for users that you authenticate (federated users).
                  </li>
                  <li>
                    Amazon Cognito lets you add user sign-up, sign-in, and
                    access control to your web and mobile apps quickly and
                    easily.
                  </li>
                </ul>
              </div>
              <div
                className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                role="alert"
              >
                <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                  AWS Compliance Program - * It assures customers that AWS is
                  maintaining physical security & data protection
                  <br />
                </h3>
                <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                  <li>
                    * it verifies that hosted workloads are automatically
                    compliant with the controls of supported compliance
                    frameworks;
                  </li>
                </ul>
              </div>
              <div
                className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                role="alert"
              >
                <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                  AWS Glue is an ETL service to make it easy to prepare data for
                  analytics
                </h3>
                <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                  <li>
                    <Link
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      href="https://aws.amazon.com/glue/"
                      target="_blank"
                    >
                      AWS Glue
                    </Link>
                  </li>
                  <li>
                    AWS Glue is a serverless service to prepare data so it can
                    be loaded for analytics.
                  </li>
                  <li>
                    AWS Glue is a fully managed extract, transform, and load
                    (ETL) service that makes it easy for customers to prepare
                    and load their data for analytics.
                  </li>
                  <li>
                    AWS Glue Data Catalog is a central repository to store
                    structural and operational metadata for all your data
                    assets. For a given data set, you can store its table
                    definition, physical location, add business relevant
                    attributes, as well as track how this data has changed over
                    time.
                  </li>
                </ul>
              </div>
              <div
                className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                role="alert"
              >
                <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                  Amazon GuardDuty is a threat detection service.
                </h3>
              </div>
              <div
                className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                role="alert"
              >
                <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                  Help decrease network latency for a globally dispersed user
                  base: 2 services || features:
                </h3>
                <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                  <li>AWS CloudFront</li>
                  <li>
                    AWS Global Accelerator - improves performance for a wide
                    range of app
                  </li>
                </ul>
              </div>
              <div
                className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                role="alert"
              >
                <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                  AWS QuickSight is a BI dashboard service;
                </h3>
                <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                  <li>
                    <Link
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      href="https://docs.aws.amazon.com/quicksight/latest/user/welcome.html"
                      target="_blank"
                    >
                      AWS QuickSight
                    </Link>
                  </li>
                </ul>
              </div>
              <div
                className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                role="alert"
              >
                <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                  AWS Snowball is a service that will allow transfer of
                  "petabytes" || large data from on-prem to cloud;
                </h3>
                <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                  <li>
                    <Link
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      href="https://aws.amazon.com/snowball/"
                      target="_blank"
                    >
                      AWS Snowball
                    </Link>
                  </li>
                  <li>
                    Snowmobile is used to move exabytes of data in or out of AWS
                    (1 EB=1,000 PBs=1,000,000 TBs)
                  </li>
                  <li>Snowcone up to 8 Terabytes</li>
                  <li>Snowball Edge - up to petabytes</li>
                  <li>
                    Snowball Edge Storage Optimized devices are well suited for
                    large-scale data migrations and recurring transfer
                    workflows, as well as local computing with higher capacity
                    needs.
                  </li>
                  <li>
                    AWS Snowball key features:
                    <ul>
                      <li>High-speed and secure data migration to AWS Cloud</li>
                      <li>Local data processing capabilities</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div
                className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                role="alert"
              >
                <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                  AWS Outposts is a service that offers same AWS service;
                  infrastructure APIS to on-prem hybrid
                </h3>
                <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                  <li>
                    <Link
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      href="https://aws.amazon.com/outposts/"
                      target="_blank"
                    >
                      AWS Outposts
                    </Link>
                  </li>
                </ul>
              </div>
              <div
                className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                role="alert"
              >
                <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                  Amazon Inspector - Automated & continual vulnerability
                  management at scale
                </h3>
                <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                  <li>
                    <Link
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      href="https://aws.amazon.com/inspector"
                      target="_blank"
                    >
                      Amazon Inspector
                    </Link>
                  </li>
                  <li>
                    Inspector does:
                    <ul className="ml-5">
                      <li>inspect OS against vulnerabilities</li>
                      <li>Analyze against unintended network accessibility</li>
                      <li>Automate security assessments</li>
                    </ul>
                  </li>
                  <li>Inspector does not -Track configuration changes</li>
                  <li>
                    Amazon Inspector is an automated security assessment service
                    that helps improve the security and compliance of
                    applications deployed on AWS. It helps you test the network
                    accessibility of your Amazon EC2 instances and the security
                    state of your applications running on the instances.
                  </li>
                </ul>
              </div>
              <div
                className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                role="alert"
              >
                <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                  AWS Elastic Beanstalk - PaaS (Platform as a Service) Deploy
                  and scale web applications
                </h3>
                <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                  <li>
                    <Link
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      href="https://aws.amazon.com/elasticbeanstalk"
                      target="_blank"
                    >
                      AWS Elastic Beanstalk
                    </Link>
                  </li>
                  <li>
                    Elastic Beanstalk 9s free of use, but we do pay for the
                    resources created.
                  </li>
                </ul>
              </div>
              <div
                className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                role="alert"
              >
                <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                  AWS KMS - Key Management Service Create and control keys used
                  to encrypt or digitally sign your data
                </h3>
                <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                  <li>
                    <Link
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      href="https://aws.amazon.com/kms/"
                      target="_blank"
                    >
                      AWS KMS - Key Management Service
                    </Link>
                  </li>
                </ul>
              </div>
              <div
                className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                role="alert"
              >
                <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                  Amazon EventBridge - Serverless - Build event-driven
                  applications at scale across AWS, existing systems, or SaaS
                  applications
                </h3>
                <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                  <li>
                    <Link
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      href="https://aws.amazon.com/pm/eventbridge"
                      target="_blank"
                    >
                      Event Bridge
                    </Link>
                  </li>
                </ul>
              </div>
              <div
                className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                role="alert"
              >
                <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                  AWS Fargate - Serverless compute for CONTAINERS
                </h3>
                <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                  <li>
                    <Link
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      href="https://aws.amazon.com/fargate/"
                      target="_blank"
                    >
                      AWS Fargate
                    </Link>
                  </li>
                  <li>
                    AWS Fargate - serverless compute engine for containers that
                    works with both Amazon Elastic Container Service (ECS) and
                    Amazon Elastic Kubernetes Service (EKS).
                  </li>
                </ul>
              </div>
              <div
                className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                role="alert"
              >
                <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                  AWS ECS - Elastic Container Service - docker containers
                </h3>
                <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                  <li>
                    <Link
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      href="https://docs.aws.amazon.com/ecs/"
                      target="_blank"
                    >
                      AWS ECS - Elastic Container Service
                    </Link>
                  </li>
                  <li>
                    Amazon Elastic Container Service (Amazon ECS) is a highly
                    scalable, fast, container management service that makes it
                    easy to run, stop, and manage Docker containers on a
                    cluster.
                  </li>
                  <li>
                    ECS allows you to launch Docker containers on AWS, but you
                    must provision and maintain the infrastructure (i.e. EC2
                    instances).
                  </li>
                  <li>
                    Elastic Container Registry (ECR) is a service where you
                    store your Docker image so they can be run by ECS or
                    Fargate.
                  </li>
                </ul>
              </div>
              <div
                className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                role="alert"
              >
                <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                  AWS OpsWorks
                </h3>
                <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                  <li>
                    <Link
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      href="https://aws.amazon.com/documentation-overview/opsworks/"
                      target="_blank"
                    >
                      AWS OpsWorks
                    </Link>
                  </li>
                  <li>Chef & Puppet</li>
                  <li>
                    AWS OpsWorks automate how servers are configured; deployed;
                    & managed.
                  </li>
                </ul>
              </div>
              <div
                className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                role="alert"
              >
                <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                  Amazon EBS - Elastic Block Store
                </h3>
                <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                  <li>
                    <Link
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      href="https://aws.amazon.com/ebs/"
                      target="_blank"
                    >
                      Amazon EBS - Elastic Block Store
                    </Link>
                  </li>
                  <li>
                    Easy to use, high performance block storage at any scale
                  </li>
                </ul>
              </div>
              <div
                className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                role="alert"
              >
                <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                  Machine Learning
                </h3>
                <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                  <li>
                    Amazon Polly Deploy high-quality, natural-sounding human
                    voices in dozens of languages
                  </li>
                  <li>
                    <Link
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      href="https://aws.amazon.com/polly/"
                      target="_blank"
                    >
                      Amazon Polly
                    </Link>
                  </li>

                  <li>
                    Amazon Transcribe - Automatically convert speech to text
                  </li>
                  <li>
                    <Link
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      href="https://aws.amazon.com/pm/transcribe"
                      target="_blank"
                    >
                      Amazon Transcribe
                    </Link>
                  </li>
                  <li>
                    Amazon Lex is a service for building chat bots /
                    conversational interfaces
                  </li>
                  <li>
                    Amazon Rekognition makes it easy to add image and video
                    analysis to your applications using proven, highly scalable,
                    deep learning technology that requires no machine learning
                    expertise to use.
                  </li>
                  <li>
                    Amazon Personalize is a machine learning service that makes
                    it easy for developers to create individualized
                    recommendations for customers using their applications.
                  </li>
                  <li>
                    Amazon Comprehend is a natural language processing (NLP)
                    service that uses machine learning to find meaning and
                    insights in text.
                  </li>
                  <li>
                    Amazon SageMaker is a fully managed service that provides
                    every developer and data scientist with the ability to
                    build, train, and deploy machine learning (ML) models
                    quickly. SageMaker removes the heavy lifting from each step
                    of the machine learning process to make it easier to develop
                    high quality models.
                  </li>
                  <li>
                    Amazon Kendra is a document search service powered by
                    machine learning. Kendra is a highly accurate and easy to
                    use enterprise search service that's powered by machine
                    learning.
                  </li>
                </ul>
              </div>
              <div
                className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                role="alert"
              >
                <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                  VPC Endpoints
                </h3>
                <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                  <li>
                    A VPC endpoint enables customers to privately connect to
                    supported AWS services and VPC endpoint services powered by
                    AWS PrivateLink. Amazon VPC instances do not require public
                    IP addresses to communicate with resources of the service.
                    Traffic between an Amazon VPC and a service does not leave
                    the Amazon network.
                  </li>
                  <li>
                    <Link
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      href="https://docs.aws.amazon.com/whitepapers/latest/aws-privatelink/what-are-vpc-endpoints.html"
                      target="_blank"
                    >
                      VPC Endpoints
                    </Link>
                  </li>
                </ul>
              </div>
              <div
                className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                role="alert"
              >
                <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                  Amazon Macie Discover and protect your sensitive data at scale
                </h3>
                <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                  <li>
                    <Link
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      href="https://aws.amazon.com/macie/"
                      target="_blank"
                    >
                      Amazon Macie
                    </Link>
                  </li>
                  <li>
                    Amazon Macie is a fully managed data security and data
                    privacy service that uses machine learning and pattern
                    matching to discover and protect your sensitive data in AWS.
                  </li>
                  <li>
                    Amazon Macie is a security service that uses machine
                    learning to automatically discover, classify, and protect
                    sensitive data in AWS, such as personally identifiable
                    information (PII) or intellectual property.
                  </li>
                </ul>
              </div>
              <div
                className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                role="alert"
              >
                <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                  AWS Compute Optimizer - Get recommendations to optimize your
                  use of AWS resources for such as:
                </h3>
                <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                  <li>
                    <Link
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      href="https://aws.amazon.com/compute-optimizer/"
                      target="_blank"
                    >
                      AWS Compute Optimizer
                    </Link>
                  </li>
                  <li>
                    AWS Compute Optimizer does NOT provide optimization for S3
                    || EFS
                  </li>
                  <li>
                    <ul className="ml-5">
                      <li>EC2</li>
                      <li>EC2 Auto Scaling Groups</li>
                      <li>EBS - Amazon Elastic Block Store</li>
                      <li>Lambda functions</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div
                className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                role="alert"
              >
                <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                  AWS X-Ray - Analyze and debug production and distributed
                  applications
                </h3>
                <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                  <li>
                    XRay is good to debug performance issues for its serverless
                    application built using a microservices architecture
                  </li>
                  <li>
                    <Link
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      href="https://aws.amazon.com/xray/"
                      target="_blank"
                    >
                      AWS X-Ray
                    </Link>
                  </li>
                  <li>
                    Debug performance issues for its serverless application
                    built using a microservices architecture
                  </li>
                  <li>
                    CodeGuru is a developer tool that provides intelligent
                    recommendations to improve code quality and identify an
                    application’s most expensive lines of code.
                  </li>
                </ul>
              </div>
              <div
                className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                role="alert"
              >
                <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                  AWS Systems Manager Session Manager - best way to provide
                  secure shell access to EC2 without opening new ports or public
                  IP.
                </h3>
                <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                  <li>
                    <Link
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      href="https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html"
                      target="_blank"
                    >
                      AWS Systems Manager Session Manager
                    </Link>
                  </li>
                  <li>
                    AWS Systems Manager get operational insights of its
                    resources to quickly identify any issues that might impact
                    applications using those resources
                  </li>
                  <li>
                    AWS Systems Manager view and manage operational data from
                    multiple AWS resources
                  </li>
                  <li>
                    AWS Systems Manager Session Manager is a fully-managed
                    service that provides you with an interactive browser-based
                    shell and CLI experience.
                  </li>
                </ul>
              </div>
              <div
                className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                role="alert"
              >
                <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                  AWS Auto Scaling - free to use - Application scaling to
                  optimize performance and costs
                </h3>
                <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                  <li>
                    <Link
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      href="https://aws.amazon.com/autoscaling/"
                      target="_blank"
                    >
                      AWS Auto Scaling
                    </Link>
                  </li>
                </ul>
              </div>
              <div
                className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                role="alert"
              >
                <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                  Instance Store - provides temporary block-level storage for
                  your EC2 instance.
                </h3>
              </div>
              <div
                className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                role="alert"
              >
                <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                  AWS Local Zones - deliver a consistent low-latency for
                  end-users in various locations
                  <br />
                  AWS Local Zones allow you to use select AWS services, like
                  compute and storage services, closer to more end-users,
                  providing them very low latency access to the applications
                  running locally.
                </h3>
              </div>
              <div
                className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                role="alert"
              >
                <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                  Data Sitting on an RDS refers to data at rest.
                </h3>
              </div>
              <div
                className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                role="alert"
              >
                <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                  AWS Local Zones - deliver a consistent low-latency for
                  end-users in various locations
                  <br />
                  AWS Local Zones allow you to use select AWS services, like
                  compute and storage services, closer to more end-users,
                  providing them very low latency access to the applications
                  running locally.
                </h3>
              </div>
              <div
                className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                role="alert"
              >
                <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                  Data Sitting on an RDS refers to data at rest.
                </h3>
              </div>
              <div
                className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                role="alert"
              >
                <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                  Amazon Detective - quickly find the root of potential security
                  issues to take faster actions
                </h3>
                <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                  <li>
                    <Link
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      href="https://aws.amazon.com/detective/"
                      target="_blank"
                    >
                      AWS Detective
                    </Link>
                  </li>
                  <li>
                    Amazon Detective makes it easy to analyze, investigate, and
                    quickly identify the root cause of potential security issues
                    or suspicious activities.
                  </li>
                </ul>
              </div>
              <div
                className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                role="alert"
              >
                <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                  Amazon FSx makes it easy and cost effective to launch
                </h3>
              </div>
              <div
                className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                role="alert"
              >
                <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                  AWS EFS | Amazon Elastic File System
                </h3>
                <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                  <li>
                    <Link
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      href="https://aws.amazon.com/efs/"
                      target="_blank"
                    >
                      AWS EFS
                    </Link>
                  </li>
                  <li>
                    Amazon EFS is a file storage service for use with Amazon
                    EC2. Amazon EFS provides a file system interface, file
                    system access semantics, and concurrently-accessible storage
                    for up to thousands of Amazon EC2 instances. Amazon EFS uses
                    the Network File System protocol.
                  </li>
                  <li>
                    EFS is a a storage service which would be accessed by
                    hundreds of EC2 instances simultaneously to append data to
                    existing files
                  </li>
                </ul>
              </div>
              <div
                className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                role="alert"
              >
                <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                  AWS OpsHub
                </h3>
                <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                  <li>
                    <Link
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      href="https://docs.aws.amazon.com/snowball/latest/developer-guide/aws-opshub.html"
                      target="_blank"
                    >
                      AWS OpsHub
                    </Link>
                  </li>
                  <li>
                    OpsHub is a tool provides an easy-to-use graphical user
                    interface for managing AWS Snowball devices
                  </li>
                  <li>
                    AWS OpsHub simplifies the management of AWS Snowball
                    devices, enabling easy deployment of edge computing
                    workloads and data migration to the cloud. It offers a
                    graphical interface to configure devices, transfer data,
                    launch applications, and monitor metrics, replacing
                    traditional CLI and API methods
                  </li>
                </ul>
              </div>
              <div
                className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                role="alert"
              >
                <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                  AWS DataSync - Simplify and accelerate secure data migrations
                </h3>
                <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                  <li>
                    <Link
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      href="https://aws.amazon.com/datasync/"
                      target="_blank"
                    >
                      AWS DataSync
                    </Link>
                  </li>
                  <li>
                    AWS automatically performs data validation after every
                    DataSync task.
                  </li>
                  <li>
                    AWS DataSync includes automatic data validation as a
                    feature. After DataSync transfers the data to the
                    destination, it automatically validates the data by
                    comparing the metadata from the source and destination
                    locations, ensuring that data was transferred accurately and
                    completely. This helps users to have confidence that the
                    transferred data is consistent with the source data.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          ---------------- -----------------------
          <br />
          -- 4. Billing; Pricing & Services
          <br />
          --- ---------------- -----------------------
          <div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                AWS Support Plans:
              </h3>
              <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://aws.amazon.com/premiumsupport/plans/"
                    target="_blank"
                  >
                    AWS Support Plans
                  </Link>
                </li>
                <li>
                  Business
                  <ul className="ml-5">
                    <li>minimum that allows one hour response time</li>
                    <li>
                      Minimum plan that provides technical support phone calls.
                      24/7 phone; email & chat to cloud support engineers.
                    </li>
                  </ul>
                </li>
                <li>
                  Enterprise
                  <ul className="ml-5">
                    <li>includes a dedicated Technical Account Manger</li>
                    <li>
                      includes Infrastructure Event Management without
                      additional costs.
                    </li>
                    <li>
                      AWS Concierge support team is the primary contact for
                      billing & account inquires for Enterprise level support.
                    </li>
                    <li>
                      Enterprise Support Plan comes with a business-critical
                      system down response under 15 minutes and offers access to
                      a Technical Account Manager, as well as a Concierge
                      Support Team. It is the only plan to have these features.
                    </li>
                  </ul>
                </li>
                <li>Developer</li>
                <li>
                  Basic - Support includes 24/7 access to customer service and
                  documentation.
                </li>
              </ul>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                EC2 Pricing models:
              </h3>
              <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                <li>
                  On-Demand - instances in EC2 Pricing model is MOST cost
                  efficient for an uninterruptible workload that runs once a
                  year for 24 hours
                  <br />
                  On Demand is: pay for what you use - 1 benefit of On-demand
                  EC2 pricing is paying only for time used.
                </li>
                <li>
                  Reserved Instances - RI
                  <br />
                  long term never interrupted.
                  <br />
                  instances are not cheap;
                  <br /> save up to 75%
                  <br /> good for 3 yrs non-interruptible
                  <br />
                  Amazon EC2 Reserved Instance Utilization Report provides
                  ability to share the cost benefits of Reserved instances
                  across AWS accounts;
                  <br />
                  1 year or 3 years terms are available for EC2 Reserved
                  Instances
                  <br />
                  EC2 Image Builder is an automated pipeline for the creation,
                  maintenance, validation, sharing, and deployment of Linux or
                  Windows images for use on AWS and on-premises.
                  <br />
                  EC2 Image Builder can be used to automate image management
                  processes
                </li>
                <li>
                  Spot instances
                  <ul className="ml-5">
                    <li>* can be interrupted; spot = interruptible jobs</li>
                    <li>* can save up to 90%;</li>
                    <li>adjusts based on demand;</li>
                    <li>
                      When there is flexibility in when an app needs to run = a
                      spot benefit
                    </li>
                    <li>
                      Spot instances will interrupt a running EC2 instance if
                      capacity becomes temp unavailable;
                    </li>
                    <li>
                      Spot Instances are good for short workloads, but are less
                      reliable. Spot Instances can provide the biggest discount,
                      but is not suitable for critical jobs or databases
                    </li>
                    <li>
                      Spot instances can access unused EC2 capacity; allows
                      customers to purchase unused EC2 capacity at often
                      discounted rate.
                    </li>
                  </ul>
                </li>
                <li>
                  Dedicated host - allows you to use your eligible software
                  licenses from vendors such as Microsoft and Oracle on Amazon
                  EC2 so that you get the flexibility and cost-effectiveness of
                  using your licenses, but with the resiliency, simplicity, and
                  elasticity of AWS
                </li>
              </ul>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                There is a one-minute minimum charge for Linux based EC2
                instances. Therefore if a user used 30 seconds we'll be charged
                for 60 seconds;
                <br />
                EC2 instances, you pay per second of compute capacity. There is
                also a minimum of 60s of use.
              </h3>
              <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://aws.amazon.com/blogs/aws/new-per-second-billing-for-ec2-instances-and-ebs-volumes/"
                    target="_blank"
                  >
                    EC2 Billing
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                Optimize EC2 costs:
              </h3>
              <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                <li>
                  Set up Auto Scaling groups to align the number of instances
                  with the demand
                </li>
                <li>Purchase Amazon EC2 Reserved instances (RIs)</li>
                <li>
                  fyi - Compute Savings Plans provide the most flexibility and
                  help to reduce your costs by up to 66% in exchange for a
                  commitment to a consistent amount of usage for a 1 or 3 year
                  term.
                </li>
              </ul>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                An app has flexible start & end times. EC2 pricing model which
                is best would be "Spot Instances".
              </h3>
              <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://aws.amazon.com/ec2/spot/"
                    target="_blank"
                  >
                    Amazon EC2 Spot Instances
                  </Link>
                </li>
                <li>
                  Spot instances optimizes costs; run hyperscale workloads &
                  builds sustainable solutions.
                </li>
              </ul>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                Optimize EC2 costs by:
              </h3>
              <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                <li>
                  Implementing Auto Scaling groups to add & remove instances
                  based on demand;
                </li>
                <li>Purchasing Reserved Instances</li>
              </ul>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                AWS Artifact - access AWS & ISV security & compliance reports
              </h3>
              <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://aws.amazon.com/artifact/"
                    target="_blank"
                  >
                    AWS Artifact
                  </Link>
                </li>
                <li>
                  ex. we can download compliance & certification reports;
                </li>
                <li>
                  provides Service Organization Control (SOC) and Payment Card Industry (PCI) reports
                </li>
              </ul>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                BILLING AWS Organizations - centrally manage environments &
                multiple AWS accounts
              </h3>
              <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://aws.amazon.com/organizations/"
                    target="_blank"
                  >
                    AWS Organizations
                  </Link>
                </li>
                <li>
                  ex. if customer is using multiple AWS accounts with separate
                  billing to take advantage of volume discounts
                </li>
                <li>
                  ex. if each company dept. has own AWS account to consolidate
                  billing we could create an AWS Organization & invite the
                  others.
                </li>
                <li>
                  Best practices for AWS Orgs:
                  <ul className="ml-5">
                    <li>Create AWS accounts per department</li>
                    <li>
                      Restrict account privileges using Service Control Policies
                      (SCP)
                    </li>
                  </ul>
                </li>
                <li>
                  AWS Control Tower offers the easiest way to set up and govern
                  a new, secure, multi-account AWS environment. It establishes a
                  landing zone that is based on best-practices blueprints, and
                  enables governance using guardrails you can choose from a
                  pre-packaged list.
                </li>
              </ul>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                Hosting models: Dedicated hosts ~= physical isolation;
              </h3>
              <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                <li>
                  ex. Cost allocation tags is good to track & categorize
                  spending?
                </li>
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html"
                    target="_blank"
                  >
                    Cost Allocation Tags
                  </Link>
                </li>
                <li>
                  ex. Volume pricing qualifications is an advantage of
                  consolidated billing;
                </li>
              </ul>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                AWS Cost & Usage tool give most granular insight into cost &
                usage.
              </h3>
              <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://aws.amazon.com/aws-cost-management/aws-cost-and-usage-reporting/"
                    target="_blank"
                  >
                    AWS Cost & Usage tool
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                Massive economies of scale - customers can benefit - periodic
                price reductions as the result of Amazon's operational
                efficiencies.
                <br />
                The massive scale at which AWS operates also benefits customers
                - ever increasing economies of scale enables them to continually
                reduce the pricing of compute and storage services.
              </h3>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                Moving from on-premises data center to AWS cloud - one financial
                difference will be:
              </h3>
              <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                <li>
                  * moving from upfront Capital Expense CAPEX to variable
                  operational expense OPEX - trade CapEx for OpEx
                </li>
              </ul>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                AWS simple Monthly Calculator - can be used to forecast the
                future costs of running a new web app. It's a new app so the
                cost explorer is used to predict cost.
              </h3>
              <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                <li></li>
              </ul>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                AWS Cost Explorer - used to forecast your AWS account usage and
                costs
              </h3>
              <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                <li>
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://aws.amazon.com/aws-cost-management/aws-cost-explorer/"
                    target="_blank"
                  >
                    AWS Cost Explorer
                  </Link>
                </li>
                <li>
                  * Visualize, understand, and manage your AWS costs and usage
                  over time
                </li>
              </ul>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                TOC total cost of ownership from on-prem vs AWS cloud 2 expenses
                considered are: * storage hardware * physical servers
              </h3>
              <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                <li>
                  2 factors doing TOC total cost of ownership when moving from
                  on-premises to AWS cloud:
                </li>
                <li>* power consumption</li>
                <li>* Labor costs to replace old servers</li>
                <li>
                  AWS Total Cost of Ownership (TCO) calculator allows us to
                  estimate the cost saving when using AWS && if a company
                  perform a cost benefit analysis of migrating to AWS;
                </li>
              </ul>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                Migrating production workloads to the AWS cloud to reduce
                operational costs:
              </h3>
              <ul className="ml-5 text-xl font-normal text-gray-700 dark:text-gray-400">
                <li>Reduce overprovisioned instances</li>
                <li>Use managed services</li>
              </ul>
            </div>
            <div
              className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
              role="alert"
            >
              <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                AWS Pricing Calculator - compare the cost of running their IT
                infrastructure on-premises vs AWS Cloud. Good for a company to
                check whether or not it is cost-effective to migrate to the AWS
                Cloud
                <br />
                AWS Pricing Calculator lets you explore AWS services and create
                an estimate for the cost of your use cases on AWS
                <br />
                AWS Pricing Calculator can be used to forecast your AWS account
                usage and costs
                <br />
                AWS Compute Optimizer recommends optimal AWS resources for your
                workloads to reduce costs and improve performance by using
                machine learning to analyze historical utilization metrics.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
