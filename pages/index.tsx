import type { NextPage } from 'next';
import Head from 'next/head';
import '../styles/styles.css';

const Home: NextPage = () => {
  const showBanner = process.env.FOOBAR || process.env.NEXT_PUBLIC_FOOBAR;

  return (
    <div className="container">
      <Head>
        <title>Red Circle Page</title>
        <meta name="description" content="A page with a big red circle" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        {showBanner && <div className="banner">Environment variable is set!</div>}
        <div className="red-circle"></div>
      </main>
    </div>
  );
};

export default Home;
