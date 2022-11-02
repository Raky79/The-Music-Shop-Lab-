import React, {useState} from 'react';
import ItemDetails from '../components/ItemDetails';
import ItemsList from '../components/ItemsList';
import Basket from '../components/Basket';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import styled from 'styled-components';



const MusicShopContainer = () => {
    const user1 = {name:"John", last_name: "Smith", age: 37}
    const shopItems = [
        {title:"Head Music", band: "Suede", genre: 'Pop', price: 20},
        {title:"Load", band: 'Metallica', genre: 'Metal', price: 30},
        {title:"Siamese Dream", band: 'The Smashing Pumpking', genre: 'Rock', price: 40}
    ]

    const[user, setUser] = useState(user1)
    const[items, setItems] = useState(shopItems)
    const[basket, setBasket] = useState([])


    const clickHandler = (item) =>{
    const copyBasket = [...basket];
    copyBasket.push(item);
    setBasket(copyBasket)
}


    return (
        <>
    <Router>
      <Routes>
        <Route path="/" element={<ItemsList items={items} clickHandler={clickHandler}/>}/>
        <Route path="/basket" element={<Basket basket={basket}/>}/>
      </Routes>
    </Router>
        </>
    )
}

export default MusicShopContainer;