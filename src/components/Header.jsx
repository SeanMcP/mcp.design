import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import ResponsiveWrapper from './ResponsiveWrapper'

const HeaderTag = styled.header`
    background: #ddd;
    color: #333;
    width: 100%;
`

const Header = (props) => (
    <HeaderTag>
        <ResponsiveWrapper>
            {props.siteTitle}
        </ResponsiveWrapper>
    </HeaderTag>
)

Header.propTypes = {
    siteTitle: PropTypes.string.isRequired
}

export default Header