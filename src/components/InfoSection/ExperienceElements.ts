import styled from 'styled-components';
import background from '../../images/country-quilt-dark.png';

export const ExperienceContainer = styled.div`
    background-image: linear-gradient(rgba(18, 52, 59, 0.63), rgba(18, 52, 59, 0.63)), url(${(background)}); 
    height: 100%;
    padding-bottom: 10px;
`;

export const ExperienceContent = styled.div`
    width: 50%;
    background-color: #fff;
    min-width: 400px;
    min-height: 120px;
    width: 40%;
    margin: 0 auto 50px auto;
    border: 1px solid #cbcbcb;
    border-radius: 5px;
    color: ${props => props.theme.fontColor};
`;

export const Experienceli = styled.li`
margin-left: 40px;
`;

// #experience ul > li:first-child {
//     margin-top: 20px;
// }

// #experience ul > li {
//     margin-left: 40px;
// }