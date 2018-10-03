import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import HeaderLogo from './HeaderLogo'
import HeaderNav from './HeaderNav'
import ResponsiveWrapper from '../ResponsiveWrapper'

const Container = styled.header`
    background: #ddd;
    color: #333;
    width: 100%;
`

const Flex = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
`

const Header = (props) => (
    <Container>
        <ResponsiveWrapper>
            <Flex>
                <HeaderLogo
                    imageSrc={require('../../images/gatsby-icon.png')}
                    tagline={"Illustrations and Web"}
                    title={props.siteTitle}
                />
                <HeaderNav />
            </Flex>
        </ResponsiveWrapper>
    </Container>
)

Header.propTypes = {
    siteTitle: PropTypes.string.isRequired
}

export default Header