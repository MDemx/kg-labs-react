import React from 'react';
import styled from "styled-components";

const FooterIconSC = styled('a')`
  width: 79px;
  height: 79px;
  border-radius: 50%;
  background: rgba(217, 217, 217, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  transition: 0.5s;
  
  &:hover {
    background: rgba(217, 217, 217, 0.2);
  }
`

interface FooterIconProps {
    iconPath: string;
}

export const FooterIcon = ({iconPath}: FooterIconProps) => {
    return (
        <FooterIconSC href={'#'}>
            <img src={iconPath} alt="icon"/>
        </FooterIconSC>
    );
};