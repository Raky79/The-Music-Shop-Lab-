import React from 'react';
import ItemDetails from './ItemDetails';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


const ItemsList = ({items, clickHandler}) => { 
    const shopItems = items.map((item, index) => {
        return <ItemDetails key={index} item={item} clickHandler={clickHandler}/>;

    } )

    return (
    <div>
        <h1> Records List: </h1>
        <ul>
            {shopItems}
        </ul>
        <Link to='/basket'>View Basket</Link>
    </div>
    )
}




export default ItemsList; 