import React, { useState,useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import StarIcon from "@mui/icons-material/Star";
import LockIcon from '@mui/icons-material/Lock';
import { MainContext } from '../context/MainState';

export default function WatchList() {

   const {watchlist} = useContext(MainContext)


    

   
    
  return (
    <div className='watchlist_main'>
      <div className="your_list">
        <h1>Your List</h1>
        
        <span className='itemlist_status'><LockIcon/> PRIVATE</span>
      </div>
      {
          watchlist.map((item,i) => (
            <div className='info_watchlist' key={i}>
              <img src={item.Poster} alt="" width="150" height="200"/>
             
                <div className="info_movie_watchlisd">

                <h3>{item.Title}</h3>
                <h4>{item.Year}</h4>
                <div className="item_info_watch">
                  <StarIcon className="star_icon" />
                  <span style={{ display: "inline-block" }}>
                    <span className="data_item_raitng">{item.imdbRating}</span>
                  </span>

                </div>
                <p>{item.Plot}</p>
                </div>
              

            </div>
          ) ) }
      
      </div>
  )
}
