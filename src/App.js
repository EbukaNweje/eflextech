import React from 'react'
import "./CSS/Form.css"
import Registeruser from './page/Registeruser'
import Useradd from './page/Useradd'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Useradd />}/>
      <Route path='/Registeruser' element={<Registeruser/>}/>
    </Routes>
  </BrowserRouter>
    </div>
  )
}

export default App