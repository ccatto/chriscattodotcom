import Script from 'next/script'
import { GTM_ID } from '@/app/constants/constants';
// const GTM_ID = 'G-1PMYR3ETW4';
import { GoogleAnalytics } from '@next/third-parties/google';

const GA4TagCatto = () => {
  return (
    <GoogleAnalytics gaId={GTM_ID} />
  )
}
export default GA4TagCatto
