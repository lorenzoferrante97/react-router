// import { useState } from 'react'
// import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import Homepage from './pages/Homepage';
import AboutUs from './pages/AboutUs';
import Posts from './pages/Posts';

function App() {

  return (

    <BrowserRouter>
      <Routes>

        {/* layout */}
        <Route Component={ DefaultLayout }>

          <Route to="/" Component={ Homepage }></Route>
          <Route to="/about-us" Component={ AboutUs }></Route>
          <Route to="/posts" Component={ Posts }></Route>

        </Route>

      </Routes>
    </BrowserRouter>

  )
}

export default App;

// start code
