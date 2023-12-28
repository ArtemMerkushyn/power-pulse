import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const Headers = styled.header`
    background: inherit;
    padding: 12px 0;
`;

export const Container = styled.div`
    max-width: 1248px;
    width: 100%;
    margin: 0 auto;
    padding: 0 19px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    svg {
        width: 36px;
        height: 13px;
    }
`;

export const LogoText = styled.span`
    font-size: 12px;
    line-height: 12px;
    font-weight: 700;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 32px;
`;

export const WrapperItem = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;

    svg {
        width: 24px;
        height: 24px;
    }

    @media (max-width: 768px) {
        &:first-child {
          display: none;
        }
    }
`;

export const WrapperItemLink = styled(NavLink)`
    padding: 10px 27px;
    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.20);
    transition: all .2s linear;

    &:hover,
    &.active {
        background: #E6533C;;
    }
`;

export const Settings = styled(Link)`
    svg {
        margin-top: 5px;
    }
`;

export const Avatar = styled.div`
    width: 37px;
    height: 37px;
    border-radius: 50%;
    border: 1px solid #E6533C;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 21px;
        height: 21px
    }
`;

export const BurgerMenu = styled.button`
    width: 24px;
    height: 24px;
    cursor: pointer;
    background: transparent;
    border: none;
    display: none;
    
    @media (max-width: 768px) {
        display: block;
    }
`;

export const Exit = styled(Link)`
    display: flex;
    align-items: center;
    gap: 8px;

    svg {
        stroke: #E6533C;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

export const Menu = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transform: translateY(-100%);
    z-index: 10;
    padding: 20px;
    background: #E6533C;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    opacity: 0;
    transition: all .3s linear;

    &.active {
        opacity: 1;
        transform: translateY(0%);
    }

    @media (max-width: 768px) {
        display: flex;
    }
`;

export const MenuExit = styled.div`
    text-align: right;
`;

export const MenuExitBtn = styled.button`
    width: 24px;
    height: 24px;
    background: transparent;
    border: none;
    position: relative;
    cursor: pointer;

    &::before,
    &::after {
        content: '';
        height: 3px;
        width: 90%;
        border-radius: 50px;
        background: #EFEDE8;
        position: absolute;
        top: 50%;
        left: 50%;
    }

    &::before {
        transform: translate(-50%, -50%) rotate(45deg);
    }

    &::after {
        transform: translate(-50%, -50%) rotate(-45deg);
    }
`;

export const LogoutMenu = styled(Link)`
    display: flex;
    align-items: center;
    gap: 8px;

    svg {
        height: 20px;
        width: 20px;
        stroke: #EFEDE8;
    }
`;

export const MenuLinks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`;

export const MenuLink = styled(NavLink)`
    width: 114px;
    padding: 10px 27px;
    border-radius: 12px;
    border: 1px solid transparent;
    text-align: center;
    transition: all .2s linear;

    &.active {
        border: 1px solid #EFEDE8;
    }
`;