import Head from 'next/head';
import Link from 'next/link';

import Layout from 'components/layout';


export default function PostList({ posts, ...props }) {
  return (
    <Layout {...props}>
      <Head>
        <title>Blog - Next.js demo</title>
      </Head>

      {posts.map(({ id, title }) =>
        <p key={id}>
          <Link
            href={{ pathname: '/blog', query: { id } }}
            as={`/blog/${id}`}
          >
            <a>{title}</a>
          </Link>
        </p>
      )}
    </Layout>
  );
}
