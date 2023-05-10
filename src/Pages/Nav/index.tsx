import React from 'react';
import {Template} from "../../Components/Template";
import styled from "styled-components";
import {NavItem} from "../../Components/NavItem";
import Cover1 from '../../assets/abstract-background-polygons-white-background-white-texture_157927-7838 1.jpg';
import Cover3 from '../../assets/Fractal-Free-Download-PNG 1.jpg';
import Cover2 from '../../assets/html-color-codes-color-tutorials 1.jpg';

const NavContentWrapperSC = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Nav = () => {
    return (
        <Template>
            <NavContentWrapperSC>
                <NavItem
                    title={'Кольорові моделі'}
                    coverImagePath={Cover2}
                    textColor={'white'}
                    link={'color-models'}
                />
                <NavItem
                    title={'Афінні перетворення'}
                    coverImagePath={Cover1}
                    textColor={'black'}
                    link={'deformations'}
                />
                <NavItem
                    title={'Фрактали'}
                    coverImagePath={Cover3}
                    textColor={'white'}
                    link={'fractals'}
                />
            </NavContentWrapperSC>
        </Template>
    );
};