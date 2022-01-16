import React from 'react'

export const PlayingAnimation = ( { fillColor }) => {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="playing_animation" viewBox="0 0 14 17.5">
        <title>equalizer</title>
        <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
                <rect  x="2.86" y="4" width="2.57" height="9.5" fill={fillColor}/>
                <rect x="8.57" y="1.85" width="2.57" height="13.81"  fill={fillColor}/>
                <rect x="11.43" y="5.18" width="2.57" height="7.14"  fill={fillColor}/>
                <rect y="6.13" width="2.57" height="5.24"/><rect x="5.71" width="2.57" height="17.5"  fill={fillColor}/>
            </g>
        </g>
        </svg>
    )
}
