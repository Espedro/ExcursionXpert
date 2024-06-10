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
import CreatePlace from "./pages/AddPlace"
import AddPlace from "./pages/AddPlace"
import EditPlace from "./pages/EditPlace"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/places/:placeID" element={<PlaceDetails />} />
        <Route path="/places" element={<Places />} />
        <Route path="/addplace" element={<AddPlace />} />
        <Route path="/editplace/:placeID" element={<EditPlace />} />
      </Routes>
    </>
  )
}

export default App
