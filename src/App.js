import React from 'react';
import './App.css';
import MusicShopContainer from './containers/MusicShopContainer';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Basket from './components/Basket';
import styled from 'styled-components';

const Title = styled.h1`
text-align: center;
font-size: 2em;
color: #F806CC;
background-color:#2E0249;
font-family: "Agrandir Sans";
`


function App() {
  return (
    <>
    <Title>⚡️Valhalla Records⚡️</Title>
    <MusicShopContainer/>
    </>
  );
}

export default App;
