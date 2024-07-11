import React from 'react'

const Home = () => {
  return (
    <div className='Navbar'>
        <div className='logo'>
            <img src='image-.png'></img>
        </div>
        <div className='Navlist'>
            <ul>
                <li><a href='#'>Find Work</a></li>
                <li><a href='#'>Learn Design</a></li>
                <li><a href='#'>Marketplace</a></li>
                <li><a href='#'>Hire Designers</a></li>
            </ul>
        </div>
        <div className='searchbar'>
            <input><i class="ri-search-2-line"></i></input>
        </div>
        <div className='info-bar'>
            <ul>
                <li><a href='#'></a><i class="ri-notification-2-fill"></i></li>
                <li><a href='#'></a><i class="ri-mail-settings-fill"></i></li>
                <li><i class="ri-user-3-fill"></i></li>
            </ul>
        </div>
    </div>
  )
}

export default Home