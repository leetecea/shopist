import styled from 'styled-components'
import Add from '../../assets/add.svg'

export const Container = styled.section`
height: 100vh;
background-color: #2924FF;
`

export const BoxTop = styled.section`
display: flex;
align-items: center;
justify-content: space-around;
padding: 2em 2em 0em 0em;

@media only screen and (max-width: 880px) {
    justify-content: space-between;

}
`
export const Logo = styled.img`
width: 17em;
height: 9em;

@media only screen and (max-width: 880px) {
    display: none;
}
`

export const ExitBtn = styled.button`
background-color: transparent;
border: none;
cursor: pointer;


@media only screen and (max-width: 880px) {
img{
    width: 3rem;
}
}

@media only screen and (max-width: 450px) {
img{
    width: 2.5rem;
}
}
`

export const BoxBottom = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100vw;
height: 70vh;


div{
    display: flex;
    flex-direction: column;
    align-items: center;
}

img{
    width: 16em;
}

p{
    margin-top: 1em;
    font-size: 2em;
    font-family: 'Raleway', sans-serif;
    font-weight: 600;

}

@media only screen and (max-width: 880px) {

div{
    margin-bottom: 2em;

}
p{
    font-size: 1.5em;
}
}

@media only screen and (max-width: 450px) {
img{
    width: 15rem;
}

p{
    font-size: 1.2em;
}
}
`
export const AddList = styled.button`
text-transform: uppercase;
background-image: url(${Add});
background-size: 2.8em;
background-repeat: no-repeat;
background-position-y: calc(50%);
background-position-x: calc(96%);
background-color: #FF8A00;
width: 17em;
height: 3em;
border: none;
border-radius: .8em;
margin-top: 2em;
padding-left: 1.3em;
font-size: 1.2em;
font-family: 'Raleway', sans-serif;
font-weight: 700;
display: flex;
align-items: center;
cursor: pointer;

@media only screen and (max-width: 450px) {
font-size: 1em;
border-radius: 1.7em;
background-size: 2em;
width: 16em;
background-position-x: calc(95%);

}
`