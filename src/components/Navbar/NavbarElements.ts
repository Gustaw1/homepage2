import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const Nav = styled.nav`
background: #000;
height: 8vh;
margin-top: -80px;

display: flex;
justify-content: space-between;
/* align-items: center; */
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;

@media screen and (max-width: 960px) {
    transition: 0.8s all ease;
}
`;

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
/* height: 80px; */
height: 8vh;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1800px;
`;

export const NavLogo = styled(LinkRouter)`
color: #fff;
justify-self: flex-start;
cursor: pointer;
font-size: 1.5rem;
font-family: Russo One, sans-serif;
letter-spacing: 2px;
display: flex;
align-items: center;
font-weight: bold;
text-decoration: none;
`;

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
}
`;

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
width: 65%;

@media screen and (max-width: 768px) {
    display: none;
}
`

export const NavItem = styled.li`
height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
color: #fff;
display: flex;
font-family: Russo One, sans-serif;
align-items: center;
text-decoration: none;
padding: 0 2.2rem;
height: 80px;
cursor: pointer;

&active {
    border-bottom: 3px solid #739294;
}

&:hover {
    border-bottom: 3px solid #739294;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items:center;

@media screen and (max-width: 768px) {
    display: none;
}
`;

export const NavBtnLink = styled(LinkRouter)`
border-radius: 50px;
background: #739294;
white-space: nowrap;
padding: 10px 22px;
color: #010606;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
}
`;