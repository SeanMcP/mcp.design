import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import ResponsiveWrapper from './ResponsiveWrapper'

const Container = styled.header`
    background: #ddd;
    color: #333;
    width: 100%;
`

const Header = (props) => (
    <Container>
        <ResponsiveWrapper>
            {props.siteTitle}
        </ResponsiveWrapper>
    </Container>
)

Header.propTypes = {
    siteTitle: PropTypes.string.isRequired
}

export default Header