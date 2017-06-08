import Head from 'next/head';


export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>Index - Next.js demo</title>
        <link rel="stylesheet" href="/static/bootstrap.min.css" />
      </Head>

      <main className="container my-5">
        Hello world
      </main>
    </div>
  );
}
