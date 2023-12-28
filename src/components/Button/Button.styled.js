import styled from 'styled-components';

export const Buttons = styled.button`
    cursor: pointer;
    padding: 12px 40px;
    color: #EFEDE8;
    font-size: 16px;
    font-weight: 500;
    line-height: 18px;
    border-radius: 12px;
    border: 1px solid ${(props) => (props.background === '#E6533C' ? '#E6533C' : '#efede84d')};
    background: ${(props) => props.background};
    transition: all .1s linear;
    
    &:hover {
        background: ${(props) => (props.background === '#E6533C' ? '#EF8964' :  'transparent')};
        border: 1px solid ${(props) => (props.background === '#E6533C' ? '#EF8964' : '#E6533C')};
    }

    @media (min-width: 600px) {
        padding: 16px 60px;
    }
`;