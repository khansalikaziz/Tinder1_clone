import React from 'react'
import './SwipeButtons.css'
import ReplayIcon from "@mui/icons-material/Replay"
import CloseIcon from "@mui/icons-material/Close"
import StarRateIcon from "@mui/icons-material/StarRate"
import FavoriteIcon from "@mui/icons-material/Favorite"
import FlashOnIcon from "@mui/icons-material/FlashOn"
import IconButton from '@mui/material/IconButton'

const SwipeButtons = () => {
  return (
    <div className='swipeButtons'>
        <IconButton className='swipeButtons__repeat'>
             <ReplayIcon fontSize='medium' />
        </IconButton>
        <IconButton className='swipeButtons__left'>
             <CloseIcon fontSize='medium' />
        </IconButton>
        <IconButton className='swipeButtons__star'>
             <StarRateIcon fontSize='medium' />
        </IconButton>
        <IconButton className='swipeButtons__right'>
             <FavoriteIcon fontSize='medium' />
        </IconButton>
        <IconButton className='swipeButtons__lighting'>
             <FlashOnIcon fontSize='medium' />
        </IconButton>
    </div>
  )
}

export default SwipeButtons