import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import Header from './Header';
import axios, * as Axios from 'axios';

export default class Home extends React.Component {
    componentDidMount() {
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
        axios.get('user',config).then(
            res => {
                console.log(res);
            }
        )
    }
    render() {
    return (
        <>
            <Section/>
            <Header />
        </>
    )
}
}


