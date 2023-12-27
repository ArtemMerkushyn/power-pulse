import PropTypes from 'prop-types';
import { Container, Headers, Logo, LogoText, Wrapper, WrapperItem, WrapperItemLink, Settings, Avatar, Exit, BurgerMenu, Menu, MenuExit, MenuExitBtn, MenuLinks, MenuLink, LogoutMenu } from "./Header.styled";
import  Icons  from '../Icons/Icons'
import { useState } from 'react';


export const Header = ({ auth }) => {
    const [menu, setMenu] = useState(false);

    const menuExitHandler = () => {
        setMenu(false);
    }

    return (
        <Headers style={{ borderBottom: auth ? '1px solid rgba(239, 237, 232, 0.20)' : '1px solid transparent' }}>
            <Container>
                <Logo>
                    <Icons icon={'logo'}/>
                    <LogoText>PowerPulse</LogoText>
                </Logo>
                <Wrapper>
                    <WrapperItem>
                        <WrapperItemLink to={'/diary'}>Diary</WrapperItemLink>
                        <WrapperItemLink to={'/products'}>Products</WrapperItemLink>
                        <WrapperItemLink to={'/exercises'}>Exercises</WrapperItemLink>
                    </WrapperItem>
                    <WrapperItem>
                        <Settings to={'/user'}>
                            <Icons icon={'settings'}/>
                        </Settings>
                        <Avatar>
                            <Icons icon={'user'}/>
                        </Avatar>
                        <BurgerMenu onClick={() => setMenu(true)}>
                            <Icons icon={'menu'}/>
                        </BurgerMenu>
                        <Exit to='/'>
                            Logout
                            <Icons icon={'exit'}/>
                        </Exit>
                    </WrapperItem>
                </Wrapper>
                <Menu className={menu ? 'active' : ''}>
                    <MenuExit>
                        <MenuExitBtn onClick={menuExitHandler}/>
                    </MenuExit>
                    <MenuLinks>
                        <MenuLink onClick={menuExitHandler} to='/diary'>Diary</MenuLink>
                        <MenuLink onClick={menuExitHandler} to='/products'>Products</MenuLink>
                        <MenuLink onClick={menuExitHandler} to='/exercises'>Exercises</MenuLink>
                    </MenuLinks>
                    <LogoutMenu onClick={menuExitHandler} to={'/'}>
                        Logout
                        <Icons icon={'exit'}/>
                    </LogoutMenu>
                </Menu>
            </Container>
        </Headers>
    );
}

Header.propTypes = {
    auth: PropTypes.bool
}