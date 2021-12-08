import React from 'react';
import styled from 'styled-components';
import SmallCont from './SmallCont';
import ConcernSmallContainer from './ConcernSmallContainer';

function Section() {
    return (
        <>
        <ContainerWrapper>
            <Container>
            </Container>
        </ContainerWrapper>
        <ContainerDisplay>
            <a href="#"><SmallCont backgroundImage="consult.jpg"/></a>
            <a href="appointment"><SmallCont backgroundImage="appoint.jpg"/></a>
        </ContainerDisplay>
        <TextSmallCont>
            <a href="#"><h3>Consult Now</h3></a>
            <a href="appointment"><h3>Get Appointment</h3></a>
        </TextSmallCont>
        <TitleContainer>
            <h2>Consult doctors for any of your concerns</h2>
        </TitleContainer>
        <ConsernContainer>
            <a href="#"><ConcernSmallContainer backgroundImage="Acne.png" description="SkinCare"/></a>
            <a href="#"><ConcernSmallContainer backgroundImage="coughing.png" description="Coughing"/></a>
            <a href="#"><ConcernSmallContainer backgroundImage="mentalillness.png" description="Depression"/></a>
            <a href="#"><ConcernSmallContainer backgroundImage="period.png" description="Pregnency"/></a>
        </ConsernContainer>
        <AppointTitleContainer>
            <h2>Book appointments for inclinc check ups</h2>
        </AppointTitleContainer>
        <ConsernContainer>
            <a href="#"><ConcernSmallContainer backgroundImage="generaldoctor.jpg" description="General Doctor"/></a>
            <a href="#"><ConcernSmallContainer backgroundImage="dentist.jpg" description="Dentist"/></a>
            <a href="#"><ConcernSmallContainer backgroundImage="nutritionist.jpg" description="Nutritionist"/></a>
            <a href="#"><ConcernSmallContainer backgroundImage="pediatrician.jpg" description="Pediatrician"/></a>
        </ConsernContainer>
        {/* <Footer>
            <h3>Designed By Aravinth Kumar</h3>
        </Footer> */}
        </>
    )
}

export default Section


const ContainerWrapper = styled.div`
    display: flex;
    width: 1180px;
    justify-content: center;
    zoom: 1;
    margin: auto;
    position: relative;
    @media (max-width: 768px) {
        width:100%;
        position: relative;
        align-items: center;
        justify-content: center;
        overflow-X:hidden;
        justify-content:space-around;     
        margin-left:35px;
    }  
`


const AppointTitleContainer = styled.div`
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    height: 64px;
    display: flex;
    color: #000;
    width: 1180px;
    margin:auto;
    margin-top: -40px;
    zoom: 1;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    @media (max-width: 768px) {
        width:115%;
        position: relative;
        font-size: 0.8rem;
        margin-top:200px;
    }
`



const ConsernContainer = styled.div`
    border-radius: 32px;
    height: 350px;
    display: flex;
    color: #fff;
    width: 1180px;
    align-items: center;
    justify-content: space-between;
    zoom: 1;
    margin: auto;
    margin-top:-40px;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    @media (max-width: 768px) {
        width:115%;
        position: relative;
        background-size: cover;
        margin:auto;
        display: grid;
        flex-direction: column;
        grid-template-columns:repeat(2,1fr);
    }   
    a{
        text-decoration: none;
        justify-content:space-between;
        zoom: 1;
        position: relative;
        margin: auto;
    }
    
`



const TitleContainer = styled.div`
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    height: 64px;
    display: flex;
    color: #000;
    width: 1180px;
    margin:auto;
    margin-top:-10px;
    zoom: 1;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    @media (max-width: 768px) {
        width:115%;
        position: relative;
        font-size: 0.8rem;
    }

`


const TextSmallCont = styled.div`
    h3{
        @media (max-width: 768px) {
            font-size: 1.3rem;
        }
        font-size: 1.3rem;
    }
    a{
        text-decoration: none;
    }
    border-radius: 32px;
    display: flex;
    color: black;
    width: 1180px;
    text-decoration: none;
    zoom: 1;
    margin: auto;
    margin-top: -20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
    font-size: 1.5rem;
    background-repeat: no-repeat;
    background-size: cover;
    @media (max-width: 768px) {
        width:115%;
        position: relative;

    }

`



const Container = styled.div`
        background: linear-gradient(
        105.21deg,#3743ab 2.85%,#141b56 99.41%);
        border-radius: 32px;
        height: 350px;
        display: flex;
        color: #fff;
        width: 1180px;
        box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.1);
        zoom: 1;
        margin: auto;
        margin-top: 100px;
        position: relative;
        background-repeat: no-repeat;
        background-size: cover;
        background-image:url('/Images/wrapImage.jpg');
        @media (max-width: 768px) {
            width:97%;
            align-items: center;
            justify-content: center;
            position: relative;
            background-size: cover;
            box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.1);
            margin:auto;
            margin-top: 72px;
            
        }
        
`

const ContainerDisplay = styled.div`
        a{
            display: flex;
            margin: auto;
            position: relative;
           
        }
   
        border-radius: 32px;
        height: 300px;
        display: flex;
        color: #fff;
        width: 1180px;
        zoom: 1;
        margin: auto;
        position: relative;
        background-repeat: no-repeat;
        background-size: cover;
        @media (max-width: 768px) {
            width:115%;
            position: relative;
            background-size: cover;
        }
        
`
// const Container = styled.div`
//     width:60vw;
//     height: 45vh;
//     margin: 5rem auto;
//     display: grid;
//     gap: 2rem;
//     background-color: #fff;
//     border-radius: 1rem;
//     padding: 1rem 2rem;
//     box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.1);
//     background-position: center;
//     background-repeat: no-repeat;
//     background-image:url('/Images/wrapImage.jpg');
//     background-size: cover;
//     @media (max-width: 768px) {
//         background-image:url('/Images/min.webp');
//     }

// `
