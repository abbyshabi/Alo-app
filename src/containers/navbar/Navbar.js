import React from 'react'
import './navbar.css'


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
    
  }
function Navbar() {
    return (
        <div>
            <div class="topnav" id="myTopnav">
                <a href="/" class="active">Home</a>
                <a href="/about">About</a>
                <a href="/stories">Stories</a>
                <a href="/characters">Characters</a>
                <a href="javascript:void(0);" class="icon" onClick= {myFunction}>
                  <i class="fa fa-bars"></i>
                </a>
            </div>
        </div>
        
    )

   
}
export default Navbar;