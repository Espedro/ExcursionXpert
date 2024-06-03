import "./App.css"
import axios from "axios"
import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import PlaceDetails from "./pages/PlaceDetails"
import Places from "./pages/Places"

function App() {
  return (
    <>
      
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/place/:placeID" element={<PlaceDetails />} />
        <Route path="/places" element={<Places />} />
      </Routes>
    </>
  )
}

export default App
