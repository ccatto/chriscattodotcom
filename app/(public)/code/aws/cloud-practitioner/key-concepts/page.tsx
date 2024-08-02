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
          -- 1. AWS General - CloudConcepts
          <br /> --- ---------------- -----------------------
          <br />
          <div>
            <div>
              AWS Features: Global availability is a feature of AWS which will
              support an international company to provide low latency to
              customers
            </div>
            <div>
              AWS feature reducing the TCO (total cost of ownership)
              <br />
              AWS Cloud benefit:
              <br /> ability to focus on revenue-generating activities;
              <br /> Reduce TCO total code of ownership & OPEX operational
              expenditure
              <br /> benefits: Elasticity & Agility; the most celebrated benefit is Elasticity since we can expand services as traffic grows;
              <br />
              Elastic computing =&gt; capacity to increase & decreasing capacity
              with investment = 0; therefore this is related to cost.
              <br />

            </div>
            <div>
              AWS characteristics making AWS cost effective for workload with
              dynamic user demand
              <br />
              - Elasticity - makes feasible to add remove resources
              <br />

              <br />
              Pay-as-you-go pricing - pay only upon usage;
            </div>
            <div>
              AWS shorten the time to provision IT resources by ?? programmatically provision existing resources.
            </div>
            <div>
              AWS Config - Assess; audit & evaluate configurations resources.
              <br />
              <Link
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                href="https://aws.amazon.com/config/"
                target="_blank"
              >
                Amazon Config
              </Link>
              <br />
              Config is good to "Audit" change management of AWS resources
            </div>
            <div>
              Auto Scaling - enables compute capacity to adjust as loads change
              <br />
              Load balancing - distributing load.
            </div>
            <div>
              Cloud - is a deployment models that enables customers to fully
              trade their capital IT expenses for operational expenses
            </div>
            <div>
              AWS Cloud feature - agility:
              <br />
              Agility - "Quickly" deliver new functionality in an iterative
              manner minimizing the time to market an example of AWS agility is
              decreased acquisition time for new compute resources;
              <br />
              ability to scale up & down during peek times;
            </div>
            <div>
              EC2 Auto Scaling groups help achieve high availability for a web
              app by automagically adding or replace instances across multiple
              Availability Zones. ASGs add & removed instances based on Demand.
              * can be used to run a "customer-managed relational database";
            </div>
            <div>
              AMI Amazon Machine Image - EC2 to launch a pre-configured EC2
              select a pre-configured templated AMI Amzaon Machine Image
              <Link
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html"
                target="_blank"
              >
                AMIs Amazon Machine Images
              </Link>
            </div>
            <div>
              <Link
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                href="https://aws.amazon.com/premiumsupport/technology/trusted-advisor/"
                target="_blank"
              >
                AWS Trusted Advisor
              </Link>
              <br />
              AWS Trusted Advisor - optimizes costs, improve performance, &
              address security gaps;
              <br />
              AWS Trusted Advisor can be run & review the findings with will
              Determine if any security groups in AWS have been provisioned to
              allow unrestricted access for specific ports by Ex. 2 categories:
              Instance Usage & Performance
              <br />
              AWS Trusted Advisor monitors & provides advises on
              <ul>
                <li>
                  Compliance w/ security best practices
                </li>
                <li>
                  Cost optimization
                </li>
              </ul>
              <br />
              Trusted Advisor will identify if unrestricted access to a resource has been allowed by a s "Security Group"
              <br/>
              Use Trusted Advisor if a Security officer wants a list of any potential vulnerabilities in EC2 
            </div>
            <div>
              Expanding into another region; We create resources in a new
              region;
            </div>
            <div>
              Regions & Availability Zones great white paper:
              <Link
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                href="https://docs.aws.amazon.com/whitepapers/latest/get-started-documentdb/aws-regions-and-availability-zones.html"
                target="_blank"
              >
                AWS Regions and Availability Zones
              </Link>
              AWS availability zones are one or more discrete data centers; a
              minimum of 2 zones must be provisioned to achieve high
              availability AWS Regions are separate geographic areas. They are
              an example of global infrastructure ex. when choosing AWS region
              take into consideration: reduced latency to users (important for
              UX) & Data sovereignty compliance
              <br />
              Availability Zones are interconnected with a region for low latency;
              <br />
            </div>
            <div>
              A highly available workload in AWS with a disaster recovery plan
              in case of a regional service interruption: run on 2 Availability
              Zones in one region & using another region for disaster recovery.
            </div>
            <div>
              AWS Well architected framework - change management steps to
              achieve reliability: AWS Certificate Manager is a service manages
              SSL/TLS.
            </div>
            <div>
              Architecture Design Principles:
              <br />
              * ex. - using many instances in parallel is a good approach to transcoding a large number of video files.
              <Link
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                href="https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/design-principles.html"
                target="_blank"
              >
                AWS Design principles
              </Link>
              - Implement Elasticity principle - ensure we scale up & down; ex.
              re-architecting a large monolithic app: * using individual
              components
              * Elasticity principle - "growth in users"
              <br /> * 2 concepts of elasticity: scaling # of EC2 instances based on traffic && resizing RDS instances as business needs change;
              <br />
              * design for scalability - Design for failure principle
              |
              <br />
              * use fault-tolerant services; * use EBS elastic block store
              snapshots; * auto-scaling for auto-recovery * example of design
              for failure: distributing workloads across multiple availability
              zones
              <br />
              Implement loose coupling - between services can also be done by asynchronous integration.
              <br />
              use multiple availability zones
              <br />
              Design principles to improve operational workloads: 
              <ul>
                <li>
                  loose coupling
                </li>
                <li>
                  disposable resources
                </li>
              </ul>
            </div>
            <div>
              Multi-site active-active is the DR disaster recovery which offers the lowest probability of down time; aka hot standby
            </div>
            <div>
              Internet Gateway - is an allows inbound traffic from internet to access a VPC;
              <Link
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html"
                target="_blank">
                AWS Enable VPC internet access using internet gateways
              </Link>
            </div>
          </div>
          ---------------- ----------------
          <br />
          -- 2. Security & Compliance ---
          <br />
          ---------------- ----------------
          <div>
            <div>
              Security - Security-related services AWS offers: MFA physical
              tokens; Data Encryption is often done with help of KMS
            </div>
            <div>
              AWS Shared Responsibility model
              <Link
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                href="https://docs.aws.amazon.com/whitepapers/latest/aws-risk-and-compliance/shared-responsibility-model.html"
                target="_blank"
              >
                Shared responsibility model
              </Link>
              Customers responsible for security "IN" the cloud:
              <br />
              * patching EC2 instances;
              <br />
              * data encryption - ensure that app data is encrypted at rest && Encrypting data in transit & at rest
              <br />
              * ensure users have security training
              <br />
              * penetration tests
              <br />
              Managing VPC network access control lists to secure apps
              <br />
              Maintaining server-side Encryption
              <br />
              Using RDS customer is responsible for controlling network access through security groups;
              <br />
              ------------------------------
              <br />
              AWS responsible for security "OF" the cloud:
              <ul>
                <li>
                  * has sole responsibility for physical security; "Security of the
                  Cloud"
                </li>
                <li>
                  * AWS is responsible for protecting the infrastructure that
                  runs all of the services offered in AWS Cloud; * updating firmware
                </li>
                <li>
                  auditing physical data center assets
                </li>
                <li>
                  patching db software
                </li>
                <li>
                  backing up DBs
                </li>
                <li>
                  securing the EC2 Hypervisor & physical controls
                </li>
                <li>
                  edge location management
                </li>
              </ul>
              <br />
              Shared responsibility-
              <ul>
                <li>
                  Awareness & training
                </li>
                <li>
                  Configuration Management
                </li>
              </ul>
            </div>
            <div>
              2 security measures to protect AWS accounts:
              * grant least privilege access to IAM users;
              * Activate MFA
            </div>
            <div>
              Awareness & training is a shared control between customer & AWS
            </div>
            <div>
              SECURITY Steps taken when conducting penetration testing on AWS?
              <Link
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                href="https://aws.amazon.com/security/penetration-testing/"
                target="_blank"
              >
                Penetration Testing
              </Link>
              We request & wait for approval from AWS internal security team.
            </div>
            <div>
              Security Groups act as a virtual firewall for the Amazon EC2 instance;
            </div>
          </div>
          ---------------- -----------------------
          <br />
          -- 3. Services & Cloud technology <br />
          --- ---------------- -----------------------
          <div>
            <div>
              IAM - Identity & Access Management
              <br />
              adds security & identity * MFA & enforcing pw strength &
              expiration IAM policies don't have access keys. The only way you
              will ever get an Access key is to create them from an IAM user.
              <br />
              Apply an IAM policy to an IAM group - apply common access controls
              to large set of use
              <br />
              * IAM groups able to administer multiple users
              <br />
              IAM policies can limit S3 access to specific users.
            </div>
            <div>
              EC2 -
              <br />
              * can be used to manually launch "instances" bases on resource
              requirements
              <br />
              can be used to host MS SQL Server
              <br />
            </div>
            <div>
              AWS Cloud Tail
              <Link
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                href="https://aws.amazon.com/cloudtrail/"
                target="_blank"
              >
                AWS CloudTrail
              </Link>
              Track user activity & API usage.
              <br />
              a service to gather info about AWS account activity
            </div>
            <div>Amazon GuardDuty assists in threat protection</div>
            <div>
              Amazon RDS - relational Database Service advantage is it
              <br />
              simplifies administration tasks.
              <br />
              * used to host db's
              <br />
              AWS Manages the maintenance of the OS
              <br />
              MS SQL Server - RDS can be used to host
              <br/>
              https://aws.amazon.com/rds/features/read-replicas/
              read replicas - Amazon RDS Read Replicas provide enhanced performance and durability for Amazon RDS database (DB) instance
            </div>
            <div>
              AWS CloudFormation - speed up cloud provisioning with
              infrastructure as code;
              <Link
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                href="https://aws.amazon.com/cloudformation/"
                target="_blank"
              >
                AWS CloudFormation
              </Link>
            </div>
            <div>AWS CodeDeploy - automates software deployments
            https://aws.amazon.com/codedeploy/
            Automate code deployment to maintain application uptime
            </div>
            <div>
              AWS OpsWorks automate how servers are configured; deployed; &
              managed.
            </div>
            <div>
              Aurora - scale MySQL & PostgreSQL
              <Link
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                href="https://aws.amazon.com/rds/aurora/"
                target="_blank"
              >
                AWS Aurora
              </Link>
            </div>
            <div>DynamoDB - NoSQL db's</div>
            <div>
              Redshift - big data as service / cloud data warehouse
              <Link
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                href="https://aws.amazon.com/pm/redshift/"
                target="_blank"
              >
                AWS Redshift
              </Link>
            </div>
            <div>
              AWS KMS - Key Management Service https://aws.amazon.com/kms/
              create & control keys used to encrypt or digitally sign data;
            </div>
            <div>
              AWS Direct Connect - enables us to connect securely AWS to on-prem
              data center. ex. Direct connect can connect Amazon VPC to
              on-premises data center. https://aws.amazon.com/directconnect/
            </div>
            <div>
              AWS VPC
              https://aws.amazon.com/vpc/
              2 features that can be configured with VPC are:
              <br />
              * Security Groups
              <br />
              * subnets
            </div>
            <div>
              AWS Lambda - runs code serverless without thinking of servers or
              clusters; https://aws.amazon.com/lambda/
              <br />
              charged by - users pay based on the number of requests & consumed compute resources.
            </div>
            <div>
              Amazon Step Functions; Amazon DynamoDB & Amazon SNS - serverless platform;
            </div>
            <div>
              AWS Personal Health Dashboard - Provides alerts when an AWS event
              may impact a company's AWS resources. Provides alerts &
              remediation guidance when AWS is experiencing events.
              <br/>
               * ex.
              provides a customized view of the health of specific AWS services
              that power a customers workloads running on AWS.
            </div>
            <div>
              AWS Marketplace - search for software listing that runs on AWS
              <Link
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                href="https://aws.amazon.com/marketplace"
                target="_blank"
              >
                AWS Marketplace
              </Link>
            </div>
            <div>
              AWS managed services such as ElastiCache & RDS benefits are: they
              simplify patching & updating OS's.
            </div>
            <div>
              RDS & EFS are services for read/write of constantly changing data
              Amazon Elastic File System EFS
              <Link
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                href="https://aws.amazon.com/efs/"
                target="_blank"
              >
                EFS - Amazon Elastic File System
              </Link>
              * EFS provides simple scalable elastic NFS file system & can be
              used for on-premises including Linux Glacier is used for archiving
              | long term low cost storage;
            </div>
            <div>
              Amazon S3 - object storage build to retrieve any amount of data
              from anywhere lowest cost durable storage option for retaining
              database backups for immediate retrieval;
              <Link
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                href="https://aws.amazon.com/s3/"
                target="_blank"
              >
                AWS S3
              </Link>
              * can be used for hosting static websites;
              <Link
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html"
                target="_blank"
              >
                Hosting a static website using Amazon S3
              </Link>
              * can be used for serving large amounts of online video content
              with lowest possible latency
            </div>
            <div>
              AWS EBS - Elastic Block Store - high performance block storage
              <Link
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                href="https://aws.amazon.com/ebs/"
                target="_blank"
              >
                EBS - Amazon Elastic Block Store
              </Link>
              is a device you can mount onto EC2 it is a block storage so you
              format it; we are able to chose which type of file we want.
            </div>
            <div>
              AWS CLI - to access with IAM we utilize access keys;
              <Link
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                href="https://docs.aws.amazon.com/cli/v1/userguide/cli-authentication-user.html"
                target="_blank"
              >
                Authenticate with IAM user credentials
              </Link>
            </div>
            <div>
              AWS CloudWatch - observe & monitor resources & apps ex. a metrics
              repo with customizable notification thresholds & channels
              CloudWatch logs: advantages are real-time monitoring & adjustable
              retention
              <Link
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                href="https://aws.amazon.com/cloudwatch/"
                target="_blank"
              >
                Amazon CloudWatch
              </Link>
              <Link
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html"
                target="_blank"
              >
                Amazon CloudWatch Logs
              </Link>
              CloudWatch to gain system-wide visibility into resource utilization; app perf & operational health
            </div>
            <div>
              Route 53 - DNS reliable & cost effective way to route end users to
              apps; Route 53 is considered global not regional
            </div>
            <div>
              AWS Redshift - scalable data warehouse solution | power data
              driven decisions with the best price-performance cloud data
              warehouse
              <Link
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                href="https://aws.amazon.com/redshift/"
                target="_blank"
              >
                AWS Redshift
              </Link>
            </div>
            <div>
              Elastic Load Balancing ELB - Distribute network traffic to improve application scalability
              https://aws.amazon.com/elasticloadbalancing/
              <br/>
              automatically distributes incoming app
              traffic across multiple targets such as EC2 instances; 
              containers;
              IPs || Lambda functions.
            </div>
            <div>
              AWS Services ways for customer to interact: * AWS Management
              console - GUI * CLI control from command line * SDKs access via
              many programming languages
            </div>
            <div>
              AWS CloudFront - CDN service build for perf; security & developers
              * can be used to serve large amounts of online video with lowest
              possible latency
              <Link
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                href="https://aws.amazon.com/cloudfront/"
                target="_blank"
              >
                AWS CloudFront
              </Link>
              <br />
              CloudFront is global not regional.
              <br />
              CloudFront delivers content worldwide through data centers called "Edge Locations"
                <br/>
                CloudFront decreases latency & increases perf
            </div>
            <div>
              AWS Professional Services is an AWS team that can assist customers
              with accelerating adoption through paid engagements. * provides
              architect prototypes & solutions tailers to the customer.
              <Link
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                href="https://aws.amazon.com/professional-services/"
                target="_blank"
              >
                AWS Professional Services
              </Link>
            </div>
            <div>
              AWS Partner Network Consulting Partners is an org that is focused
              on assisting customers with advice; professional services when
              moving to AWS. AWS Partner Network Technology Partners refers to a
              company that is developing their own product/service.
            </div>
            <div>
              AWS Storage Gateway - service provides a hybrid storage service that enables on-premises app to seamlessly use cloud storage;
              https://aws.amazon.com/storagegateway/
            </div>
            <div>
              Amazon ElastiCache
              https://aws.amazon.com/pm/elasticache
              Storing common database query results which helps alleviate db access load.
              <br/>
              decreases latency & increase perf;
            </div>
            <div>
              AWS Quick start reference deployments - help deploy popular IT solution & start using it immediately
            </div>
            <div>
              AWS Directory Service - SSO - AWS SSO is an service that lets you access from MS AD;
            </div>
            <div>
              AWS Compliance Program -
              * It assures customers that AWS is maintaining physical security & data protection
              <br />
              * it verifies that hosted workloads are automatically compliant with the controls of supported compliance frameworks;

            </div>
            <div>
              AWS Glue is an ETL service to make it easy to prepare data for analytics
              https://aws.amazon.com/glue/
            </div>
            <div>
              Amazon GuardDuty is a threat detection service.
            </div>
            <div>
              Help decrease network latency for a globally dispersed user base: 2 services || features:
              <ul>
                <li>
                  AWS CloudFront
                </li>
                <li>
                  AWS Global Accelerator - improves performance for a wide range of app
                </li>
              </ul>
            </div>
            <div>
              AWS QuickSight is a BI dashboard service;
              https://docs.aws.amazon.com/quicksight/latest/user/welcome.html
            </div>
            <div>
              AWS Snowball is a service that will allow transfer of large data from on-prem to cloud;
              https://aws.amazon.com/snowball/
            </div>
            <div>
              AWS Outposts is a service that offers same AWS service; infrastructure APIS to on-prem hybrid 
              https://aws.amazon.com/outposts/
            </div>
            <div>
              Amazon Inspector - Automated & continual vulnerability management at scale
              https://aws.amazon.com/inspector
            </div>
            <div>
              AWS Elastic Beanstalk - 
              Deploy and scale web applications
              https://aws.amazon.com/elasticbeanstalk


            </div>
            <div>
              AWS KMS - Key Management Service
              Create and control keys used to encrypt or digitally sign your data
              https://aws.amazon.com/kms/
            </div>
            <div>
            https://aws.amazon.com/pm/eventbridge
            Amazon EventBridge - Build event-driven applications at scale across AWS, existing systems, or SaaS applications
            </div>
            <div>
              AWS Fargate - Serverless compute for containers
              https://aws.amazon.com/fargate/
            </div>
          </div>
          ---------------- -----------------------
          <br />
          -- 4. Billing; Pricing & Services
          <br />
          --- ---------------- -----------------------
          <div>
            <div>
              AWS Support Plans:
              <br />
              ex. Business - minimum that allows one hour
              response time
              <br />
              Minimum plan that provides technical support phone calls. 24/7 phone; email & chat to cloud support engineers.
              <br />
              <Link
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                href="https://aws.amazon.com/premiumsupport/plans/"
                target="_blank"
              >
                AWS Support Plans
              </Link>
              * Enterprise * Business * Developer * Basic
              <br />
              Enterprise - includes a dedicated Technical Account Manger
              <br />
              includes Infrastructure Event Management without additional costs.
              <br />
              AWS Concierge support team is the primary contact for billing & account inquires for Enterprise level support.
            </div>
            <div>
              EC2 Pricing models:
              <br />
              -- On-Demand instances in EC2 Pricing model is MOST cost efficient
              for an uninterruptible workload that runs once a year for 24 hours
              <br />
              -- Reserved instances are not cheap;
              <br /> save up to 75%
              <br /> good for 3 yrs non-interruptible
              <br />
              Amazon EC2 Reserved Instance Utilization Report provides ability to share the cost benefits of Reserved instances across AWS accounts;
              <br />
              -- Spot instances:
              <br />
              * can be interrupted; spot = interruptible jobs
              <br />
              * can save up to 90%;
              <br />* adjusts based on demand;
              <br />
              When there is flexibility in when an app needs to run = a spot benefit
              <br />
              Spot instances will interrupt a running EC2 instance if capacity becomes temp unavailable;
              -------------
              <br />
              On Demand is: pay for what you use - 1 benefit of On-demand EC2 pricing is paying only for time used.
            </div>
            <div>
              An app has flexible start & end times. EC2 pricing model which is
              best would be "Spot Instances".
              <br />
              <Link
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                href="https://aws.amazon.com/ec2/spot/"
                target="_blank"
              >
                Amazon EC2 Spot Instances
              </Link>
              <br />
              Spot instances optimizes costs; run hyperscale workloads & builds
              sustainable solutions.
            </div>
            <div>
              Optimize EC2 costs by:
              <ul>
                <li>
                  Implementing Auto Scaling groups to add & remove instances based on  demand;
                </li>
                <li>
                  Purchasing Reserved Instances
                </li>
              </ul>
            </div>
            <div>
              AWS Artifact - access AWS & ISV security & compliance reports
              <Link
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                href="https://aws.amazon.com/artifact/"
                target="_blank"
              >
                AWS Artifact
              </Link>
              <br />
              ex. we can download compliance & certification reports;
            </div>
            <div>
              BILLING AWS Organizations - centrally manage environments &
              multiple AWS accounts
              <Link
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                href="https://aws.amazon.com/organizations/"
                target="_blank"
              >
                AWS Organizations
              </Link>
              ex. if customer is using multiple AWS accounts with separate
              billing to take advantage of volume discounts
              <br />
              ex. if each company dept. has own AWS account to consolidate billing we could create an AWS Organization & invite the others.
            </div>
            <div>Hosting models: Dedicated hosts ~= physical isolation;</div>
            <div>
              ex. Cost allocation tags is good to track & categorize spending?
              <Link
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html"
                target="_blank"
              >
                Cost Allocation Tags
              </Link>
              ex. Volume pricing qualifications is an advantage of consolidated
              billing;
            </div>
            <div>
              AWS Cost & Usage tool give most granular insight into cost &
              usage.
              <Link
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                href="https://aws.amazon.com/aws-cost-management/aws-cost-and-usage-reporting/"
                target="_blank"
              >
                AWS Cost & Usage tool
              </Link>
            </div>
            <div>
              Massive economies of scale - customers can benefit - periodic price reductions as the result of Amazon's operational efficiencies.
              <br />
              The massive scale at which AWS operates also benefits customers - ever increasing economies of scale enables them to continually reduce the pricing of compute and storage services.
            </div>
            <div>
              Moving from on-premises data center to AWS cloud - one financial difference will be:
              * moving from upfront Capital Expense CAPEX to variable operational expense OPEX - trade CapEx for OpEx
            </div>
            <div>
              AWS simple Monthly Calculator - can be used to forecast the future costs of running a new web app. It's a new app so the cost explorer is used to predict cost.
              <br/>
              AWS Cost Explorer
            </div>
            <div>
              TOC total cost of ownership from on-prem vs AWS cloud 2 expenses considered are:
              * storage hardware
              * physical servers
              <br />
              2 factors doing TOC total cost of ownership when moving from on-premises to AWS cloud:
              <br />
              * power consumption
              <br />
              * Labor costs to replace old servers
              <br />
              AWS Total Cost of Ownership (TCO) calculator allows us to estimate the cost saving when using AWS && if a company perform a cost benefit analysis of migrating to AWS;
            </div>
            <div>
              Migrating production workloads to the AWS cloud to reduce operational costs:
              <ul>
                <li>
                  Reduce overprovisioned instances
                </li>
                <li>
                  Use managed services
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <hr className="m-3" /> */}
      </div>
    </>
  );
}

<Link
  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
  href=""
  target="_blank">

</Link>
