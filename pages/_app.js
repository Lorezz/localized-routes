import Link from 'next/link';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div>
        {['en', 'it'].map((locale) => (
          <span className="nav" key={locale}>
            <Link href={'/'} locale={locale}>
              <a>{locale}</a>
            </Link>
          </span>
        ))}
        <hr />
      </div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
