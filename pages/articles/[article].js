import { useRouter } from 'next/router';

import routes from '../../lib/routes';

function Page({ params }) {
  const router = useRouter();
  return (
    <div>
      <h4>PARAMS:</h4>
      <pre>{JSON.stringify(params, null, 2)}</pre>
      <h4>ROUTER:</h4>
      <pre>{JSON.stringify(router, null, 2)}</pre>
    </div>
  );
}
export async function getStaticPaths() {
  const paths = routes
    .filter((r) => r.__typename === 'article')
    .map((item) => ({
      params: { article: item.slug },
      locale: item.locale,
    }));
  // console.log('paths', paths);
  return { paths, fallback: false };
}

export async function getStaticProps({ params, locale }) {
  console.log('article', params.article);
  return {
    props: {
      params,
      locale,
    },
  };
}
export default Page;
