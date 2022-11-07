import { useEffect, useState } from "react"
import TracksItem from "./TracksItem"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForward, faBackward} from "@fortawesome/free-solid-svg-icons"

const TracksTable = ({tracks, setTracks, editPlaylist, selectedPlaylist, setSelectedPlaylist, page, setPage}) => {

    const tracksPerPage = 30
    const [displayedTracks, setDisplayedTracks] = useState([])

    useEffect( () => {
        setDisplayedTracks(tracks.slice(tracksPerPage * (page - 1),tracksPerPage * page))
    }, [tracks])
    useEffect( () => {
        setDisplayedTracks(tracks.slice(tracksPerPage * (page - 1),tracksPerPage * page))
    }, [page])

    const handleIncrementPage = () => {
        if (page < Math.ceil(tracks.length/tracksPerPage)) {
            setPage( page + 1 )
        }
    }
    const handleDecrementPage = () => {
        if (page > 1) {
            setPage( page - 1 )
        }
    }

    return (
    <>


    <table class="table table-hover table-dark table-responsive " id="bootstrap-override">
    <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Artist</th>
        <th scope="col">Genre</th>
        {
        editPlaylist
        &&
        <>
        <th scope="col">Url</th>
        <th scope="col">Edit</th>
        <th scope="col">Delete</th>
        </>
        }
        </tr>
    </thead>
    <tbody>
        {
        displayedTracks
        ?
        displayedTracks.map( (track,i) =>
            <tr key={i}>
            <TracksItem track={track} index={i + (page-1)*tracksPerPage} setSelectedPlaylist={setSelectedPlaylist} tracks={tracks} editPlaylist={editPlaylist} setTracks={setTracks} selectedPlaylist={selectedPlaylist}/>
            </tr>)
        :
        null
    }
    </tbody>
    </table>
    {
        tracks.length > tracksPerPage
        ?
        < div className="row">
            <div className="col-9">

            </div >
            <div className="col-1 bg-dark d-flex justify-content-center align-items-center me-2"  onClick={handleDecrementPage}  style={{cursor: "pointer"}}>
            <FontAwesomeIcon  icon={faBackward}/>
            </div>
            <div className="col-1 bg-dark  d-flex justify-content-center align-items-center p-1 py-2" onClick={handleIncrementPage}  style={{cursor: "pointer"}}>
            <FontAwesomeIcon  icon={faForward}/>
            </div>
            <div className="col-1">
            </div>
        </div>
        :
        null
    }
    </>
    )
}

export default TracksTable
