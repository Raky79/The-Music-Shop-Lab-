import React from 'react';
import './App.css';
import MusicShopContainer from './containers/MusicShopContainer';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Basket from './components/Basket';
import styled from 'styled-components';

const Title = styled.h1`
text-align: center;
font-size: 2em;
color: #A91079;
background-color:#2E0249;
`



function App() {
  return (
    <>
    <Title>Music Shop</Title>
    <MusicShopContainer/>
    </>
  );
}

export default App;
