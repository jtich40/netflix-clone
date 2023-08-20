import React, { useState, useRef } from 'react';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ListItem from '../listItem/ListItem';
import "./list.scss"

export default function List({ list }) {

    const [slideNumber, setSlideNumber] = useState(0)
    const [isMoved, setIsMoved] = useState(false)

    const listRef = useRef()
    
    const handleClick = (direction) => {
        setIsMoved(true)
        // use this method to get distance of list-container from left (280px) and subtract 50px to account for margin from arrow
        let distance = listRef.current.getBoundingClientRect().x - 50
        if (direction === "left" && slideNumber > 0) {
            // update slideNumber state to reflect current slide number
            setSlideNumber(slideNumber - 1)
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        }
        
        if (direction === "right" && slideNumber < 5) {
            setSlideNumber(slideNumber + 1)
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
        console.log(distance)
    }
    return (
        <div className="list">
            <span className="list-title">{list.title}</span>
            <div className="wrapper">
                {isMoved && (
                    <ArrowBackIosOutlinedIcon 
                    className="slider-arrow left"
                    onClick={() => handleClick("left")}
                    />
                )}
                <div className="list-container" ref={listRef}>
                    {list.content.map((item, i) => (
                    <ListItem item={item} index={i} />
                    ))}
                </div>
                <ArrowForwardIosOutlinedIcon 
                className="slider-arrow right"
                onClick={() => handleClick("right")}
 
                />
            </div>
        </div>
    )
}