import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa'
import { FooterContainer, FooterLink, FooterLinkItems, FooterLinksContainer, FooterWrap,FooterLinksWrapper,FooterLinkTitle } from './FooterElements'
import { SocialMedia, SocialIconLink, SocialIcons, SocialLogo, SocialMediaWrap, WebsiteRights } from './FooterElements'
const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop()
    }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>About Us</FooterLinkTitle>
                
                        <FooterLink to='/signin'>How it works</FooterLink>
                        <FooterLink to='/signin'>Testimonials</FooterLink>
                        <FooterLink to='/signin'>Carrers</FooterLink>
                        <FooterLink to='/signin'>Investors</FooterLink>
                        <FooterLink to='/signin'>Terms of Service</FooterLink>
                    
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Videos</FooterLinkTitle>
                
                        <FooterLink to='/signin'>Submit Videos</FooterLink>
                        <FooterLink to='/signin'>Ambassadors</FooterLink>
                        <FooterLink to='/signin'>Agency</FooterLink>
                        <FooterLink to='/signin'>Influencer</FooterLink>
                        
                    
                </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>Contact Us</FooterLinkTitle>
                
                        <FooterLink to='/signin'>Contact</FooterLink>
                        <FooterLink to='/signin'>Support</FooterLink>
                        <FooterLink to='/signin'>Destinations</FooterLink>
                        <FooterLink to='/signin'>Sponsorship</FooterLink>
                        
                    
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Social Media</FooterLinkTitle>
                
                        <FooterLink to='/'>Instagram</FooterLink>
                        <FooterLink to='/'>Facebook</FooterLink>
                        <FooterLink to='/'>Youtube</FooterLink>
                        <FooterLink to='/'>Twitter</FooterLink>
                        <FooterLink to='/'>LinkedIn</FooterLink>
                    
                </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo to='/' onClick={toggleHome}>dolla</SocialLogo>
                <WebsiteRights>dolla ?? {new Date().getFullYear()}All rights reserved.</WebsiteRights>
                <SocialIcons>
                    <SocialIconLink href='/' target='_blank' aria-label='Facebook'><FaFacebook/></SocialIconLink>
                    <SocialIconLink href='/' target='_blank' aria-label='Instagram'><FaInstagram/></SocialIconLink>
                    <SocialIconLink href='/' target='_blank' aria-label='Youtube'><FaYoutube/></SocialIconLink>
                    <SocialIconLink href='/' target='_blank' aria-label='Twitter'><FaTwitter/></SocialIconLink>
                    <SocialIconLink href='/' target='_blank' aria-label='Linkedin'><FaLinkedin/></SocialIconLink>
                </SocialIcons>
            </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
