import React from 'react';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ListItem from './ListItem';

export default function List() {
    return (
        <div className="list">
            <span className="list-title">Continue to watch</span>
            <div className="wrapper">
                <ArrowBackIosOutlinedIcon className="slider-arrow left"/>
                <div className="container">
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                </div>
                <ArrowForwardIosOutlinedIcon className="slider-arrow right" />
            </div>
        </div>
    )
}