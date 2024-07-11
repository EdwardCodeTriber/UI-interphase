import React from 'react'

const Home = () => {
  return (
    <div className='backlayout'>
           
            <div className='Nav'>
              <div className='Logo'><img src='logo.png'></img> </div>
              <div className='nav-list'>
                <ul>
                    <li><a href='#'>Furniture</a></li>
                    <li><a href='#'>Showrooms</a></li>
                    <li><a href='#'>About Us</a></li>
                    <li><a href='#'>Trade</a></li>
                    <li><a href='#'>Clearence</a></li>
                </ul>
                |
                <ul className='links-social'>
                    <li><a href='#'><i class="ri-facebook-fill"></i></a></li>
                    <li><a href='#'><i class="ri-pinterest-fill"></i></a></li>
                    <li><a href='#'><i class="ri-twitter-fill"></i></a></li>
                </ul>
              </div>
            </div>
    </div>
  )
}

export default Home