import React from 'react'

function Card(props) {
  return (
    <>
    <div className='header-card  mt-5 pt-3 w-auto'>
      <a href="#">
        <img src={props.image} className='header-card' alt="offerimage" />
      </a>

   
    </div>
    </>
  )
}

export default Card