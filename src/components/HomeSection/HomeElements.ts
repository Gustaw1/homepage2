import styled from 'styled-components';
import { Link } from 'react-scroll';

export const HomeContainer = styled.div`
background: #0c0c0c;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 92vh;
position: relative;
z-index: 1;
`;

export const HomeBackground = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`;

export const VideoBackground = styled.video`
width:100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background: #232a34;
opacity: 0.5;
`;

export const HomeContent = styled.div`
z-index: 3;
max-width: 1200px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
`;

export const HomeImg = styled.img`
    border-radius: 50%;
    height: 240px;
    opacity: 50%;
`;

export const HomeP = styled.p`
color: #fff;
font-size: 26px;
text-align: center;

@media screen and (max-width: 768px) {
    font-size: 40px;
}

@media screen and (max-width: 480px) {
    font-size: 32px;
}
`;

export const ResumeContainer = styled.div`
z-index: 3;
max-width: 1200px;
display: flex;
align-items: center;
justify-content: center;
`;

export const Resume = styled(Link)`
    color: #fff;
    display: inline-block;
    margin: 10px auto 10px auto;
    padding: 4px 0 4px 0 ;
    border: 1px solid #FFFFFF;
    border-radius: 5px;
    width: 200px;
    text-align: center;
    justify-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-family: sans-serif;
    font-size: 12px;
    vertical-align: middle;

    &:hover {
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    color: #739294;
    cursor: pointer;}
`;