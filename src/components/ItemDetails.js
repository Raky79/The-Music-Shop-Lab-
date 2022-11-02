import React from 'react';
import styled from 'styled-components';


const Button = styled.button `
font size: 1em;
padding: 1em;
margin: 0.5em;
color:#A91079;
border: 2px solid #A91079;
background: #F806CC;
&:hover {
  background: #96BAFF;
}
`

const ItemDetails = ({item, clickHandler}) => {
   
    return (
        <div>
        <h2>{item.title}</h2>
        <h3>{item.band}</h3>
        <h3>{item.genre}</h3>
        <h3>{item.price}</h3>
        <Button onClick={() => {
            clickHandler(item)
        }}>Add to Basket</Button>
        </div>
    )
}




export default ItemDetails; 