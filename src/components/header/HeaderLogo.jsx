import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import BREAKPOINTS from '../../constants/breakpoints'

const Container = styled.div`
    align-items: center;
    display: flex;
    padding: 1em 0;

    @media screen and (max-width: ${BREAKPOINTS.desktop}) {
        flex-direction: column;
    }
`

const Image = styled.img`
    max-width: 5em;
`

const Text = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;

    @media screen and (max-width: ${BREAKPOINTS.desktop}) {
        align-items: center;
    }
`

const Title = styled.h1`
    margin: 0;
`

const Tagline = styled.h2`
    font-style: italic;
    font-weight: normal;
    margin: 0;
`

const HeaderLogo = ({ imageSrc, tagline, title }) => (
    <Container>
        <Image alt={title} src={imageSrc}/>
        {title && (
            <Text>
                <Title>{title}</Title>
                {tagline && <Tagline>{tagline}</Tagline>}
            </Text>
        )}
    </Container>
)

HeaderLogo.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    tagline: PropTypes.string,
    text: PropTypes.string
}

export default HeaderLogo