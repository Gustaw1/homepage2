import styled from 'styled-components';

export const SkillsContent = styled.div`
    width: 50%;
    margin: auto;
    padding-bottom: 50px;
`;

export const SkillHeader = styled.h2`
    /* color: #FFFFFF; */
    color: ${props => props.theme.fontColor};
    margin: 10px 0 10px 0;
`;

export const SkillList = styled.li`
color: #000;
font-family: 'Times New Roman', Times, serif;
font-size: 16px;
text-transform: uppercase;
list-style-type: none;
display: inline-block;
background-color: #8bf0ba;
width: 22%;
min-width: 100px;
max-width: 160px;
text-align: center;
padding: 5px;
margin: 5px;
`;

