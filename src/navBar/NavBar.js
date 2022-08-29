

import React from 'react';
import { NavLink } from "react-router-dom";

import { useNavigate } from 'react-router-dom'
import "../navBar/NavBar.css"

import { BiSearch } from "react-icons/bi";
import { MdOutlineAddShoppingCart } from "react-icons/md";


function NavBar() {
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : "normal",

    }
  }



  const navigate = useNavigate()

  const auth = localStorage.getItem("user");




  const LogOut = () => {
    alert("LOGOUT SUCCESSFUL")
    localStorage.clear();
    navigate("/login")

  }

  const searchdata = () => {
    navigate("/search")
  }



  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-sm bg-light" style={{ backgroundColor: "#1AC073" }}>
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="#" style={{ color: 'red', fontWeight: "bold", fontSize: 30 }}>FOODI
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            {



              (auth) ?



                <>

                  <ul className="navbar-nav m-auto">

                    <li className="nav-item" >
                      <NavLink style={navLinkStyle} className="nav-link active hove  fw-bold  styleText" aria-current="page" to="/">Home</NavLink>
                    </li>

                    <li className="nav-item" >
                      <NavLink style={navLinkStyle} className="nav-link active hove fw-bold  styleText" aria-current="page" to="/About">About</NavLink>
                    </li>

                    <li className="nav-item" >
                      <NavLink style={navLinkStyle} className="nav-link active hove fw-bold styleText" aria-current="page" to="/Service">Service</NavLink>
                    </li>

                    <li className="nav-item" >
                      <NavLink style={navLinkStyle} className="nav-link active hove fw-bold styleText" aria-current="page" to="/Contact">Contact</NavLink>
                    </li>


                    <li className="nav-item">
                      <NavLink style={navLinkStyle} className="nav-link active hove   fw-bold   styleText" onClick={() => LogOut()} aria-current="page" to="/LogOut">LogOut</NavLink>
                    </li>

                  </ul>

                  <div className="d-flex " role="search">
                    <li className="nav-item" style={{ display: "flex", flexDirection: "row", marginRight: "10px" }}>


                      <button type="button" class="btn btn-dark text-bold" onClick={() => searchdata()} style={{ marginRight: "10px" }} >
                        <BiSearch style={{ fontSize: 20, fontWeight: "bold" }} />
    Search</button>

                      <button type="button" class="btn btn-light" style={{ display: "flex", flexDirection: "row", }}>
                        <MdOutlineAddShoppingCart style={{ fontSize: 20, fontWeight: "bold" }} />


                        <NavLink className="nav-link active hove   fw-bold   styleText" aria-current="page" to="/addTocart">AddToCart</NavLink>
                      </button>

                    </li>



                  </div>

                </>

                :
                <>

                  <ul className="navbar-nav ms-auto">

                    <li className="nav-item" style={{ display: "flex", flexDirection: "row", marginRight: "10px" }}>


                      <button type="button" class="btn btn-outline-dark text-bold   styleBtn" style={{ marginRight: "10px" }} >
                        <NavLink className="nav-link active hove   fw-bold  styleBtn " aria-current="page" to="/login" >Login</NavLink>


                      </button>

                      <button type="button" class="btn  btn-outline-dark text-bold  styleBtn" style={{ display: "flex", flexDirection: "row", border: "1px solid black" }}>
                        <NavLink className="nav-link active hove   fw-bold   styleBtn" aria-current="page" to="/signUp">SignUp</NavLink>
                      </button>

                    </li>
                  </ul>
                </>










            }






          </div>
        </div>
      </nav >










    </div >













  );
}

export default NavBar;


