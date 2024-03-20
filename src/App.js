import React from 'react'
import Card from './Card'
import Chart from './Chart'
import Navbar from './Navbar'
import Sidbar from './Sidbar'
import Table from './Table'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <>
     <BrowserRouter>
      <Navbar/>
      <Sidbar/>
      {/* <Card/>  */}
      <Routes>
      <Route path="/" element={<Table/>} />
      <Route path="/table" element={<Table/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

