import React from 'react';
import { Track } from './Track';

export const TracksContainer = ({ tittle , playlist }) => {

    return (
        <section className="tracks-container container">
            <h1>{ tittle }</h1>
            {
                 playlist.data.map( track => ( <Track key={track.id} tracksList={ playlist } infoTrack={track} /> ) )
            }            
        </section>
    )

}
