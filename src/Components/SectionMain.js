import React from 'react'

const SectionMain = () => {
  return (
    <div className='Sectionpicture'>
        <div className='secondline'>
        <h4>You may also like</h4>
        <button className='view'>view more products</button>
        </div>
        <div className='bottom-nav'>
           <div className='img1'>
           <img src='SCREEN-BED.jpg' ></img></div> 
            <p1>Screen Bed</p1>
            <div className='img2'>
            <img src='ALISON-PLUS-BED.jpg'></img></div> 
            <p2>Alison Plus Bed</p2>
            <div className='img3'>
            <img src='ELAN-BED-.jpg'></img></div> 
            <p3>Elan Bed</p3>
            <div className='img4'>
            <img src='Eden-grey.jpg'></img></div>  
            <p4>Eden grey</p4>
        </div>
    </div>
  )
}

export default SectionMain