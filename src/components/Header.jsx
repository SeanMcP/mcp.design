import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import HeaderLogo from './HeaderLogo'
import ResponsiveWrapper from './ResponsiveWrapper'

const Container = styled.header`
    background: #ddd;
    color: #333;
    width: 100%;
`

const Header = (props) => (
    <Container>
        <ResponsiveWrapper>
            <HeaderLogo
                imageSrc={require('../images/gatsby-icon.png')}
                tagline={"Illustrations and Web"}
                title={props.siteTitle}
            />
        </ResponsiveWrapper>
    </Container>
)

Header.propTypes = {
    siteTitle: PropTypes.string.isRequired
}

export default Header