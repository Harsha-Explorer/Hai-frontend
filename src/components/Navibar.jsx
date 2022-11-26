import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../App.css'
import SearchIcon from '@mui/icons-material/Search';
import {Link} from 'react-router-dom';

export default function Navibar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <a class="navbar-brand" href="/brand" style={{'fontFamily':'serif','fontSize':'25px','paddingLeft':'0%'}}>Hai</a>
            <form class="d-flex" style={{'alignItems':'center'}}>
              <input class="p-2 mw-100" type="search" placeholder="Search" aria-label="Search" style={inputStyle}/>
              {/* <button class="btn btn-outline-light" type="button" id="button-addon2">Search</button> */}
              <button  class="btn btn-outline-light" type="button" id="button-addon2"><SearchIcon/></button>
            </form>
          </div>
          <div class="collapse navbar-collapse justify-content-evenly" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mb-2 mb-lg-0" style={{'gap':'35px'}}>
            <li class="nav-item active" >
              <Link class="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            
            <li class="nav-item">
              <Link class="nav-link" to="/contact">Contact</Link>
            </li>

            
            {
              sessionStorage.getItem('user-info')?
              <>
                <li class="nav-item">
                  <Link class="nav-link" to="/about">About</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/cart">Cart</Link>
                </li>
              </>
              :
              <>
                <li class="nav-item">
                  <Link class="nav-link" to="/login">Login</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/signup">Signup</Link>
                </li>
              </>
            }
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="/dropdown" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                More
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="/exchange">Exchange</a>
                <a class="dropdown-item" href="/action">action</a>
                
                {sessionStorage.getItem('user-info')?
                <>
                  <hr class="dropdown-divider" />
                  <Link class="dropdown-item" to="/logout">Logout</Link>
                </>
                : null
                }
              </div>
            </li>
          </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
const inputStyle={
  'width':'100%',
  'fontFamily':'cursive'
}