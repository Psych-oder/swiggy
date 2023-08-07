import React from 'react'
import Card from './Card'
import cardImage from './images/cardimage.webp'
import cardImage2 from './images/header-image2.webp'
import cardImage3 from './images/header-image3.webp'
import {BsArrowRight, BsArrowLeft} from 'react-icons/bs'
function header() {
  return (
    <>

    <div className='home-header w-100 bg-swiggydark ' style={{height:'450px' }}> 
        <h1 className='text-light'>header</h1>
        <div className='header-innerDiv  flex mt-1 p-2'>

        <Card image={cardImage}/>
        <Card image={cardImage2}/>
        <Card image={cardImage3}/>
        <Card image={cardImage}/> 
        </div>
        <div className="header-arrow header-arrow-forward  bg-white border"> <BsArrowRight className='arrow-header right-arrow' fontSize='25px'/> </div>
        <div className="header-arrow header-arrow-backward bg-white border"> <BsArrowLeft className='arrow-header left-arrow' fontSize='25px'/></div>
    </div>
    </>
  )
}

export default header