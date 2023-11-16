import styled from "styled-components";
import { Link } from 'react-router-dom'

export const NavbarContainer = styled.nav`
    height: 60px;
    background-color: #2ECC40;
    border: none;
    position: fixed;
    top: 0;
    z-index: 1;
    width: 100%;
    display: flex;
    align-items: center;
    color: white;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    flex-direction: row;
    column-gap: 12px;
    padding: 0 10px;
`


export const NavLink = styled(Link)`
    color: white;
    text-decoration: none;
    transition: border-bottom 0.2s ease;

    &:active{
        border-bottom: 2px solid white;
    }
`

export const NavbarItem = styled.div`
    width: 32%;
`