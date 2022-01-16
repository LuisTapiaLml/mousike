import React, { useEffect, useState } from 'react';

import axios from '../../helpers/axios';
import { Loading } from '../elements/Loading';
import { TracksContainer } from '../elements/TracksContainer';
import { PlaylistContainer } from '../elements/PlaylistContainer';

export const TopMusic = () => {

    const [top, setTop] = useState(null);

    useEffect(() => {
        
        async function getTop(){

            let results = await axios.get('/chart');

            if(results.status === 200 ){
                setTop({...results.data});
            }

            return results
        }

        getTop();

    }, [])

    return (
        (
            top !== null ? 
            <>
                <TracksContainer tittle="Top Music" playlist={ top.tracks } />
                <PlaylistContainer playlists={ top.playlists.data } tittle="Top Playlist" />
            </>
            :
            <Loading/>
        )
    )
}
