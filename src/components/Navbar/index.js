import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import { Nav, NavbarContainer, Navlogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn,NavBtnLink } from './NavbarElements';
import icon from '../../images/optics.png'

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)
    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
        }, [])
    return (
        <>
          <Nav scrollNav={scrollNav}> 
              <NavbarContainer>
                  <Navlogo to='/'>
                      <img src={icon} style={{width:'auto',height: '120px', marginTop: '20px'}}/>
                  </Navlogo>
                  <MobileIcon onClick={toggle}>
                      <FaBars />
                 </MobileIcon>
                 <NavMenu>
                     <NavItem>
                         <NavLinks to="about">Technology</NavLinks>
                     </NavItem>
                     <NavItem>
                         <NavLinks to="discover">Discover</NavLinks>
                     </NavItem>
                     <NavItem>
                         <NavLinks to="services">Features</NavLinks>
                     </NavItem>
                     <NavItem>
                         <NavLinks to="signup">Contact </NavLinks>
                     </NavItem>
                 </NavMenu>
              </NavbarContainer>
          </Nav>
        </>
    );
};

export default Navbar;
