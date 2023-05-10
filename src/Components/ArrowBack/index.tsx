import React from 'react';
import styled from "styled-components";
import Arrow from "../../assets/arrow-back.svg"

const ArrowBackSC = styled('div')`
  background: #FFFDFB;
  border-radius: 50%;
  min-width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid white;
  transition: 0.5s;

  &:hover {
    background: #d2d2d2;
    border: 1px solid black;
  }

  img {
    width: 70%;
  }
`

interface ArrowBackProps {
    link?: string;
}

export const ArrowBack = ({link}: ArrowBackProps) => {
    return (
         <ArrowBackSC onClick={() => link
             ? window.history.back()
             : window.location.href = `${window.location.host}/${link}`
         }>
            <img src={Arrow} alt="arrow"/>
        </ArrowBackSC>
    );
};

