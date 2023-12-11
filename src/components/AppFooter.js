import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='Footer'>
      <div className='Footer-links'>
        <Link to="/"><h4>Home</h4></Link>
        <Link to="/planting"><h4>Planting</h4></Link>
        <Link to="/spraying"><h4>Spraying</h4></Link>
        <Link to="/picking"><h4>Picking</h4></Link>
      </div>
    </div>
  )
}

export default Footer