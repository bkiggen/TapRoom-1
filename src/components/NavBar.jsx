import React from "react";
import { Link } from "react-router-dom";


function NavBar(){

    var navBar = {
        // whiteSpace: "normal",
        // textAlign: "center",
        // wordBreak: "break-all",
        
        margin: "0 50px 0 50px"
    };
   
    var navLink = {
        color: "black",
    };
  return (

    <nav className="navbar navbar-expand-lg navbar-toggleable-lg navbar-light bg-white border-bottom box-shadow mb-3">
      <div className="container">
        <a className="navbar-brand" asp-area="" asp-controller="Home" asp-action="Index" href="\">&rew's Tap Room</a>
        <button style={navBar} className="btn btn-info nav-link text-info" ><Link style={navLink} to="/Student">Beers</Link></button>
            
        <div className="navbar-collapse collapse d-lg-inline-flex flex-lg-row">
          <ul className="navbar-nav flex-grow-1 mr-auto">
            <li className="nav-item">
              <button style={navBar} className="btn btn-info nav-link text-light" ><Link style={navLink} to="/Student">Add a new Beer</Link></button>
                    
            </li>


          </ul>
        </div>   
      </div>
    </nav>
  );
}

export default NavBar;