import Navbar from "../components/Navbar"
import TracksTable from "../components/TracksTable"
import { useState, useEffect } from "react"
import PlaylistTable from "../components/PlaylistTable"
import Header from "../components/Header"
import SelectGenre from "../components/SelectGenre"
import Modal from "../components/Modal"
import FunctionalModals from "../components/FunctionalModals"

const Create = ({logout, user, cookies, setUser}) => {

    const [ playlists, setPlaylists ] = useState([])
    const [ selectedPlaylist, setSelectedPlaylist ] = useState()
    const [ genres, setGenres ] = useState([])
    const [ tracks, setTracks ] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
    if (user) {
        setPlaylists(user.playlists)
        setSelectedPlaylist(user.playlists[0])
        setGenres(["All", ...new Set(user.playlists[0].playlist.map(x => x.genre))])
        setTracks(user.playlists[0].playlist)
    }
    }, [user])

    const [editPlaylist, setEditPlaylist] = useState(false)
    const handleClickEdit = () => {
        setEditPlaylist(!editPlaylist)
    }


    // modals 
    const [ modalIsOpen, setModalIsOpen ] = useState(false)
    const [ modalContent, setModalContent ] = useState("")

    const handleClickCopy = () => {
        setModalIsOpen(true)
        setModalContent("Copy Playlist")
    }
    const handleClickMerge = () => {
        setModalIsOpen(true)
        setModalContent("Merge Playlists")   
    }
    const handleClickDelete = () => {
        setModalIsOpen(true)
        setModalContent("Delete Playlist") 
    }
    const handleClickCreate = () => {
        setModalIsOpen(true)
        setModalContent("Update Playlist")
    }

    return (
        <>
        {
            modalIsOpen
            &&
            <Modal title={modalContent} display={true} closeModal={() => setModalIsOpen(false)} submitButton={false} submitText={modalContent} modalContent={modalContent} playlists={playlists} selectedPlaylist={selectedPlaylist} tracks={tracks} cookies={cookies} setUser={setUser}/>
        }
        <Navbar logout={logout}/>
        <div className="container-lg py-3">
            {/* <Header title={"Browse Playlists"}/> */}

            {/* controls */}
            <div className="row">
            <div className="col d-flex align-items-center">
            <h3 className="p-2">Playlist: {selectedPlaylist && selectedPlaylist.name}</h3>
            </div>
            <div className="col d-flex align-items-center justify-content-end">
                {
                    editPlaylist
                    ?
                    <button type="button" onClick={handleClickCreate} className="btn btn-success m-1">Update</button>
                    :
                    <div className="mt-5"></div>
                }
            </div>
            </div>
            <div className="row">
                <div className="col">                  
                </div>
                <div className="col">
                <div  className="text-end pe-1">
                <label>Playlist Functions</label>
                </div>
                <div>
                <button type="button" className="btn btn-dark m-1 float-end" onClick={handleClickEdit}>Edit</button>  
                <button type="button" onClick={handleClickDelete} className="btn btn-dark m-1 float-end">Delete</button>
                <button type="button" onClick={handleClickMerge} className="btn btn-dark m-1 float-end">Merge</button>
                <button type="button" onClick={handleClickCopy} className="btn btn-dark m-1 float-end">Copy</button>  
                </div>                 
                </div>
            </div>

            <div className="row  ">
                {/* title */}
            <div className="col-2 ">
            
            </div>

                {/* genres */}
            <div className="col-10 text-end mt-1" id="bootstrap-override">
                <SelectGenre genres={genres} setTracks={setTracks} selectedPlaylist={selectedPlaylist} setPage={setPage}/>
            </div>
            </div>

            <div className="row mt-2">
                    {/* playlists */}
                <div className="col-2">
                    <PlaylistTable playlists={playlists} setSelectedPlaylist={setSelectedPlaylist} setGenres={setGenres} setTracks={setTracks} setPage={setPage}/>
                </div>
                    {/* tracks */}
                <div className="col-10">
                <TracksTable tracks={tracks} setTracks={setTracks} editPlaylist={editPlaylist} setSelectedPlaylist={setSelectedPlaylist} selectedPlaylist={selectedPlaylist} page={page} setPage={setPage}/>
                </div>
            </div>

        </div>
        </>
    )
}

export default Create