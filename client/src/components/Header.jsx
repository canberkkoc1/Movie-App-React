import React from 'react'
import { Link } from 'react-router-dom'
import "../style/header.css"
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { Button } from '@mui/material';
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import SearchIcon from '@mui/icons-material/Search';

export default function Header() {
  return (
    <div className='header_movie'>
        <div className="logo">
            <Link to="/">
                <LiveTvIcon 
                    fontSize='large'
                />
            </Link>
        </div>
        <div className="search_movie link">
            <Button
            className="btn_wathclist"
                variant="outlined"
                startIcon={<SearchIcon/>}
                >
            <Link to="/search">Search Movie</Link>
            </Button>
        </div>
        <div className="wathc_list_header">
        <Button
                className="btn_wathclist"
                variant="outlined"
                startIcon={<BookmarkAddIcon />}
              >
            <Link to="/watchlist">Watchlist</Link>
            
              </Button>
        </div>
    </div>
  )
}
