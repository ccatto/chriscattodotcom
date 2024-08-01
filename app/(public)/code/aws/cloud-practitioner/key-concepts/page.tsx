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
          <h3>This section is to document & assist in learning the AWS Cloud Practitioner exam</h3>
          <div>The <Link href="https://aws.amazon.com/certification/certified-cloud-practitioner/" target='_blank' className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>official AWS Cloud Practitioner exam page.</Link> Let us break this down into 4 sections.</div>


          ----------------  -----------------------
          -- 1. AWS General - Cloud Concepts    ---
          ----------------  -----------------------
          <div>
            <div>
              AWS Features:
              Global availability is a feature of AWS which will support an international company to provide low latency to customers
            </div>
            <div>
              AWS feature reducing the TCO (total cost of ownership)
              AWS Cloud benefit: ability to focus on revenue-generating activities;
              Elastic computing =&gt; capacity to increase & decreasing capacity with investment = 0; therefore this is related to cost.
            </div>
            <div>
              AWS characteristics making AWS cost effective for workload with dynamic user demand -
              Elasticity - makes feasible to add remove resources
              Pay-as-you-go pricing - pay only upon usage;
            </div>
            <div>
              AWS Config - Assess; audit & evaluate configurations resources.
              https://aws.amazon.com/config/
              Config is good to "Audit" change management of AWS resources
            </div>
            <div>
              Auto Scaling - enables compute capacity to adjust as loads change
              Load balancing - distributing load.
            </div>
            <div>
              Cloud - is a deployment models that enables customers to fully trade their capital IT expenses for operational expenses
            </div>
            <div>
              AWS Cloud feature - agility:
              Agility - "Quickly" deliver new functionality in an iterative manner minimizing the time to market
              an example of AWS agility is decreased acquisition time for new compute resources; ability to scale up & down during peek times;
            </div>
            <div>
              EC2 Auto Scaling groups help achieve high availability for a web app by automagically adding or replace instances across multiple Availability Zones.
              ASGs add & removed instances based on Demand.
              * can be used to run a "customer-managed relational database";
            </div>
            <div>
              An app has flexible start & end times. EC2 pricing model which is best would be "Spot Instances". https://aws.amazon.com/ec2/spot/
              Spot instances optimizes costs; run hyperscale workloads & builds sustainable solutions.
            </div>
            <div>
              https://aws.amazon.com/premiumsupport/technology/trusted-advisor/
              AWS Trusted Advisor - optimizes costs, improve performance, & address security gaps;
              AWS Trusted Advisor can be run & review the findings with will
              Determine if any security groups in AWS have been provisioned to allow unrestricted access for specific ports by
              Ex. 2 categories: Instance Usage & Performance
            </div>
            <div>
              Expanding into another region;
              We create resources in a new region;
            </div>
            <div>
              Regions & Availability Zones
              great white paper:
              https://docs.aws.amazon.com/whitepapers/latest/get-started-documentdb/aws-regions-and-availability-zones.html
              AWS availability zones are one or more discrete data centers; a minimum of 2 zones must be provisioned to achieve high availability
              AWS Regions are separate geographic areas. They are an example of global infrastructure
              ex. when choosing AWS region take into consideration: reduced latency to users (important for UX) & Data sovereignty compliance
            </div>
            <div>
              A highly available workload in AWS with a disaster recovery plan in case of a regional service interruption:
              run on 2 Availability Zones in one region & using another region for disaster recovery.
            </div>
            <div>
              AWS Well architected framework - change management steps to achieve reliability:
              AWS Certificate Manager is a service manages SSL/TLS.
            </div>
            <div>
              Architecture
              Design Principles:
              * ex. - using many instances in parallel is a good approach to transcoding a large number of video files.
              https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/design-principles.html
              - Implement Elasticity principle - ensure we scale up & down;
              ex. re-architecting a large monolithic app:
              * using individual components
              * design for scalability
              - Design for failure principle |
              * use fault-tolerant services;
              * use EBS elastic block store snapshots;
              * auto-scaling for auto-recovery
              * example of design for failure: distributing workloads across multiple availability zones
            </div>
          </div>
          ----------------  ----------------
          -- 2. Security & Compliance    ---
          ----------------  ----------------
          <div>
            <div>
              Security -
              Security-related services AWS offers:
              MFA physical tokens;
              Data Encryption is often done with help of KMS
            </div>
            <div>
              AWS Shared Responsibility model
              https://docs.aws.amazon.com/whitepapers/latest/aws-risk-and-compliance/shared-responsibility-model.html
              Customers responsible for security "IN" the cloud:
              * patching EC2 instances;
              * data encryption
              AWS responsible for security "OF" the cloud:
              * has sole responsibility for physical security; "Security of the Cloud"
              * AWS is responsible for protecting the infrastructure that runs all of the services offered in AWS Cloud;
              * updating firmware
            </div>
            <div>
              Awareness & training is a shared control between customer & AWS
            </div>
            <div>
              SECURITY
              Steps taken when conducting penetration testing on AWS?
              https://aws.amazon.com/security/penetration-testing/
              We request & wait for approval from AWS internal security team.
            </div>
          </div>

          ----------------  -----------------------
          -- 3. Services & Cloud technology     ---
          ----------------  -----------------------
          <div>
            <div>
              IAM - adds security & identity
              * MFA & enforcing pw strength & expiration
              IAM policies don't have access keys. The only way you will ever get an Access key is to create them from an IAM user.
            </div>
            <div>
              AWS Cloud Tail https://aws.amazon.com/cloudtrail/
              Track user activity & API usage.
            </div>
            <div>
              Amazon GuardDuty assists in threat protection
            </div>
            <div>
              Amazon RDS - relational Database Service advantage is
              it simplifies administration tasks.
              * used to host db's
            </div>
            <div>
              AWS CloudFormation - speed up cloud provisioning with infrastructure as code;
              https://aws.amazon.com/cloudformation/
            </div>
            <div>
              AWS CodeDeploy - automates software deployments
            </div>
            <div>
              AWS OpsWorks automate how servers are configured; deployed; & managed.
            </div>
            <div>
              Aurora - scale MySQL & PostgreSQL
              https://aws.amazon.com/rds/aurora/
            </div>
            <div>
              DynamoDB - NoSQL db's
            </div>
            <div>
              Redshift - big data as service / cloud data warehouse
              https://aws.amazon.com/pm/redshift/
            </div>
            <div>
              AWS KMS - Key Management Service
              https://aws.amazon.com/kms/
              create & control keys used to encrypt or digitally sign data;
            </div>
            <div>
              AWS Direct Connect - enables us to connect securely AWS to on-prem data center.
              ex. Direct connect can connect Amazon VPC to on-premises data center.
              https://aws.amazon.com/directconnect/
            </div>
            <div>
              AWS Lambda - runs code serverless without thinking of servers or clusters;
              https://aws.amazon.com/lambda/
            </div>
            <div>
              AWS Personal Health Dashboard -
              Provides alerts when an AWS event may impact a company's AWS resources. Provides alerts & remediation guidance when AWS is experiencing events.
              * ex. provides a customized view of the health of specific AWS services that power a customers workloads running on AWS.
            </div>
            <div>
              AWS Marketplace - search for software listing that runs on AWS
              https://aws.amazon.com/marketplace
            </div>
            <div>
              AWS managed services such as ElastiCache & RDS benefits are:
              they simplify patching & updating OS's.
            </div>
            <div>
              RDS & EFS are services for read/write of constantly changing data
              Amazon Elastic File System EFS https://aws.amazon.com/efs/
              * EFS provides simple scalable elastic NFS file system & can be used for on-premises including Linux
              Glacier is used for archiving | long term low cost storage;
            </div>
            <div>
              Amazon S3 - object storage build to retrieve any amount of data from anywhere
              lowest cost durable storage option for retaining database backups for immediate retrieval;
              https://aws.amazon.com/s3/
              * can be used for hosting static websites; https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html
              * can be used for serving large amounts of online video content with lowest possible latency
            </div>
            <div>
              AWS EBS - Elastic Block Store - high performance block storage
              https://aws.amazon.com/ebs/
              is a device you can mount onto EC2 it is a block storage so you format it; we are able to chose which type of file we want.
            </div>
            <div>
              AWS CLI - to access with IAM we utilize access keys;
              https://docs.aws.amazon.com/cli/v1/userguide/cli-authentication-user.html
            </div>
            <div>
              AWS CloudWatch - observe & monitor resources & apps
              ex. a metrics repo with customizable notification thresholds & channels
              CloudWatch logs: advantages are real-time monitoring & adjustable retention
              https://aws.amazon.com/cloudwatch/
              https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html
            </div>
            <div>
              Route 53 - DNS reliable & cost effective way to route end users to apps;
            </div>
            <div>
              AWS Redshift - scalable data warehouse solution | power data driven decisions with the best price-performance cloud data warehouse
              https://aws.amazon.com/redshift/
            </div>
            <div>
              Elastic Load Balancing - automatically distributes incoming app traffic across multiple targets such as EC2 instances; containers; IPs || Lambda functions.
            </div>
            <div>
              AWS Services
              ways for customer to interact:
              * AWS Management console - GUI
              * CLI control from command line
              * SDKs access via many programming languages
            </div>
            <div>
              AWS CloudFront - CDN service build for perf; security & developers
              * can be used to serve large amounts of online video with lowest possible latency
              https://aws.amazon.com/cloudfront/
            </div>
            <div>
              AWS Professional Services is an AWS team that can assist customers with accelerating adoption through paid engagements.
              * provides architect prototypes & solutions tailers to the customer.
              https://aws.amazon.com/professional-services/
            </div>
            <div>
              AWS Partner Network Consulting Partners is an org that is focused on assisting customers with advice; professional services when moving to AWS.
              AWS Partner Network Technology Partners refers to a company that is developing their own product/service.
            </div>
          </div>

          ----------------  -----------------------
          -- 4. Billing; Pricing & Services     ---
          ----------------  -----------------------
          <div>
            <div>
              AWS Support Plans:
              ex. Business - minimum that allows one hour response time
              https://aws.amazon.com/premiumsupport/plans/
              * Enterprise
              * Business
              * Developer
              * Basic
            </div>
            <div>
              EC2 Pricing models:
              On-Demand instances in EC2 Pricing model is MOST cost efficient for an uninterruptible workload that runs once a year for 24 hours
              Reserved instances are not cheap; save up to 75%
              Spot instances:
              * can be interrupted;
              * can save up to 90%;
              * adjusts based on demand;
            </div>
            <div>
              AWS Artifact - access AWS & ISV security & compliance reports
              https://aws.amazon.com/artifact/
              ex. we can download compliance & certification reports;
            </div>
            <div>
              BILLING
              AWS Organizations - centrally manage environments & multiple AWS accounts
              https://aws.amazon.com/organizations/
              ex. if customer is using multiple AWS accounts with separate billing to take advantage of volume discounts
            </div>
            <div>
              Hosting models:
              Dedicated hosts ~= physical isolation;
            </div>
            <div>
              ex. Cost allocation tags is good to track & categorize spending?
              https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html
              ex. Volume pricing qualifications is an advantage of consolidated billing;
            </div>
          </div>
        </div>
        {/* <hr className="m-3" /> */}
      </div>
    </>
  );
}
