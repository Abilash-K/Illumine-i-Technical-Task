import React from 'react'
import './TopBar.css'
import { Button } from '@mui/material'
import { Save } from '@mui/icons-material'

const TopBar = () => {
  return (
    <div className="container">
      <div className="container-items">
        <p className='header-text'>Header Information</p>
      </div>
      <div className="container-items">
        <Button sx={{borderRadius : '12px'}} size='Large' variant='contained' startIcon={<Save/>}>Save</Button>
      </div>
    </div>
  )
}

export default TopBar