import cx from 'classnames';
import Head from 'next/head';
import Link from 'next/link';


function WrappedLink({ children, isActive, ...props }) {
  return (
    <Link {...props}>
      <a className={cx('nav-item nav-link', { active: isActive })}>{children}</a>
    </Link>
  );
}

export default function Layout({ children, url }) {
  const { pathname } = url;

  return (
    <div>
      <Head>
        <title>Next.js demo</title>
        <link rel="stylesheet" href="/static/bootstrap.min.css" />
      </Head>

      <nav className="navbar navbar-toggleable navbar-inverse bg-inverse">
        <div className="container">
          <div className="navbar-nav">
            <WrappedLink href="/" isActive={pathname === '/'}>
              Index
            </WrappedLink>
            <WrappedLink href="/another" isActive={pathname === '/another'}>
              Another
            </WrappedLink>
          </div>
        </div>
      </nav>

      <main className="container my-5">
        {children}
      </main>
    </div>
  );
}
