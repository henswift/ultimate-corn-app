import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='Footer'>
      <div className='Footer-links'>
        <Link to="/"><h3>Home</h3></Link>
        <Link to="/planting"><h3>Planting</h3></Link>
        <Link to="/spraying"><h3>Spraying</h3></Link>
        <Link to="/picking"><h3>Picking</h3></Link>
      </div>
    </div>
  )
}

export default Footer