import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Welcome to my blog site</p>
        <p>
          This is an experimental website - were I’ll put my learnings {' '}
          <Link href="/posts/first-post">Post</Link>
        </p>
      </section>
    </Layout>
  );
}