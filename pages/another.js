import Head from 'next/head';

import Layout from 'components/layout';


export default function AnotherPage({ from, ...props }) {
  return (
    <Layout {...props}>
      <Head>
        <title>Another - Next.js demo</title>
      </Head>

      This is another page from the {from}
    </Layout>
  );
}

AnotherPage.getInitialProps = ({ req }) => {
  return {
    from: req ? 'server' : 'client',
  };
};
