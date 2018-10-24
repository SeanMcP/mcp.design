import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    margin: 0 auto;
    max-width: 1000px;

    @media screen and (max-width: 1000px) {
        margin: 0 2em;
    }
`

const ResponsiveWrapper = ({ children }) => (
    <Container>{children}</Container>
)

export default ResponsiveWrapper