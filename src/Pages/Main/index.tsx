import React from 'react';
import {Template} from "../../Components/Template";
import styled from "styled-components";
import {PrimaryButton} from "../../Components/Buttons/Primary";

const MainPageContentSC = styled('div')`
  h1 {
    font-family: 'Commissioner',serif;
    font-style: normal;
    font-weight: 700;
    font-size: 61px;
    line-height: 45px; 
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 50px;
  }
  
  .description-box {
    background: white;
    padding: 94px 50px;
    margin-bottom: 90px;
    
    span {
      font-family: 'Commissioner',serif;
      font-style: normal;
      font-weight: 300;
      font-size: 40px;
      line-height: 45px;
    }
  }
  
  .startBtnWrapper {
    display: flex;
    justify-content: flex-end;
  }
`

const MainPage = () => {
    return (
        <Template>
            <MainPageContentSC>
                <h1>Навчальний проект</h1>
                <div className="description-box">
                    <span>
                        Навчальний проект - сайт, де ви зможете ознайомитись з афінними перетвореннями, кольоровими моделями та фракталами
                    </span>
                </div>
                <div className="startBtnWrapper">
                    <PrimaryButton text={'Почати навчання'} link={'nav'}/>
                </div>
            </MainPageContentSC>
        </Template>
    );
};

export default MainPage;
