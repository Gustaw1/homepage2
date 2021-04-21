import React from 'react';
import { FaBars } from 'react-icons/fa';
import ScrollReveal from 'scrollreveal';
import {
    MobileIcon,
    Nav,
    NavbarContainer,
    NavBtnLink,
    NavItem,
    NavLinks,
    NavLogo,
    NavMenu,
    NavBtn,
} from './NavbarElements';


const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">MACIEJ KUBALE - HOMEPAGE</NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="home">Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="education">Education</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="experience">Experience</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="projects">Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="skills">Skills</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact">Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                    {/* <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn> */}
                </NavbarContainer>
            </Nav>
        </>
    );
};

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true,
});

sr.reveal('nav', {});

export default Navbar;
