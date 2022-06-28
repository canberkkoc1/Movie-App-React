import React from 'react'
const Home = ({name}) => {
    
    return (
      <div className='homepage_div'>{name ? 'Hi ' + name +  " Welcome Movie App": 'You not user Please login or register'  }</div>
    )
  
}


export default Home;