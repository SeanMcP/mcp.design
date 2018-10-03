import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby';

const Container = styled.nav`
    display: flex;
`

const StyledLink = styled(Link)`
    border-radius: 2px;
    color: #333;
    margin-right: -0.5em;
    margin-left: 1em;
    padding: 0.5em;
    text-decoration: none;

    &:hover {
        background: rgba(0, 0, 0, 0.1);
    }
`

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

const HeaderNav = (props) => (
    <Container>
        {links.map(link => (
            <StyledLink key={link.href} to={link.href}>{link.text}</StyledLink>
        ))}
    </Container>
)

export default HeaderNav