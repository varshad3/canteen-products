import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import React, { useEffect, useState } from 'react';
import Home from './Home';



function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState("")

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}/>
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />}/>

      </Routes>
    </BrowserRouter>
    </div>
    
      
  
  );
}

export default App;
