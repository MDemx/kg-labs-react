import React from 'react';
import styled from "styled-components";
import {FooterIcon} from "../FooterIcon";
import Logo from '../../assets/logo.svg';
import InfoIcon from '../../assets/info-icon.svg';
import InstagramIcon from '../../assets/instagram-icon.svg';
import FacebookIcon from '../../assets/facebook-icon.svg';
import TwitterIcon from '../../assets/twitter-icon.svg';
import ExitIcon from '../../assets/exit-icon.svg';
import {Link} from "react-router-dom";

const HeaderSC = styled('header')`
  background: #F1E10E;
  z-index: 10;
  padding: 5px 60px;
  position: fixed;
  display: flex;
  top: 0;
  right: 0;
  left: 0;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  
  .logo {
    width: 90px;
    height: 90px;
  }
`

const FooterSC = styled('footer')`
  background: white;
  padding: 10px 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid black;
  
  .footerSocials {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const ContentWrapperSC = styled('footer')`
  background: #F0F0F0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: start;
  padding-right: 60px;
  padding-left: 60px;
  padding-top: 172px;
  padding-bottom: 60px;
`

const TemplateWrapperSC = styled('div')`
  .exit-icon, .info-icon {
    transition: 0.5s;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
  
  .info-icon {
    &:hover {
      opacity: 0.8;
    }
  }
`

interface TemplateProps {
    children: any;
}

export const Template = ({children}: TemplateProps) => {
    return (
        <TemplateWrapperSC>
            <HeaderSC>
                <Link to={''}>
                    <img className={'logo'} src={Logo} alt="logo"/>
                </Link>
                <Link to={window.location.href.includes('info') ? '' : `${window.location.href}/info`}>
                    <img className={'info-icon'} src={InfoIcon} alt="info-icon"/>
                </Link>
            </HeaderSC>
            <ContentWrapperSC>
                {children}
            </ContentWrapperSC>
            <FooterSC>
                <div className={'footerSocials'}>
                    <FooterIcon iconPath={InstagramIcon} />
                    <FooterIcon iconPath={FacebookIcon} />
                    <FooterIcon iconPath={TwitterIcon} />
                </div>
                <img className={'exit-icon'} src={ExitIcon} alt="exit-icon"/>
            </FooterSC>
        </TemplateWrapperSC>
    );
};
