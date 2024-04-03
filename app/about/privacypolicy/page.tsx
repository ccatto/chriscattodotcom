import PrivacyPolicy from "@/app/components/Utils/privacypolicy/privacypolicy";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chris Catto Privacy Policy',
  description: 'Chris Catto Privacy Policy all the lawyers legal verbiage'
}

export default function Page() {
  return (
    <>
      <PrivacyPolicy/>
    </>
  );
}