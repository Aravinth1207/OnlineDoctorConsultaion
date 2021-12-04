import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import { Search } from '@material-ui/icons';



function Appointment (){

    return (
        <>
            <Header />
            <Container>
                <SearchBarContainer>
                    <a href="#"><Search/></a>
                    <SearchInput placeholder="Search for a doctor, clinic, or specialty or city" />
                </SearchBarContainer> 
            </Container>

        </>   

    );
    
}


export default Appointment



const Container = styled.div`
    border-radius: 32px;
    height: 80px;
    display: flex;
    color: #fff;
    width: 1180px;
    zoom: 1;
    margin: auto;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    @media (max-width: 768px) {
        width:110%;
        position: relative;
        background-size: cover;
        margin:auto;
        margin-top: 72px;
        margin-left: 10px;
        margin-right: 14px;
    }
`


const SearchBarContainer = styled.div`
    background: linear-gradient(
    105.21deg,#3743ab 2.85%,#141b56 99.41%);
    border-radius: 20px;
    height: 60px;
    display: flex;
    color: #fff;
    width: 400px;
    box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.1);
    zoom: 1;
    margin: auto;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    @media (max-width: 768px) {
        width:100%;
        position: relative;
        background-size: cover;
        box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.1);
        overflow: hidden;
        margin:auto;
    }
    align-items: center;
    a {
        margin-left: 20px;
        color: #fff;
    }
`

const SearchInput = styled.input`
    margin-left: 5px;
    width: 300px;
    height: 32px;
    border-radius: 12px;
    border:linear-gradient(
        105.21deg,#3743ab 2.85%,#141b56 99.41%);
    font-size: 14px;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    font-weight: 500;
    outline: none;
    padding-left: 10px;
    @media (max-width: 768px) {
        width:75%;
        font-size: 14px;

    }
`






