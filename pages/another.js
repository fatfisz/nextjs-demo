import Head from 'next/head';

import Layout from 'components/layout';


export default function AnotherPage(props) {
  return (
    <Layout {...props}>
      <Head>
        <title>Another - Next.js demo</title>
      </Head>

      This is another page
    </Layout>
  );
}
