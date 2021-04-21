import styled from 'styled-components';
import background from '../../images/clean_textile.png';

export const InfoContainerContact = styled.div`
    background-color: #fff;
    background-image: url(${(background)});
    height: 100%;
    padding-bottom: 10px;
`;

export const ContactContent = styled.div`
    width: 50%;
    margin: auto;
    padding-bottom: 100px;
`;

export const EmailContent = styled.input`
    display: block;
    margin: 10px 0 10px 0;
    padding: 5px;
    width: 100%;
    height: 30px;

    background-color: white;
    color: #2e2e2e;
    border: 2px solid #cbcbcb;
    border-radius: 5px;
    font-size: 16px;
    box-sizing: border-box;
    `;

// #message {
//     display: block;
//     margin: 10px 0 10px 0;
//     padding: 5px;
//     width: 100%;
//     height: 200px;
//     resize: none;

//     background-color: white;
//     color: #2e2e2e;
//     border: 2px solid #cbcbcb;
//     border-radius: 5px;
//     font-size: 16px;
//     box-sizing: border-box;
// }

// #submit {
//     width: 25%;
//     cursor: pointer;

//     width: 300px;
//     background-color: #36b03c;
//     color: white;
//     border: 2px solid #cbcbcb;
//     border-radius: 5px;
//     font-size: 20px;
//     padding: 10px;
//     box-sizing: border-box;
//     margin-top: 5px;
//     margin-bottom: 15px;
//     outline: none;
//     letter-spacing: 2px;

// }