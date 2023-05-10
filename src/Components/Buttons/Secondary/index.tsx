import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

export const SecondaryButtonSC = styled(`button`)`
  background: white;
  border: 1px solid #000000;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 15px 70px;
  transition: 0.5s;
  
  &:hover {
    background: black;
    
    span {
      color: white;
    }
  }
  
  span {
    transition: 0.5s;
    font-family: 'Commissioner',serif;
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 39px;
    color: #323232;
  }
`

interface PrimaryButtonProps {
    text: string;
    link?: string;
    onClick?: any;
}

export const SecondaryButton = ({text, link, onClick}: PrimaryButtonProps) => {
    return (
        link ? <Link to={link}>
                <SecondaryButtonSC>
                    <span>{text}</span>
                </SecondaryButtonSC>
            </Link> :
        <SecondaryButtonSC onClick={onClick}>
            <span>{text}</span>
        </SecondaryButtonSC>
    );
};
