import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './Header';
import { Search } from '@material-ui/icons';


const url = 'http://127.0.0.1:8000/doctor-details/';

const UseEffectFetchData = () => {
  const [users,setUsers] = useState([]);
  const [search,setSearch] = useState('');
  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
  }
    useEffect(() => {
      getUsers();
    },[]);

  return (
  <>  
      <Header />
            <SearchContainer>
                <SearchBarContainer>
                    <a><Search/></a>
                    <SearchInput placeholder="Search for a doctor, clinic, or specialty or city" onChange={(e)=>{
                        setSearch(e.target.value); 
                    }} />
                </SearchBarContainer> 
            </SearchContainer>

      <Container>
        {users.filter(user=>{
          if (search === '') {
            return ;
          }
          else if(user.DoctorName.toLowerCase().includes(search.toLowerCase())){
            return user;
          }
          else if(user.DoctorCity.toLowerCase().includes(search.toLowerCase())){
            return user;
          }
          else if(user.DoctorSpecialization.toLowerCase().includes(search.toLowerCase())){
            return user;
          }
          else if(user.DoctorClinic.ClinicName.toLowerCase().includes(search.toLowerCase())){
            return user;
          }
          else{
            return ;
          }
        }).
        map((user => {
          const { id, DoctorName ,DoctorSpecialization,DoctorCity,DoctorPhone,DoctorClinic,DoctorImage } = user;
          return (
            <AppointmentContainer key={id}>
              <AppointmentCont>
              <AppointmentCardHeader>
                <h3>Dr.{DoctorName}</h3>
                <h4>{DoctorSpecialization}</h4>
                <h5>{DoctorClinic.ClinicName}</h5>
                <h5>{DoctorClinic.ClinicAddress}</h5>
                <h5>{DoctorCity}</h5>
                <h5>{DoctorPhone}</h5>
              </AppointmentCardHeader>
              </AppointmentCont>
              <BookButton>
              <button type="button"><a href="book">Book</a></button>
              <button type="button"><a href="consult">Consult</a></button>
                </BookButton>
              
            </AppointmentContainer>
          );
        }))} 
      </Container>
  </>
  );
};


export default UseEffectFetchData;



const SearchContainer = styled.div`
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
    a{
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


const Profile = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-left: 20px;
`

const Container = styled.div`
  display: flex;
  height: 100%;
  weight: 100%;
  flex-direction: column;
  margin: auto;
  gap: 16px;

`


const AppointmentCardHeader = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    gap: 0;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    color: #000;
    h3{
        font-size: 1.5rem;
    }
    h4{
        font-size: 1rem;
        margin-top: -20px;
    }
    h5{
        font-size: 0.8rem;
        margin-top: -16px;
        
    }
    img{
        align-self: left; 
    }

  }
`

const BookButton = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:100px;
    height:300px;
    margin-left:-100px;
    margin-right:80px;
    border-radius:10px;
    button{
        width:100%;
        height:50px;
        align-items:center;
        justify-content:center;
        margin-top:20px;
        border-radius:16px;
        background-color:white;
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    }
    position: relative;
    a{
        color:black;
        margin-left:10px;
        font-size:1rem;
        font-weight:bold;
    }

    @media (max-width: 768px) {
        margin-top:-100px;
        margin:auto;

        a{
          font-size:0.8rem;
        }
    }
`


const AppointmentCont = styled.div`
    background-color:white;
    border-radius: 32px;
    height: 230px;
    display: flex;
    color: #fff;
    width: 800px;
    zoom: 1;
    margin: auto;
    gap: 16px;
    align-items: center;
    flex-direction: column;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    @media (max-width: 768px) {
        width:110%;
        position: relative;
        background-size: cover;
        margin:auto;
        height: 300px;
        margin-left: 10px;
        margin-right: 14px;
    }

`

const AppointmentContainer = styled.div`
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
    position: relative;
    background-repeat: no-repeat;
    align-items: center;
    justify-content: center;
    background-size: cover;
    @media (max-width: 768px) {
        width:110%;
        position: relative;
        background-size: cover;
        box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.1);
        margin:auto;
        margin-left: 10px;
        margin-right: 14px;
        button{
            display:grid;
            grid-template-columns:repeat(2,1fr);
        }
    }   
    p{
        font-size: 10px;
    }

`