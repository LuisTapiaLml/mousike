import React, { useContext, useEffect, useState } from 'react'
import { FaPause, FaPlay } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';

import AudioContext from '../../context/audio/AudioContext';

import axios from '../../helpers/axios';
import { PlayingAnimation } from './PlayingAnimation';

export const PlaylistCard = ({ playlistInfo }) => {

    const audioContext = useContext(AudioContext);

    const { playing ,  playAudio , loadedplaylistinfo , loadPlaylist , loadPlaylistInfo , pauseAudio  } = audioContext

    const [ cardState , setCardState ] = useState({

        cardPlaying : false

    });

    const { cardPlaying } = cardState;

    useEffect(() => {

        const searchPlaylistTracks = async () => {

            const searchResults = await  axios.get(`playlist/${playlistInfo.id}`);

            if( ! ( "error" in searchResults.data )   ){
                loadPlaylist( searchResults.data.tracks.data );
                loadPlaylistInfo( playlistInfo );

               
                playAudio();
            }
            
        }

        if( cardPlaying && loadedplaylistinfo?.id !== playlistInfo.id  ){
            searchPlaylistTracks();
        }

        if( playing  && loadedplaylistinfo?.id === playlistInfo.id){
            setCardState({
                cardPlaying: true
            });
        }

        if( playing  && loadedplaylistinfo?.id !== playlistInfo.id){
            setCardState({
                cardPlaying: false
            });
        }
       
    }, [ playing ]);


    const playPlaylist = () => {

        setCardState({
            cardPlaying: true
        });

        if( loadedplaylistinfo?.id === playlistInfo.id ){
            playAudio();
        }

    }

    
    const pausePlaylist = () => {

        setCardState({
            cardPlaying: false
        });

        pauseAudio();
    }

    return (
        <article className="playlist-preview">
            <div className="img-container">
                <img src={ playlistInfo.picture_big } alt={playlistInfo.title} />
                <div className={`cover  ${ !true ? 'playing' : '' }` } >
       
                {
                cardPlaying ? 
                    <div className="play" onClick= { pausePlaylist }>
                        <FaPause  className="icon"/>
                    </div>
                :
                    <div className="play" onClick={ playPlaylist }>
                        <FaPlay className="icon"/>
                    </div>
                }
                    
                </div>
            </div>
            <NavLink to={`/playlist/${playlistInfo.id}`} className="nombre">{ playlistInfo.title }</NavLink>
            <p>Song { playlistInfo.nb_tracks }</p>

        </article>
    )
}
