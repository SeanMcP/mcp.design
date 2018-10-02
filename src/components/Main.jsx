import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import ResponsiveWrapper from './ResponsiveWrapper'

const Container = styled.header`
    width: 100%;
`

const Main = ({ children }) => (
    <Container>
        <ResponsiveWrapper>
            {children}
        </ResponsiveWrapper>
    </Container>
)

Main.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node)
}

export default Main