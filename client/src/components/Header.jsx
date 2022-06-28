import React from 'react'
import { Link } from 'react-router-dom'
import "../style/header.css"
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { Button } from '@mui/material';
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import SearchIcon from '@mui/icons-material/Search';

export default function Header({name,setName}) {

  const logout =async () => {

    await fetch('http://localhost:8081/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'

        
        })


        setName('');
        

    }

    let navBar;


    if(!name){
      navBar = (

        <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item active">
              <a className="nav-link active" aria-current="page" href="/login">Login</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/register">Register</a>
            </li>        
          </ul>

    )
    }else{
      navBar = (
        <Button
        className="btn_wathclist"
        variant="outlined"
      >
    
                <ul className="navbar-nav  mb-2 mb-md-0">
            <li className="nav-item active">
              <a className="nav-link active" aria-current="page" href="/" onClick={logout}>logout</a>
            </li>
                  
          </ul>
    
      </Button> 
         
        

     
     

  

      )
    }






  return (
    
    <div className='header_movie'>
      {
        name &&  
        <>
        
          <div className="logo">
          <Link to="/">
              <LiveTvIcon 
                  fontSize='large'
              />
          </Link>
      </div>
      <div className="search_movie link">
          <Button
          className="btn_wathclist"
              variant="outlined"
              startIcon={<SearchIcon/>}
              >
          <Link to="/search">Search Movie</Link>
          </Button>
      </div>
      <div className="wathc_list_header">
      <Button
              className="btn_wathclist"
              variant="outlined"
              startIcon={<BookmarkAddIcon />}
            >
          <Link to="/watchlist">Watchlist</Link>
          
            </Button> 
        </div>
        
        </>
      }
      
        
      
        
              

              
              {navBar}
              
        </div>
    
  )
}
