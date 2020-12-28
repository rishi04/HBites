import React from 'react';

import {FaFacebook} from 'react-icons/fa'
import { FooterContainer,FooterWrap,SocialMedia,SocialMediaWrap,SocialLogo,SocialIcons,SocialIconLinks } from "./FooterElements";
const Footer = () => {
    return (
        <FooterContainer>
        <FooterWrap>
        <SocialMedia>
        <SocialMediaWrap>
        <SocialLogo to="/"> Pizza</SocialLogo>
        <SocialIcons>
        <SocialIconLinks href=" " target="_blank" aria-label="Facebook" rel="noopernernoreferrer">
        <FaFacebook/>
        </SocialIconLinks>
        </SocialIcons>
        </SocialMediaWrap>
        </SocialMedia>
        </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
