import Head from 'next/head';


export default function AnotherPage() {
  return (
    <div>
      <Head>
        <title>Another - Next.js demo</title>
        <link rel="stylesheet" href="/static/bootstrap.min.css" />
      </Head>

      <main className="container my-5">
        This is another page
      </main>
    </div>
  );
}
