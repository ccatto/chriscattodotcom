import { Metadata } from 'next';
import JSOverview from '@/app/components/JavaScript/JSOverview/JSOverview';

export const metadata: Metadata = {
  title: 'Chris Catto Code JavaScript Tutorial Overview',
  description: 'Chris Catto Code JavaScript Tutorial Overview',
};

export default function Page() {
  return (
    <>
      <JSOverview />
    </>
  );
}
