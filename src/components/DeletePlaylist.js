import { useState } from "react"
import Dropdown from "./Dropdown"


const DeletePlaylist = ({ playlists, cookies, setUser, closeModal, modalContent  }) => {

    const [ input, setInput ] = useState("")
    const [ playlistsToDelete, setPlaylistsToDelete ] = useState()

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSumbit = () => {
        // Delete playlist
    }

    const handleSelectPlaylist = (option) => {
        setPlaylistsToDelete(option.label)
        // console.log(option);
    }

    return (
        <div className=" d-flex flex-column ">
    <form className="form-inline px-2 mt-4">
    <div className="form-group mx-sm-3 mb-2">
    <p  className="" style={{maxWidth:"270px"}}>Select a playlist delete permentantly.</p>
    </div>
    <div className="form-group mx-sm-3 mb-2">
        <label  className=" mb-1">Select playlist</label>
        <Dropdown options={playlists.map(x => x.name)} func={handleSelectPlaylist} text={"Select playlist"} color={"white"}/>
    </div>
    {
        playlistsToDelete
        ?
        <div className="form-group mx-sm-3 mb-2 b-2">
        <label  className=" mb-2">This playlist will be deleted:</label>
        <div className="d-flex flex-column justify-content-center ">
            <li className="">{playlistsToDelete}</li>
        </div>
        </div>
        :
        null
    }
    </form>
    <div >
            <div className="modal-footer mt-4">
                <button type="button" className="btn btn-success" onClick={handleSumbit}>{modalContent}</button>
                <button type="button" className="btn btn-secondary" data-dismiss="modal"  onClick={closeModal}>Close</button>
            </div>
            </div>
    </div>
    )
}

export default DeletePlaylist
