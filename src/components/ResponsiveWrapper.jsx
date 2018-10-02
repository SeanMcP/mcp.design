import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
    margin: 0 auto;
    max-width: 1000px;

    @media screen and (max-width: 1000px) {
        width: 100%;
        margin: 0 2em;
    }
`

const ResponsiveWrapper = ({ children }) => (
    <Container>{children}</Container>
)

ResponsiveWrapper.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node)
}

export default ResponsiveWrapper