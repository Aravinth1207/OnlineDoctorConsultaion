import React from 'react'
import styled from 'styled-components'

function ConcernSmallContainer({backgroundImage,description}) {
    return (
        <>
            <ConcernImageContainer bgImage={backgroundImage} />   
            <Concern>
               <h3>{ description }</h3>
            </Concern>
        </>
    )
}

export default ConcernSmallContainer

const Concern = styled.div`
    position: relative;
    font-size: 1.1rem;
    font-weight: bold;
    text-align: center;
`


const ConcernImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-image: ${ props => `url('/images/${props.bgImage}')`};
    border-radius: 32px;
    height: 200px;
    width: 200px;
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
        overflow: hidden;
        background-position: center;
    }
    @media(max-width:400px){
        width:150px;
        background-size: cover;
        overflow: hidden;
        background-position: center;
    }
    

`
