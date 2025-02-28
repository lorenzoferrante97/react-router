// import { useState } from 'react'
// import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout'

function App() {

  return (

    <BrowserRouter>
      <Routes>

        {/* layout */}
        <Route Component={ DefaultLayout }>


        </Route>
        
      </Routes>
    </BrowserRouter>

  )
}

export default App;

// start code
