import React from 'react'
import { PlaylistCard } from './PlaylistCard'

export const PlaylistContainer = ({ tittle , playlists } ) => {

    return (
        <section className="container">
            <h1>{ tittle }</h1>
            <div className="palylists-container">
                {
                    playlists.map( playlist => ( <PlaylistCard key={ playlist.id } playlistInfo={ playlist } /> ))
                }     
            </div>       
        </section>
    )
}
