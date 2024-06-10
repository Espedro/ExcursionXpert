import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import axios from "axios"
const API_URL = "https://espedro-server.adaptable.app"

function EditPlace(props) {
  const [place, setPlace] = useState("")
  const [country, setCountry] = useState("")
  const [image, setImage] = useState("")
  const [city, setCity] = useState("")
  const [based, setBased] = useState("")
  const [bestSeasonToGo, setbestSeasonToGo] = useState("")
  const [description, setDescription] = useState("")

  const { placeID } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const getEditPlace = async () => {
      try {
        const response = await axios.get(`${API_URL}/places/${placeID}`)
        console.log(response)
        setPlace(response.data.nameOfPlace)
        setCountry(response.data.country)
        setCity(response.data.city)
        setBased(response.data.based)
        setbestSeasonToGo(response.data.bestSeasonToGo)
        setDescription(response.data.description)
        if (response.data.image) {
          setImage(response.data.image)
        }
      } catch (error) {
        console.log(error)
      }
    }
    getEditPlace()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.put(`${API_URL}/places/${placeID}`, {
        nameOfPlace: place,
        country,
        city,
        based,
        bestSeasonToGo,
        description,
        image
      })
      console.log(response)
      navigate("/places")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="container">
      <br />

     <center> <h1> Update Place</h1> </center>

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

        <div className="col-12">

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
        <label className="form-label label">Image:</label>
        <input
          type="url"
          required
          name="description"
          value={image}
          onChange={(e) => setImage(e.target.value)}
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

export default EditPlace
