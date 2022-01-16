import React from 'react'
import { Artists } from '../screens/Artists'
import { Genre } from '../screens/Genre'
import { PlaylistScreen } from '../screens/PlaylistScreen'
import { PodcastScreen } from '../screens/PodcastScreen'
import { Profile } from '../screens/Profile'
import { TopMusic } from '../screens/TopMusic'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

export const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<TopMusic/>} />

                <Route path="/artists" element={<Artists/>} />
                <Route path="/artists/:artistId?" element={<Artists/>} />
                
                <Route path="/genre" element={<Genre/>} />
                <Route path="/genre/:genreId?" element={<Genre/>} />


                <Route path="/podcast" element={<PodcastScreen/>} />
                <Route path="/podcast/:podcastId" element={<PodcastScreen/>} />
                

                <Route path="/playlist" element={<PlaylistScreen/>} />
                <Route path="/playlist/:playlistid" element={<PlaylistScreen/>} />
                
                <Route path="/profile" element={<Profile/>} />
            </Routes>
        </main>
    )
}
