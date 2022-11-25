import styled from "styled-components";

export const Box = styled.section`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
position: fixed;
top: 0;
left: 0;
bottom: 40em;
z-index: 999999;
background-color: rgba(40, 36, 255, 0.5);
`

export const PopUp = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
width: 33em;
height: 18em;
border-radius: .6em;
background-color: #FF8A00;
box-shadow: 8px 5px 4px 2px #1e1c9faa;

@media only screen and (max-width: 880px) {
width: 70%;
}

@media only screen and (max-width: 720px) {
width: 80%;
}
@media only screen and (max-width: 530px) {
justify-content: center;
height: 15em;
}
`

export const NameList = styled.input`
width: 85%;
height: 2.5em;
border: none;
border-radius: .4em;
background-color: #E4E4E4;
font-family: 'Raleway', sans-serif;
font-size: 1.5em;
color: #02006C;
font-weight: 700;
padding-left: .5em;
::placeholder{
    padding-right: 1em;
    text-align: center;
    color: #02006C;
}

@media only screen and (max-width: 680px) {
width: 90%;
font-size: 1.38em;
}

@media only screen and (max-width: 560px) {
font-size: 1.3em;
border-radius: .5em;
}

@media only screen and (max-width: 530px) {
font-size: 1em;
height: 3em;
margin-bottom: 2em;
}

@media only screen and (max-width: 400px) {
font-size: .85em;
height: 3.2em;
}
`

export const CreateBtn = styled.button`
width: 35%;
height: 1.5em;
border: none;
border-radius: .2em;
background-color: #E4E4E4;
font-family: 'Raleway', sans-serif;
font-size: 2em;
font-weight: 700;
color: #02006C;
text-transform: uppercase;
cursor: pointer;

@media only screen and (max-width: 680px) {
font-size: 1.8em;
text-align: center;
height: 1.8em;
border-radius: .5em;
background-color: #E4E4E4;
}

@media only screen and (max-width: 560px) {
font-size: 1.5em;
width: 50%;
}

@media only screen and (max-width: 530px) {
font-size: 1.1em;
height: 2.5em;
}
`