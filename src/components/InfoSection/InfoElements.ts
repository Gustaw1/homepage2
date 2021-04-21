import styled from 'styled-components';
import background from '../../images/vintage-wallpaper.png';

export const InfoContainer = styled.div`
    color: #fff;
    background-image: url(${(background)});
    height: 100%;
    padding-bottom: 10px;
    /* padding-top: 80px;
    margin-top: -80px; */
;

@media screen and (max-width: 768px) {
    padding: 100px 0;
}
`;

export const InfoHeader = styled.h1`
    text-align: center;
    padding-top: 50px;
    padding-bottom: 50px;
    color: ${props => props.theme.fontColor};
    font-size: 42px;
    text-shadow: none;
`;

/* background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '010606')} */