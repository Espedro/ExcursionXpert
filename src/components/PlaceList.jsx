// src/pages/ProjectListPage.jsx

import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const API_URL = "https://espedro-server.adaptable.app"

function PlaceList() {
  const [places, setPlaces] = useState(null)

  const getAllPlaces = async () => {
    try {
      const response = await axios.get(`${API_URL}/places`)

      setPlaces(response.data)

      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllPlaces()
  }, [])

  return (
    <div>
      {places ? (
        places.map((place) => (
          <div>
            <Link to={"/places/" + place.id}>
              <img src="https://www.gohawaii.com/sites/default/files/styles/image_gallery_bg_xl/public/hero-unit-images/10759.jpg?itok=RVKya-L8" alt="" style={{width : "40vw", height: "30vh", objectFit: "contain"}} />
              <h2>{place.nameOfPlace}</h2>
              <p>Country: {place.country}</p>
              <p>City: {place.city}</p>
              <p>Based: {place.based}</p>
              <p>Best season to go: {place.bestSeasonToGo}</p>
             
              
            </Link>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default PlaceList
