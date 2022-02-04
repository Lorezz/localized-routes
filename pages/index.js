import Link from 'next/link';
import routes from '../lib/routes';
import prefixes from '../lib/prefixes';

export default function Home({ locale }) {
  return (
    <div>
      <main>
        <h1>INDEX {locale}</h1>
        <ul>
          {routes
            .filter((r) => r.locale === locale)
            .map((item) => {
              const prefix = prefixes[item.__typename][locale];
              const url = `${prefix}/${item.slug}`;
              return (
                <li key={item.slug}>
                  <Link href={url} locale={locale}>
                    <a>{url}</a>
                  </Link>
                </li>
              );
            })}
        </ul>
      </main>
    </div>
  );
}

export async function getStaticProps({ params, locale }) {
  console.log('PARAMS', params);
  console.log('LOCALE', locale);
  return {
    props: {
      locale,
    },
  };
}
