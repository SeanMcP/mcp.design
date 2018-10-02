import React from 'react'
import styled from 'styled-components'

const WrapperTag = styled.div`
    margin: 0 auto;
    max-width: 1000px;

    @media screen and (max-width: 1000px) {
        width: 100%;
        margin: 0 2em;
    }
`

const ResponsiveWrapper = ({ children }) => (
    <WrapperTag>{children}</WrapperTag>
)

export default ResponsiveWrapper