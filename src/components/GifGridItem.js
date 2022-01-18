import React from 'react'
import 'animate.css';

export const GifGridItem = ({title,url}) => {

    return (
        <div className='card animate__animated animate__fadeInDown animate__delay-1s'>
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}
