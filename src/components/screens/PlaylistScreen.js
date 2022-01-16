import React, { useEffect, useState } from 'react'
import axios from '../../helpers/axios';
import {  useParams } from 'react-router-dom'
import { Loading } from '../elements/Loading';
import { TracksContainer } from '../elements/TracksContainer';
import { PlaylistContainer } from '../elements/PlaylistContainer';


export const PlaylistScreen = () => {

    const { playlistid } = useParams();

    const [playlistInfo, setPlaylistInfo] = useState({
        singlePlaylistInfo : null,
        playlistArray : null
    });

    useEffect(() => {

        async function getPlaylist(){

            let url = playlistid ? `/playlist/${playlistid}` : '/chart/0/playlists?limit=30'

            let results = await axios.get(url);
            
            if(results.status === 200 ){
                
                if(playlistid){

                    setPlaylistInfo({
                        playlistArray:null, 
                        singlePlaylistInfo : {
                            ...results.data
                        }
                    });

                }else
                
                    setPlaylistInfo({
                        singlePlaylistInfo:null, 
                        playlistArray : {
                            ...results.data
                        }
                    });
                
            }

            return results
        }


        getPlaylist();
        
        
    }, [playlistid])

    return (
        playlistInfo.singlePlaylistInfo ? 
        (
            <>
                <header className="page-header">
                    <div className="image-container">
                        <img src={ playlistInfo.singlePlaylistInfo.picture_medium } alt="img playlist" />
                    </div>
                    <div className="info-playlist">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia obcaecati nam commodi consequuntur, totam officia repellendus rem corrupti labore harum illo deserunt quae dolorem est saepe quas eveniet asperiores nulla ad modi. Atque facilis dolorem sapiente impedit commodi amet nesciunt debitis dignissimos, quod aliquid sunt sed molestiae labore quaerat. Commodi!
                    </div>
                </header>
                <TracksContainer playlist={ playlistInfo.singlePlaylistInfo.tracks } tittle={playlistInfo.singlePlaylistInfo.title }/>
            </>
        ) :
        playlistInfo.playlistArray ? 
            <PlaylistContainer playlists={ playlistInfo.playlistArray.data } tittle="Playlists" />
        :
        <Loading/>
    )
}
