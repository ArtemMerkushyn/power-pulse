import styled from 'styled-components';
import imgBg from '../../img/auth/auth.png';

export const Auth = styled.div`
    padding-top: 90px;

    @media (min-width: 600px) {
        padding-top: 140px;
    }

    @media (min-width: 825px) {
        padding-top: 150px;
    }
`;

export const AuthItem = styled.div`

`;

export const Title = styled.h1`
    max-width: 600px;
    font-size: 38px;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: 0.38px;
    margin-bottom: 40px;

    @media (min-width: 600px) {
        font-size: 70px;
        line-height: 78px; /* 111.429% */
        letter-spacing: 0.7px;
        margin-bottom: 64px;
    }
`;

export const TitleSpan = styled.span`
    position: relative;
    z-index: 1;

    svg {
        position: absolute;
        top: 5px;
        left: -7px;
        width: 98px;
        height: 35px;
        z-index: -1;

        @media (min-width: 600px) {
            width: 185px;
            height: 67px;
            top: 8px;
            left: -14px;
        }
    }
`;

export const BtsWrapper = styled.div`
    display: flex;
    gap: 14px;

    @media (min-width: 600px) {
        gap: 20px;
    }
`;

export const ImgWrapper = styled.div`
    height: 66%;
    position: absolute;
    bottom: 0;
    right: 0px;
    z-index: -1;

    @media (min-width: 600px) {
        height: 84%;
    }
    @media (min-width: 800px) {
        height: 100%;
    }

    @media (min-width: 1024px) {
        width: 40%;
        background-image: url(${imgBg});
        background-repeat: no-repeat;
        background-size: cover;
    }

    @media (max-width: 1024px) and (max-height: 425px){
        position: static;
        text-align: right;
        margin-right: -20px;
    }
`;

export const Img = styled.img`
    height: 100%;
    width: auto;

    @media (min-width: 1024px) {
        display: none;
    }
`;