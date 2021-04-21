import styled from 'styled-components';

export const EducationContent = styled.div`
    width: 50%;
    background-color: #FFF;
    min-width: 400px;
    min-height: 120px;
    width: 40%;
    margin: 0 auto 50px auto;
    border: 1px solid #cbcbcb;
    border-radius: 5px;
    color: ${props => props.theme.fontColor};
`;

export const EducationLeft = styled.div`
    font-size: 3rem;
    text-align: center;
    padding: 20px;
    display: inline-block;
`;

export const EducationRight = styled.div`
    display: inline-block;
`;

export const EducationHeader1 = styled.h1`
    font-size: 1.8rem;
    font-family: Verdana;
    color: #2d365f;
`;

export const EducationHeader2 = styled.h2`
    margin-top: 0;
    margin-bottom: 5px;
    font-size: 1rem;
    text-align: left;
    color: #444;
`;

export const EducationHeader3 = styled.h3`
    text-align: left;
    padding-top: 5px;
    color: #2d365f;
    font-size: 1rem;
    text-shadow: none;
`;

export const EducationI = styled.i` 
    color: #2d365f;
    `;

export const EducationP = styled.p` 
    margin-top: 10px;
    font-size: 1rem;
    font-weight: bold;
    color: #2d365f;
    font-family: Verdana;
`;
