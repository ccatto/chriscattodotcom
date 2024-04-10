import Script from 'next/script'
import { GTM_ID } from '@/app/constants/constants';
// const GTM_ID = 'G-1PMYR3ETW4';
import { GoogleAnalytics } from '@next/third-parties/google'


// declare global {
//   interface Window {
//     dataLayer: any[];
//     gtag: (...args: any[]) => void;
//   }
// }

// const initializeGoogleAnalytics = (): void => {
//   window.dataLayer = window.dataLayer || [];
//   window.gtag = function gtag() {
//     window.dataLayer.push(arguments);
//   };
//   window.gtag('js', new Date());
//   window.gtag('config', 'G-1PMYR3ETW4');
// };



// const loadGoogleTagManagerScript = (): void => {
//   const script = document.createElement('script');
//   script.src = 'https://www.googletagmanager.com/gtag/js?id=G-1PMYR3ETW4';
//   script.async = true;
//   document.head.appendChild(script);
// };

// Call the functions to initialize GA4
// loadGoogleTagManagerScript();
// initializeGoogleAnalytics();

const GA4TagCatto = () => {
  return <GoogleAnalytics gaId="G-1PMYR3ETW4" />
    // return (
        // <>
             {/* <Script>
                window.dataLayer = window.dataLayer || [];
            </Script> */}
            {/*
            <Script id="google-tag-manager" strategy="afterInteractive">
                {`
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','${GTM_ID}');
                `}
            </Script> */}
            {/* <Script async src="https://www.googletagmanager.com/gtag/js?id=G-1PMYR3ETW4"></Script> */}
{/* <Script>
// In your TypeScript file, import the necessary modules


// Google tag (gtag.js)


// Load Google Tag Manager script asynchronously

</Script> */}
        // </>
    // )
}
export default GA4TagCatto
