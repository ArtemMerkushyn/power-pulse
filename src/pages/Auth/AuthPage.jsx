import React from 'react';
import { Auth, AuthItem, BtsWrapper, Title, TitleSpan, ImgWrapper, Img } from './AuthPage.styled';
import { Button } from '../../components/Button/Button';
import Icons from '../../components/Icons/Icons';
import imgBg from '../../img/auth/auth1.png';

export const AuthPage = () => {
    return (
        <Auth>
            <AuthItem>
                <Title>
                    Transforming your <TitleSpan>body<Icons icon={'circle'}/></TitleSpan> shape with Power Pulse
                </Title>
                <BtsWrapper>
                    <Button text={'Sign up'} background={'#E6533C'}/>
                    <Button text={'Sign in'} background={'transparent'}/>
                </BtsWrapper>
            </AuthItem>
            <ImgWrapper>
                <Img src={imgBg} alt="" />
            </ImgWrapper>
        </Auth>
    );
}
