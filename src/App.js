import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import {Content} from "./Navbar/Content";
import {Home} from "./Navbar/Home";
import {Main} from "./Navbar/Main";
import  {Dom}  from './Dom';

function App() {
  return (
    <div className="App">
      <Dom/>
      <Routes>
        <Route  path='/' element={<Home/>}></Route>
        <Route  path='content' element={<Content/>}></Route>
        <Route  path="main" element={<Main/>}></Route>
      </Routes>
      <p> "This is how react-router-dom works;"</p>
      <p className='paragraph'> 'To check further documentation refer this Website'--&nbsp; <a href="https://blog.webdevsimplified.com/2022-07/react-router/">Link</a> </p>
    </div>
  );
}

export default App;
