import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav>
      <NavLink to={"/"}> Home Page </NavLink>
      <NavLink to={"/about"}> About </NavLink>
      <NavLink to={"/places"}>Places </NavLink>
    </nav>
  )
}

export default Navbar
