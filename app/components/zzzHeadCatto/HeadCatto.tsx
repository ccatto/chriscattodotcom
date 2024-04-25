import Head from 'next/head';
import GA4 from '../Utils/GA4TagCatto/GA4TagCatto';
import GA4TagCatto from '../Utils/GA4TagCatto/GA4TagCatto';

// const SEOHeadCatto = ({ pageTitle, pageDescription}) => (

const HeadCatto = () => (
  <Head>
    <GA4TagCatto />
  </Head>
);

export default HeadCatto;
