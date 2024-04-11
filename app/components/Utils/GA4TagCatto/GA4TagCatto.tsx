import { GTM_ID } from '@/app/constants/constants';
import { GoogleAnalytics } from '@next/third-parties/google';
// const GTM_ID = 'G-1PMYR3ETW4';

const GA4TagCatto = () => {
  return (
    <GoogleAnalytics gaId={GTM_ID} />
  )
}
export default GA4TagCatto
