import { useReducer } from 'react';
import AudioContext from './AudioContext';
import audioReducer from './audioReducer';
import {
    CARGAR_AUDIO,
    PLAY_AUDIO,
    PAUSE_AUDIO,
    LOAD_PLAYLIST,
    LOAD_PLAYLIST_INFO
} from '../../types/types';

export const AudioState = (props) => {

    const initialState = {
        audio: null,
        playing: false,
        audioinfo: null,
        playlist : null ,
        loadedplaylistinfo : null   
    }

    const [state, dispatch] = useReducer( audioReducer , initialState  );

    const cargarAudio =  ( audio )=>{
        dispatch({
            type: CARGAR_AUDIO ,
            payload : audio 
        })
    }

    const playAudio =  ()=>{
        dispatch({
            type: PLAY_AUDIO 
        })
    }

    const pauseAudio =  ()=>{
        dispatch({
            type: PAUSE_AUDIO 
        })
    }

    const loadPlaylist = ( playlist ) => {
        dispatch({
            type : LOAD_PLAYLIST,
            payload : playlist 
        })
    }
    
    const loadPlaylistInfo = (playlistInfo) =>{
        dispatch({
            type : LOAD_PLAYLIST_INFO,
            payload : playlistInfo
        })
    }

    return (
        <AudioContext.Provider
            value={{
                ...state,
                cargarAudio,
                playAudio,
                pauseAudio,
                loadPlaylist,
                loadPlaylistInfo
            }}
        >
            {
                props.children
            }
        </AudioContext.Provider>
    )
}
