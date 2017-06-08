import Head from 'next/head';

import Button from 'components/button';
import Layout from 'components/layout';


export default function IndexPage(props) {
  return (
    <Layout {...props}>
      <Head>
        <title>Index - Next.js demo</title>
      </Head>

      <p className="special">
        Hello world
      </p>

      <Button>
        Plain old button
      </Button>

      <style jsx>{`
        .special {
          font-style: italic;
        }
      `}</style>
    </Layout>
  );
}
