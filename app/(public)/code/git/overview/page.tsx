// "use client";

import { Metadata } from 'next';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import GitOverview from '@/app/components/Git/GitOverview/GitOverview';
// import { usePageDrawerDataCattoContext } from "../Utils/PageDrawerCattoDataProvider/PageDrawerCattoDataProvider";
// import { usePageDrawerDataCattoContext } from '@/app/components/Utils/PageDrawerCattoDataProvider/PageDrawerCattoDataProvider'
// import { usePageDrawerDataCattoContext } from '@/app/components/Utils/PageDrawerDataProviderCatto/PageDrawerCattoDataProvider';

export const metadata: Metadata = {
  title: 'Chris Catto Code Git Tutorial Overview',
  description: 'Chris Catto Code Git Tutorial Overview',
};

export default function Page() {
  // let { isPageDrawerOpen } = usePageDrawerDataCattoContext();
  // console.log('inside overview logging: isPageDrawerOpen === ', isPageDrawerOpen);
  // New Context approach YO:
  // let { isPageDrawerOpen } = usePageDrawerDataCattoContext();
  // console.log("------ Context isPageDrawerOpen2 === ", isPageDrawerOpen);

  return (
    <>
      <GitOverview />
    </>
  );
}
