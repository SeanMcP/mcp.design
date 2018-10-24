import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby';

const links = [
    {
        href: '/',
        text: 'Home'
    },
    {
        href: '/page-2/',
        text: 'Page 2'
    },
]

const Container = styled.nav`
    display: grid;
    grid-gap: 1em;
    grid-template-columns: repeat(${links.length}, max-content);
`

const StyledLink = styled(Link)`
    border-radius: 0.25em;
    color: #333;
    font-size: 1.5em;
    margin-right: -0.5em;
    padding: 0.5em;
    text-decoration: none;

    &:hover {
        background: rgba(0, 0, 0, 0.1);
    }
`

const HeaderNav = (props) => (
    <Container>
        {links.map(link => (
            <StyledLink key={link.href} to={link.href}>{link.text}</StyledLink>
        ))}
    </Container>
)

export default HeaderNav