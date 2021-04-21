import styled from 'styled-components';
import background from '../../images/clean_textile.png';

export const InfoContainerProjects = styled.div`
    background-color: #fff;
    background-image: url(${(background)});
    height: 100%;
margin-bottom: 100px;
`;

export const ProjectsContent = styled.div`
    width: 50%;
    margin: auto;
    display: flex;
    background-color: #FFF;
    min-width: 400px;
    min-height: 120px;
    width: 40%;
    margin: 0 auto 50px auto;
    border: 2px solid #cbcbcb;
    border-radius: 5px;
`;

export const ProjectsLeft = styled.div`
    font-size: 3rem;
    text-align: center;
    padding: 20px;
    display: inline-block;
`;

export const ProjectsRight = styled.div`
    font-size: 3rem;
    text-align: left;
    padding: 20px 10px 0px 0px;
    width: auto;
    display: inline-block;
    vertical-align: top;
`;

export const ProjectsHeader1 = styled.h1`
    font-size: 1.8rem;
    font-family: Verdana;
    color: #000;
`;

export const ProjectsHeader2 = styled.h2`
    margin-top: 0;
    margin-bottom: 5px;
    font-size: 1rem;
    text-align: left;
    color: #444;
`;

export const ProjectsHeader3 = styled.h3`
    text-align: left;
    padding-top: 5px;
    color: #000;
    font-size: 1rem;
    word-wrap: break-word;
`;

export const ProjectsList = styled.li`
color: #FFF;
font-family: 'Times New Roman', Times, serif;
font-size: 1.0rem;
text-transform: uppercase;
justify-content: space - between;
list-style-type: none;
display: inline-block;
background-color: #3661A2;
min-width: 120px;
max-width: 160px;
text-align: center;
padding: 0px 0 0 0px;
margin: 20px 20px 5px 0px;
`;
