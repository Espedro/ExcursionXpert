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
            <Link to={"/places/" + place.id}></Link>
            <h2>{place.nameOfPlace}</h2>
            <p>{place.bestSeasonToGo}</p>
            <p>{place.city}</p>
            <p>{place.country}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default PlaceList
