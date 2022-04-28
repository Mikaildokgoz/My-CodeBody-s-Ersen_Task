import React from 'react'
import './header.css'


// by clicking on it Header should change background color to the color of the MENU ITEM thanks to the chanceColor function according to the task
const Header = ({chanceColor}) => {
  return (
    <div className='header' onClick={chanceColor}>Header</div>
  )
}

export default Header 