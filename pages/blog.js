import fetch from 'isomorphic-fetch';
import ErrorPage from 'next/error';
import Head from 'next/head';
import Link from 'next/link';

import Post from 'components/post';
import PostList from 'components/post-list';
import { serverUrl } from 'config';


export default function Blog({ post, posts, ...props }) {
  if (posts) {
    return <PostList posts={posts} {...props} />;
  } else if (post) {
    return <Post {...post} {...props} />;
  } else {
    return <ErrorPage statusCode={404} />;
  }
}

Blog.getInitialProps = async ({ query }) => {
  const props = {};
  let response;

  try {
    if (query.id) {
      response = await fetch(`${serverUrl}/blog/${query.id}`);
      if (response.status === 404) {
        return props;
      }
      props.post = await response.json();
    } else {
      response = await fetch(`${serverUrl}/blog`);
      props.posts = await response.json();
    }
  } catch (error) {
    console.error(error);
    throw new Error('Couldn\'t get the data :(');
  }

  return props;
};
