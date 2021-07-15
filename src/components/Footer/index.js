import React from 'react';
import {
FaFacebook,
FaInstagram,
FaLinkedin,
FaYoutube,
FaTwitter} from 'react-icons/fa';

import{
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialIconLink,
    SocialIcons,
    SocialLogo,
    SocialMedia,
    SocialMediaWrap,
    WebsiteRights} from './FooterElements';
const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of Service</FooterLink>
                    </FooterLinkItems>

                    <FooterLinkItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to="/signin">Phone Number</FooterLink>
                            <FooterLink to="/signin">Location</FooterLink>
                            <FooterLink to="/signin">Leave a Message</FooterLink>
                    </FooterLinkItems>

                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                        <FooterLinkTitle>Policies</FooterLinkTitle>
                            <FooterLink to="/signin">Privacy Policy</FooterLink>
                            <FooterLink to="/signin">Terms and Coniditons</FooterLink>
                            <FooterLink to="/signin">Warranty Information</FooterLink>
                    </FooterLinkItems>

                    <FooterLinkItems>
                        <FooterLinkTitle>Technology</FooterLinkTitle>
                            <FooterLink to="/signin">Patents</FooterLink>
                            <FooterLink to="/signin">Research Papers</FooterLink>
                            <FooterLink to="/signin">Honours</FooterLink>
                            <FooterLink to="/signin">Awards</FooterLink>
                    </FooterLinkItems>
                    
                    </FooterLinksWrapper>

                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <WebsiteRights>Nairo Eyeware Technologies © {new Date().getFullYear()} All Rights Reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook"><FaFacebook/></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram"><FaInstagram/></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube"><FaYoutube/></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter"><FaTwitter/></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin"><FaLinkedin/></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;
