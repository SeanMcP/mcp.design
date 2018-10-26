import React from 'react'
import styled from 'styled-components'

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

export default Main