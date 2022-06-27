import React from 'react'
import { useLocation } from "react-router-dom";
import Cards from '../components/Card';

export default function List() {

    const data = useLocation()

    const {addFavourite,moviePost,API_KEY} = data.state



  return (
    <div className='list'>
       
      <section className='list_item'>
        {
            moviePost.map((item,i) => (
                <Cards data={item} apiKey={API_KEY} key={i} addFavourite={addFavourite}/>

                ))
              }
              </section>

              
    </div>
  )
}
