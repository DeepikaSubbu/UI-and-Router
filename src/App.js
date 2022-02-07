import './App.css';
import React from 'react';
import { BrowserRouter, Route,  Routes , } from 'react-router-dom';
import Main from './Main';





export default function App() {
  return (
  
    <BrowserRouter>
    
    <Routes>
    <Route path="/" element={<Main/>}/>
    <Route path="/admin" element={<Admin/>}/>
    <Route path="/student" element={<Student/>}/>
    <Route path="/contactus" element={<ContactUs/>}/>
    <Route path="/aboutus" element={<AboutUs/>}/>
    <Route path="/branches" element={<Branches/>}/>
    </Routes>
    </BrowserRouter>
    

  );
}


function ContactUs(){
  return(
    <>
    <h3>ContactUs Component</h3>
    </>
  )
}

function AboutUs(){
  return(
    <>
    <h3>AboutUs Component</h3>
    </>
  )
}


function Branches(){
  return(
    <>
    <h3>Branches Component</h3>
    </>
  )
}

function Admin(){
  return(
    <>
    <h3>Admin Component</h3>
    </>
  )
}

function Student(){
  return(
    <>
    <h3>Student Component</h3>
    </>
  )
}








