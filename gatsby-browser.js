const React = require('react');
const Layout = require('./src/Layout').default;

const LayoutRenderer = ({ PageComponent, pageProps }) => {
  return (
    <Layout>
      <PageComponent {...pageProps} />
    </Layout>
  );
};

export const replaceComponentRenderer = ({ props: { pageResources, ...pageProps } }) => (
  <LayoutRenderer PageComponent={pageResources.component} pageProps={pageProps} />
);
