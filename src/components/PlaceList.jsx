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
    <div className="row">
      {places ? (
        places.map((place) => (
          <div className="col-lg-3" >
            <Link to={"/places/" + place.id} className="link">
              <div>
                <div className="card">
                  <img
                    src={
                      place.image ||
                      "https://www.gohawaii.com/sites/default/files/styles/image_gallery_bg_xl/public/hero-unit-images/10759.jpg?itok=RVKya-L8"
                    }
                    alt=""
                    className="card-img-top img"
                  />

                  <div className="card-body">
                    <p className="card-title"> {place.nameOfPlace} </p>
                    <p className="card-subtitle mb-2 text-body-secondary">Country: {place.country}</p>
                    <p className="card-text">City: {place.city}</p>
                    <p className="card-text">Based: {place.based}</p>
                    <p className="card-text">Best season to go: {place.bestSeasonToGo}</p>
                    {/* <p> Description: {place.description}</p> */}
                  </div>
                </div>
              </div>
            </Link>
            <br />
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default PlaceList
