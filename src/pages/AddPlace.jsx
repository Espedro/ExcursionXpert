import { useState, useEffect } from "react"
import CarouselHero from "../components/CarouselHero"
import { Link, useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import axios from "axios"
const API_URL = "https://espedro-server.adaptable.app"

function AddPlace(props) {
  const [place, setPlace] = useState("")
  const [country, setCountry] = useState("")
  const [city, setCity] = useState("")
  const [based, setBased] = useState("")
  const [bestSeasonToGo, setbestSeasonToGo] = useState("")
  const [description, setDescription] = useState("")

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(API_URL + "/places", {
        nameOfPlace: place,
        country,
        city,
        based,
        bestSeasonToGo,
        description,
      })
      console.log(response)
      navigate("/places")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="container">

<div> <CarouselHero /> </div>

      <br />
    <center>  <h1> Add a Place</h1> </center>

      <form onSubmit={handleSubmit} className="row g-3 form">

      <div className="col-12">

        <label className="form-label label">Place</label>
        <input
          type="text"
          name="Place"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          className="form-control input"
        />

        </div>


        <div className="col-12">

        <label className="form-label label">Country</label>
        <input
          type="text"
          name="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="form-control input"
        />
        </div>


        <div className="col-12">

        <label className="form-label label">City</label>
        <input
          type="text"
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="form-control input"
        />

        </div>


        <div className="col-12">

        <label className="form-label label">Based</label>
        <input
          type="text"
          name="based"
          value={based}
          onChange={(e) => setBased(e.target.value)}
          className="form-control input"
        />

        </div>
        
        <div>

        <label className="form-label label">Best Season To Go</label>
        <input
          type="text"
          name="bestSeasonToGo"
          value={bestSeasonToGo}
          onChange={(e) => setbestSeasonToGo(e.target.value)}
          className="form-control input"
        />
        </div>


        <div className="col-12">
        <label className="form-label label">Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-control input"
        />
        </div>
        <div className="col-12">

        <button type="submit" className="btn btn-primary button">Submit</button>

        </div>
      </form>
    </div>
  )
}

export default AddPlace
