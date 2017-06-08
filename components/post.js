import Head from 'next/head';

import Layout from 'components/layout';


export default function Blog({ title, text, ...props }) {
  return (
    <Layout {...props}>
      <Head>
        <title>{title} - Next.js demo</title>
      </Head>

      <h1>{title}</h1>

      {text}
    </Layout>
  );
}
