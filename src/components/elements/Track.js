import React, { useContext, useEffect, useState } from 'react'
import { FaPause, FaPlay } from 'react-icons/fa';

import AudioContext from '../../context/audio/AudioContext';
import { secondsToMinutes } from '../../helpers/secondsToMinutes';

export const Track = ({ infoTrack , tracksList }) => {
    
    const audioContext = useContext(AudioContext);

    const { audioinfo , playing , playlist , loadPlaylist , playAudio , pauseAudio , cargarAudio  } = audioContext; 
    
    const [state, setState] = useState({
        playing : false 
    })

    useEffect(() => {
        
        if(infoTrack.id !== audioinfo?.id ){
            setState({
                playing : false 
            }) 
        }

        if(infoTrack.id === audioinfo?.id && state.playing !== playing ){
            setState({
                playing : playing 
            }) 
        }

        

    }, [audioinfo , infoTrack , playing , state.playing  ])


    const play_audio = () =>{

        if(infoTrack.id !== audioinfo?.id ){
            cargarAudio( infoTrack );
        }

        if(playlist !== tracksList.data){
            loadPlaylist(tracksList.data);
        }
        
        playAudio();

        setState({
            playing : true 
        })
    }

    const pause_audio = () =>{
        pauseAudio();
        
        setState({
            playing : false 
        })

    }

    return (
        <article className={`track ${infoTrack.id === audioinfo?.id ? `playing` : '' } `}>
            <div className="buttons">
                {
                    state.playing ? 
                        <FaPause className="icon" onClick={pause_audio}/>
                    :
                        <FaPlay  className="icon" onClick={play_audio} />
                }
            </div>
            <div className="info">
                <div className="band-info">
                    <img src={infoTrack.album.cover_medium} alt="poster_album" />
                    <div className="track-description">
                        <p>{infoTrack.title}</p>
                        <p>{`${infoTrack.artist.name} | ${infoTrack.album.title}`}</p>
                    </div>
                </div>
                <div className="duration">
                    <span>
                    {
                        `
                        ${secondsToMinutes(infoTrack.duration)} 
                        `
                    }
                    </span>
                    Mins
                </div>
            </div>
        </article>
    )
}
