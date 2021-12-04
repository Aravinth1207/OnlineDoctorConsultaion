import React from 'react'
import styled from 'styled-components'

function SmallCont({backgroundImage}) {
    return (
            <ConsultContainer bgImage={backgroundImage}/>   
                 
    )
}

export default SmallCont


const ConsultContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(
    105.21deg,#3743ab 2.85%,#141b56 99.41%);
    background-image: ${ props => `url('/images/${props.bgImage}')`};
    background-size: cover;
    border-radius: 32px;
    height: 250px;
    width: 300px;
    zoom: 1;
    top: 0;
    left: 0;
    margin: auto;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    @media (max-width: 768px) {
        width: 200px;
        gap:1rem;
        margin-top:20px;
        flex-direction: row;
        justify-content: space-between;
        grid-template-rows: repeat(3,1fr);
        box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.1);
        overflow: hidden;
        background-position: center;
    }
    @media(max-width:400px){
        width:150px;
        box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.1);
        background-size: cover;
        overflow: hidden;
        background-position: center;
    }
    box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.1);

`


