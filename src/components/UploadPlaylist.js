import { createSpotifyPlaylist } from "../utils/spotifyClient"
import { uploadPlaylist } from "../utils"
import { useState } from "react"
import { addTracksToSpotifyPlaylist } from "../utils/spotifyClient"

const UploadPlaylist = ({selectedPlaylist, closeModal, setEditPlaylist, setPage}) => {

    const [ userId, setUserId ] = useState("")
    const [ authToken, setAuthToken ] = useState("")

    const handleUserIdChange = (e) => {
        setUserId(e.target.value)
    }
    const handleAuthTokenChange = (e) => {
        setAuthToken(e.target.value)
    }

    const handleCreatePlaylist = async () => {
        if (userId && authToken && selectedPlaylist) {
            const playlistUploaded = await uploadPlaylist(
                selectedPlaylist.name, 
                userId, 
                authToken,
                selectedPlaylist.playlist.map( x => x.uri )
            )
            if (!playlistUploaded) {
                alert("An error occured uploading your playlist to Spotify.")
            }        
            setAuthToken("")
            setUserId("")
            closeModal()
            setEditPlaylist(false)
            setPage(1)
        }
        
    }

    return (

    <div class="container d-flex justify-content-center" id="bootstrap-override">
        <div className="form-container bg-dark mt-3"> 
            <div class="contact px-5 pt-4 pb-5 w-100" >

                <div class="col "> <p>Upload {selectedPlaylist.name} to your spotify account.</p> </div>

                <label  className=" mt-2">Enter your Spotify User ID</label>
                    <div class="col mt-1"> <input type="text" class="form-control bg-dark" placeholder="Spotify User ID" onChange={handleUserIdChange} style={{color: "white"}}/> </div>

                    <label  className=" mt-2">Enter your  <a href={"https://developer.spotify.com/console/post-playlist-tracks/"} target="_blank">Spotify Auth Token </a> </label>
                    <div class="col mt-1"> 
                        <input type="text" class="form-control  bg-dark" placeholder="Spotify Auth Token" onChange={handleAuthTokenChange} style={{color: "white"}}/> 
                    </div>

                    <div class="col d-flex justify-content-center"> <button class="btn btn-success mt-4 px-5 w-100" onClick={handleCreatePlaylist}>Create Playlist<i class="fa fa-long-arrow-right ml-2 mt-1"></i></button> </div>
                
            </div>
        </div>
    </div>
        
    )
}

export default UploadPlaylist