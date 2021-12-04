import React from 'react'
import styled from 'styled-components'
import {FaBars} from 'react-icons/fa'
import { useState } from 'react';
import CloseIcon  from '@material-ui/icons/Close'

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);

    return (
        <Container>
            <Title><a href="/">InstaDoc</a></Title>
            <Navbar>
                <a href="appointment">Find Doctors
                    <p>Book an appointment</p>
                </a>
                <a href="#">Video Consult
                    <p>consult now</p>
                </a>
            </Navbar>
            <RightMenu>
                <a href="login">Login</a>
                <a href="#">Sign Up</a>
            </RightMenu>
            <CustomMenu>
                <button type="button" className="nav-toggle" onClick={() => setBurgerStatus(true) }>
            <FaBars />
            </button>
            </CustomMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick = {()=>setBurgerStatus(false)}/>
                </CloseWrapper>
                <li><a href="#">Find Doctors<p>Book an appointment</p></a></li>
                <li><a href="#">Video Consult
                    <p>consult now</p></a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#">Sign Up</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header


const Title = styled.p`
    font-size: 1rem;
    a{
        font-weight: 600;
        text-transform: capitalize;
        padding : 0 10px;
        flex-wrap: nowrap;
        text-decoration: none;
        color: #000000;
        font-weight: bold;
        cursor: pointer;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }
    a:hover{
        color: #00A0FF;
    }
`
const RightMenu = styled.div`

    display: flex;
    align-items : center;
    a{
        font-weight: 600;
        text-transform: capitalize;
        padding : 0 10px;
        flex-wrap: nowrap;
        text-decoration: none;
        color: #000000;
        font-weight: bold;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }
    a:hover{
        color: #00A0FF;
    }
    @media (max-width: 768px){
        display: none;
    }
`
const BurgerNav = styled.div`
    @media (min-width: 768px){
        display: none;
    }
    p{
    font-size: 0.5rem;
    font-weight: normal;
    text-align: center;
    justify-content: center;
    margin-top: 1px;
    display: flex;
    }
    position : fixed;
    top :0;
    bottom:0;
    right:0;
    display: flex;
    background: #EEF1F3;
    width: 30vw;
    list-style:none;
    padding:20px;
    display:flex;
    flex-direction:column;
    box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.1);
    border-radius: 2rem;
    text-align:center;
    transform : ${props => props.show ? 'translateX(0)': 'translateX(100%)' };
    transition :transform 0.2s ;
    li{
        padding:15px 0;
        border-bottom:1px solid #E6E6E6;
        border-top:1px solid #E6E6E6;
        
    }

    a{
        font-weight:600;
        font-weight: bold;
        text-decoration: none;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }
    a:hover{
        color: #00A0FF;
    }

`

const CustomMenu = styled.div`
    cursor : pointer;
    color: #000000;
    .nav-toggle{
        @media (min-width: 768px){
            display: none;
            font-size: 1.5rem;
            color: var(--clr-primary-5);
            background: transparent;
            border-color: transparent;
            cursor: pointer;
        }
    }
`

const CustomClose =styled(CloseIcon)`
    cursor:pointer;
`

const CloseWrapper = styled.div`
    display : none;
    justify-content:flex-end;
    @media (max-width: 768px){
        display: flex;
    }
`


const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content:space-between;
    padding: 0 20px;
    font-size: 1rem;
    font-weight: bold;
    top: 0;
    left: 0;
    right: 0;
    z-index:1;
    background-color: #EEF1F3;
    box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.1);
    overflow-X: hidden;
`



const Navbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position:relative;
    flex:1;
    a{
        font-weight: 600;
        text-transform: capitalize;
        padding : 0 10px;
        flex-wrap: nowrap;
        text-decoration: none;
        color: #000000;
        font-weight: bold;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }
    a:hover{
        color: #00A0FF;
    }
    @media (max-width: 768px) {
     display: none;

    }
    p{
    font-size: 0.5rem;
    font-weight: normal;
    align-items: center;
    justify-content: center;
    margin-top: 1px;
    display: flex;
    position:relative;
    }
`

