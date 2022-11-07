import { useState } from "react"
import Dropdown from "./Dropdown"

const MergePlaylists = ({ playlists, closeModal, cookies, setUser, modalContent }) => {

    const [ input, setInput ] = useState("")
    const [ playlistsToMerge, setPlaylistsToMerge ] = useState([])

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSumbit = () => {
        // merge playlists
    }

    const handleSelectPlaylist = (option) => {
        setPlaylistsToMerge([...playlistsToMerge, option.label])
        // console.log(option);
    }

    return (
        <div className=" d-flex flex-column ">
    <form class="form-inline  px-2 mt-4">
    <div className="form-group mx-sm-3 mb-2">
    <p  className="" style={{maxWidth:"270px"}}>Selected playlists will be merged to form a new playlist.</p>
    </div>
    <div class="form-group mx-sm-3 mb-3">
        <label  class=" mb-1">Select a playlist name</label>
        <input type="text" class="form-control"  placeholder="Playlist name" onChange={handleChange}></input>
    </div>
    <div class="form-group mx-sm-3 mb-2">
        <label  class=" mb-1">Select playlists to merge</label>
        <Dropdown options={playlists.map(x => x.name)} func={handleSelectPlaylist} color={"white"}/>
    </div>
    {
        playlistsToMerge.length
        ?
        <div class="form-group mx-sm-3 mb-2 b-2">
        <label  class=" mb-2">Merging playlists:</label>
        <div className="d-flex flex-column justify-content-center ">
            {playlistsToMerge.map( (playlist,i) => 
            <li key={i} class="">{playlist}</li>
            )}
        </div>
        </div>
        :
        null
    }
    </form>
    <div >
            <div className="modal-footer mt-4 ">
                <button type="button" className="btn btn-success" onClick={handleSumbit}>{modalContent}</button>
                <button type="button" className="btn btn-secondary" data-dismiss="modal"  onClick={closeModal}>Close</button>
            </div>
            </div>

            </div>
    )
}

export default MergePlaylists
