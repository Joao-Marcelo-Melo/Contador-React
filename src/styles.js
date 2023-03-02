import styled from "styled-components";

export const Box = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
`

export const LeftBox = styled.div`
    background-color: 	#DCDCDC;
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 70%;
    }
`

export const Tittle = styled.h1`
    font-size: 4rem;
    color: #fff;
`

export const ContainerContador = styled.div`
   background-color: #3070fd;
    height: 100%;
    width: 50%;
    border-radius: 30px 0 0 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: -20px 7px 32px 0px rgba(0,0,0,0.1);


    div {
        background-color: #D3D3D3;
        height: 40vh;
        width: 20vw;
        border-radius: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }

    div h1 {
        text-align: center;
        font-size: 4rem;
    }

    div section {
        display: flex;
        justify-content: space-around;
        width: 15vw;
    }

    div section button {
        background-color: #3070FD;
        border: none;
        font-size: 2rem;
        width: 3vw;
        height: 5vh;
        cursor: pointer;
    }
`