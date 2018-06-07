import React from 'react'
import PropTypes from 'prop-types'
import { ApolloProvider } from 'react-apollo';
import Helmet from 'react-helmet'
import ApolloClient from 'apollo-boost';

import './index.css'

const client = new ApolloClient({ uri: '/gql' });

const Layout = ({ children, data }) => (
  <ApolloProvider client={client}>
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <div>
        {children()}
      </div>
    </div>
  </ApolloProvider>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
