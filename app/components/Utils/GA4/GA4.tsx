import Script from 'next/script'
const GTM_ID = 'GTM-1PMYR3ETW4';

const GA4TagCatto = () => {
    return (
      <>
        {/* <Script async src="https://www.googletagmanager.com/gtag/js?id=G-1PMYR3ETW4"/>
        <Script>
        window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-1PMYR3ETW4');
        </Script> */}
        <script>
            window.dataLayer = window.dataLayer || [];
        </script>
        <script>
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-1PMYR3ETW4');
        </script>
        {/* <Script id="google-tag-manager" strategy="afterInteractive">
            {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
            `}
        </Script> */}
      </>
    )
  }
  export default GA4TagCatto
