import React, { useState } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import "./listItem.scss"

export default function ListItem({ index }) {

    const [isHovered, setIsHovered] = useState(false)
    const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"
    return (
        <div className="list-item" 
        style={{left: isHovered && index * 225 - 50 + index * 2.5}}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
            <img src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee" alt="" />
            {isHovered && (
            <>
                <video src={trailer} autoPlay={true} loop />
                <div className="item-info">
                    <div className="list-icons">
                        <PlayArrowIcon className="info-icon" />
                        <AddIcon className="info-icon" />
                        <ThumbUpOutlinedIcon className="info-icon" />
                        <ThumbDownOutlinedIcon className="info-icon" />
                    </div>
                    <div className="item-info-top">
                        <span>1 hour 14 mins</span>
                        <span className="limit">+16</span>
                        <span>1999</span>
                    </div>
                    <div className="info-description">
                    Ad pariatur aliquip mollit do dolor amet quis deserunt. 
                    Laboris aute qui eu sit anim ex occaecat aliquip veniam tempor duis. 
                    </div>
                    <div className="genre">Action</div>
                </div>
            </>
        )}
        </div>
    )
}