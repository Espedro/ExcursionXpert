import { NavLink } from "react-router-dom"

function Navbar() {
  return (

    <div className="container">

    <nav className="navbar navbar-expand-lg nav">
    <div className="container-fluid">
    <img className="logo" />

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

   

    <div className="collapse navbar-collapse col-10" id="navbarSupportedContent">



    
    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">

    <li className="nav-item nav-link" >   <NavLink to={"/"} className={"navul"} > Home Page </NavLink> </li>

    <li className="nav-item nav-link ">   <NavLink to={"/about"} className={"navul"} > About </NavLink> </li>

    <li className="nav-item nav-link">   <NavLink to={"/places"} className={"navul"} >Places </NavLink> </li>

    <li className="nav-item nav-link">  <NavLink to={"/addplace"} className={"navul"} >Add Place </NavLink> </li>

    </ul>


    </div>


    </div>
    </nav>

   




    
    </div>
  )
}

export default Navbar
