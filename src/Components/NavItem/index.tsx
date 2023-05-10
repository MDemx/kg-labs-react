import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import ArrowIcon from "../../assets/arrow-icon.svg"

const NavItemSC = styled(Link)`
  height: 80vh;
  background: #FFFFFF;
  box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  padding: 40px 45px;
  width: 25%;
  transition: 0.5s;
  
  &:hover {
    transform: scale(1.03);
    box-shadow: 16px 19px 22px rgba(0, 0, 0, 0.25);
  }
  
  .coverImage {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  
  h2 {
    color: #323232;
    font-family: 'Commissioner',serif;
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 45px;
    text-transform: uppercase;
    text-align: center;
  }
  
  .arrowWrapper {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
  
  h2, .arrow-icon {
    position: relative;
    z-index: 2;
  }
`

interface NavItemProps {
    link: string;
    textColor: string;
    coverImagePath: string;
    title: string;
}

export const NavItem = ({coverImagePath, link, textColor, title}: NavItemProps) => {
    return (
        <NavItemSC to={link}>
            <h2 style={{color: textColor}}>{title}</h2>
            <div className={'arrowWrapper'}><img src={ArrowIcon} alt="" className={'arrow-icon'}/></div>
            <img src={coverImagePath} className={'coverImage'} alt=""/>
        </NavItemSC>
    );
};
