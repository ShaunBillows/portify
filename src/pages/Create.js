import Navbar from "../components/Navbar"
import TracksTable from "../components/TracksTable"
import Button from "../components/Button"
import { useState } from "react"
import PlaylistTable from "../components/PlaylistTable"
import Header from "../components/Header"

const Create = () => {

    const [ tracks, setTracks ] = useState(["Disco", "Rock", "Tech"])
    const [ playlist, setPlaylist ] = useState(["Disco", "Rock", "Tech"])
    const [ genre, setGenre ] = useState(["Disco", "Rock", "Tech"])

    return (
        <>
        <Navbar/>
        <div className="container-lg mt-3 py-3">
            <Header title={"Browse Playlists"}/>

            <div className="row">
                <div class="col-2">
                </div>
                <div class="col-10" id="bootstrap-override">
                        {genre.map( (genre, i) => <Button genre={genre} key={i}/>)}
                </div>
            </div>

            <div className="row">
                <div class="col-2">
                    <PlaylistTable/>
                </div>
                <div class="col-10">
                <TracksTable/>
                </div>
            </div>

            <div id="bootstrap-override">
                <button type="button" class="btn btn-dark m-1 float-end">Create Playlist</button>
            </div>
        </div>
        </>
    )
}

export default Create