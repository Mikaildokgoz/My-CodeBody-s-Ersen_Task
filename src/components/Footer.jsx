import React from 'react'
import './footer.css'


// by clicking on it Footer should change background color to the color of the MENU ITEM thanks to the chanceColor function according to the task
const Footer = ({chanceColor}) => {
  return (
    <div className='footer' onClick={chanceColor}>Footer</div>
  )
}

export default Footer