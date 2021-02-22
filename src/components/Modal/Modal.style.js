import styled from "styled-components";


export const ModalWindow = styled.div`
width:100vw;
height:100vh;
color: #fff;
text-align:center;
z-index:3;
position:absolute;
top:0;
left:0;
background-color:#000;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;

export const Button = styled.button`
padding: 30px 15px;
width:80%;
color: #fff;
border: 1px solid cyan;
background-color: transparent;
font-size:32px;
cursor: pointer;
:hover {
    box-shadow: 2px 1px 18px -5px rgba(252,242,252,1);
}
`;

export const Paragraph = styled.p`
font-size:42px;
text-align:center;
`;