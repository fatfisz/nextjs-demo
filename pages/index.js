import Head from 'next/head';

import Button from 'components/button';


export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>Index - Next.js demo</title>
        <link rel="stylesheet" href="/static/bootstrap.min.css" />
      </Head>

      <main className="container my-5">
        <p>
          Hello world
        </p>

        <Button>
          Plain old button
        </Button>
      </main>
    </div>
  );
}
