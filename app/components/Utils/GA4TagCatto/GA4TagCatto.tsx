import Script from 'next/script'
import { GTM_ID } from '@/app/constants/constants';
// const GTM_ID = 'G-1PMYR3ETW4';

const GA4TagCatto = () => {
    return (
        <>
            <Script>
                window.dataLayer = window.dataLayer || [];
            </Script>
            <Script id="google-tag-manager" strategy="afterInteractive">
                {`
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','${GTM_ID}');
                `}
            </Script>
        </>
    )
}
export default GA4TagCatto
