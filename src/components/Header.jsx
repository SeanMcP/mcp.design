import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const HeaderTag = styled.header`
    background: blue;
    color: white;
    width: 100%;
`

const Header = (props) => (
    <HeaderTag>{props.siteTitle}</HeaderTag>
)

Header.propTypes = {
    siteTitle: PropTypes.string.isRequired
}

export default Header