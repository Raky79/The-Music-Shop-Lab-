import React from 'react';
import styled from 'styled-components';

const Basket = ({basket}) => {
    const basketItems=basket.map((item,index) =>{
        return (
            <li key={index}>
            <h2>{item.title}</h2>
            <h2>{item.band}</h2>
            <h2>{item.genre}</h2>
            <h2>{item.price}</h2>

            </li>
        )
    })
    return (
        <>
        <h1>You have: {basket.length} items</h1>
        <ul>{basketItems}</ul>
        </>

    )
}



export default Basket; 