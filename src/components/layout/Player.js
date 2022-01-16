import React, { useContext, useEffect, useState } from 'react'
import { FaPause, FaPlay } from 'react-icons/fa'
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";

import AudioContext from '../../context/audio/AudioContext';
import { secondsToMinutes } from '../../helpers/secondsToMinutes';

export const Player = () => {

    const audioContext = useContext(AudioContext);

    const { audio : audioPlaying, playlist, audioinfo,  playing , playAudio , pauseAudio , cargarAudio } = audioContext;

    const [state, setState] = useState({
        audio : audioinfo ,
        timer : 0 ,
    });

    const [timer, setTimer] = useState(0)

    const { audio } = state;

    useEffect(() => {

        if(audioinfo?.preview === ''){
            nextAudio();
        }

        if(audio?.id !== audioinfo?.id ){
            setState({
                audio : audioinfo ,
            }) 
        }

        if( audioPlaying !== null ){
            audioPlaying.onended = () => {
                
                nextAudio();
            }

            audioPlaying.ontimeupdate = () =>{
                setTimer( audioPlaying.currentTime );
            }

        }
        

    }, [ audioinfo , audio , audioPlaying ]);

    const nextAudio = () => {
        
        let currentIndex = playlist.findIndex( ( track  ) => track.id === audioinfo.id );
        
        if(currentIndex !== playlist.length -1  ){

            let nextTrack = playlist[ currentIndex + 1 ]

            cargarAudio( nextTrack );
          
            playAudio();
            
        }else{
            pauseAudio();
        }
        
    }

    const previuosAudio = () => {
        
        let currentIndex = playlist.findIndex( ( track  ) => track.id === audioinfo.id );
        
        console.log(currentIndex === playlist.length -1  );

        if(currentIndex !== 0   ){

            let previousTrack = playlist[ currentIndex - 1 ]

            cargarAudio( previousTrack );
          
            playAudio();
            
        }
        
    }
    

    return( 
        
            audio ? 
            (
            <section className="player">
                <div className="preview-track">
                    <img src={ audio.album.cover_medium } alt="album poster" />
                    <div>
                        <p>{ audio.title }</p>
                        <p> { audio.artist.name } </p>
                        
                    </div>


                </div>
                <div className="player-controls">
                    <div className="controls">
                            <BiSkipPrevious onClick={ previuosAudio } className="icon arrow"/>
                            {
                                !playing ? 

                                ( <FaPlay onClick={ playAudio } className="icon"/> ) 
                                :
                                ( <FaPause onClick={ pauseAudio } className="icon" /> )
                                
                            }
                            <BiSkipNext onClick={ nextAudio } className="icon arrow" />
                    </div>
                    <div className="time-tracker">
                        <span className="current-time timer">
                           {
                               secondsToMinutes(timer)
                           }
                        </span>
                        <div className="time-container">
                            <div className="time" style= { { width :  `${(100 / audio.duration ) * timer}%`  }} ></div>
                        </div>
                        <span className="duration timer">
                            {
                                secondsToMinutes(audio.duration)
                            }
                        </span>
                    </div>
                </div>
            </section>
            ) :
            <section className="player"></section>
    )
}
