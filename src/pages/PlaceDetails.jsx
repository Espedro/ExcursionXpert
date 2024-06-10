import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import Navbar from "../components/Navbar"
const API_URL = "https://espedro-server.adaptable.app"

function PlaceDetails() {
  const [place, setPlace] = useState(null)
  const { placeID } = useParams()
  const navigate = useNavigate()

  const getPlaceDetails = async () => {
    try {
      const response = await axios.get(`${API_URL}/places/${placeID}`)

      setPlace(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPlaceDetails()
  }, [])

  const handleDelete = async () => {
    try {
      const wantToDelete = confirm("Do you really want to delete?")

      if (wantToDelete) {
        const response = await axios.delete(`${API_URL}/places/${placeID}`)
        console.log(response)
        navigate("/places")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="container">
      <>
      <br />
      <br />
      
        {place ? (
          <div className="col-12">
            <center>
            <img
              src={place.image ||
                "https://www.gohawaii.com/sites/default/files/styles/image_gallery_bg_xl/public/hero-unit-images/10759.jpg?itok=RVKya-L8"}
              alt=""
              className="img-fluid"
             
            />

</center>
            <br />
            <center>
            <h1> {place.nameOfPlace}</h1>

            <p>
              {" "}
              {place.country} / {place.city}{" "}
            </p>

            <p>
              {" "}
              {place.based} / {place.bestSeasonToGo}{" "}
            </p>
            <p> {place.description} </p>

            </center>

            <div className="row">
            
            <div className="col-6">

            <Link to={`/editplace/${placeID}`}>
              <button type="button" className="btn btn-secondary button"> Edit </button>
            </Link>
            </div>


            <div className="col-6">
            <button onClick={handleDelete}  type="button" className="btn btn-secondary button1">
              Delete{" "}
              <img
                src="https://cdn1.iconfinder.com/data/icons/hawcons/32/699013-icon-27-trash-can-512.png"
                alt="delete button"
                style={{ width: "15px", height: "15px", cursor: "pointer" }}
              />
            </button>
            </div>

            </div>

          </div>
        ) : (
          <p>Loading</p>
        )}
      </>
    </div>
  )
}

export default PlaceDetails
