import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'

import '../styles/index.css'
import THEME from '../styles/theme'
import Header from './header/Header'
import Main from './Main'

const Container = styled.div`
    color: ${props => props.theme.primaryText};
    margin: 0;
`

const Layout = ({ children }) => (
    <StaticQuery
        query={graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `}
        render={data => (
            <ThemeProvider theme={THEME}>
                <Container>
                    <Helmet
                        title={data.site.siteMetadata.title}
                        meta={[
                            { name: 'description', content: 'Sample' },
                            { name: 'keywords', content: 'sample, something' },
                        ]}
                        >
                        <html lang="en" />
                    </Helmet>
                    <Header siteTitle={data.site.siteMetadata.title} />
                    <Main>
                        {children}
                    </Main>
                </Container>
            </ThemeProvider>
        )}
    />
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
