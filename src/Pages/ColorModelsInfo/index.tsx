import React from 'react';
import {Template} from "../../Components/Template";
import styled from "styled-components";
import PaletteImg from "../../assets/palette.png"
import {ArrowBack} from "../../Components/ArrowBack";

export const InfoPageSC = styled(`div`)`
  h1 {
    font-family: 'David Libre',serif;
    font-style: normal;
    font-weight: 700;
    font-size: 45px;
    line-height: 45px;
    color: #323232;
  }
  
  .controls {
    display: flex;
    justify-content: flex-end;
  }
  
  .items {
    display: flex;
    align-items: start;
    justify-content: center;
    
    .second-col {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: start;
    }
  }
  
  .item {
    background: #FFFFFF;
    border-radius: 5px;
    padding: 40px;
    margin-right: 35px;

    max-width: 50%;
    
    span {
      font-family: 'Commissioner',serif;
      font-style: normal;
      font-weight: 400;
      font-size: 32px;
      line-height: 45px;
    }
  }

  .second-col {
    .item {
      margin: 0;
      min-width: 70%;
      max-width: 100%;
    }

    img {
      margin-top: 20px;
    }
  }
`

export const ColorModelsInfo = () => {
    return (
        <Template>
            <InfoPageSC>
                <h1>RGB, CMYK</h1>
                <div className={'items'}>
                    <div className="item">
                        <span>RGB— адитивна колірна модель,що описує спосіб синтезу кольору, за якою червоне, зелене та синє світло накладаються разом, змішуючись у різноманітні кольори. Широко застосовується в техніці, що відтворює зображення за допомогою випромінення світла.</span>
                    </div>
                    <div className={'second-col'}>
                        <div className="item">
                            <span>CMYK - субтрактивна колірна модель, використовується у поліграфії, перш за все при багатофарбовому друці.</span>
                        </div>
                        <img src={PaletteImg} alt="palette"/>
                    </div>
                </div>
                <div className={'controls'}>
                    <ArrowBack link={'nav/color-models'} />
                </div>
            </InfoPageSC>
        </Template>
    );
};
