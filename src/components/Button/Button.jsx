import { Buttons } from './Button.styled';

export const Button = ({ text, background, onClick, }) => {
    return (
        <Buttons background={background} onClick={onClick}>{text}</Buttons>
    );
}
