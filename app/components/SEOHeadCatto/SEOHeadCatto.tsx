import Head from "next/head";
import GA4 from "../Utils/GA4/GA4";

// const SEOHeadCatto = ({ pageTitle, pageDescription}) => (
const SEOHeadCatto = () => (
    <Head>
        {/* <GA4/> */}
        {/* <title>{pageTitle}</title> */}
        {/* <meta name="description" content={pageDescription} /> */}
        <title>ChrisCatto.com</title>
        <meta name="description" content={"Chris Catto Personal Website"} />
    </Head>
);

export default SEOHeadCatto;