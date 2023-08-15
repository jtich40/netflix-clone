import React from 'react';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import AddIcon from '@mui/icons-material/Add';
import RecommendOutlinedIcon from '@mui/icons-material/RecommendOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';

export default function ListItem() {
    return (
        <div className="list-item">
            <img src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee" alt="" />
            <div className="item-info">
                <div className="list-icons">
                    <PlayCircleIcon />
                    <AddIcon />
                    <RecommendOutlinedIcon />
                    <ThumbDownOutlinedIcon />
                </div>
            </div>
        </div>
    )
}