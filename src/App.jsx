import React from 'react'
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home'
import Crypto from './pages/Crypto.jsx'

function App() {
  return (
    <div className='app font-space-grotesk'>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/coin" element={<Crypto />}>
        <Route path=":coinId" element={<Crypto />}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
