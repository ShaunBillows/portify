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
    <div className="table-responsive" style={{borderRadius: "6px"}}>
    <table class="table table-hover table-dark " id="bootstrap-override" style={{whiteSpace:"wrp"}}>
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
        < div className="row d-flex justify-content-end bg-dark py-3 ">

            <button className="btn bg-success d-flex justify-content-center align-items-center  p-1 py-2 me-3"  onClick={handleDecrementPage}  style={{cursor: "pointer", width: "70px"}}>
            <FontAwesomeIcon  icon={faBackward}/>
            </button>
            <button className="btn bg-success  d-flex justify-content-center align-items-center p-1 py-2 me-lg-5 me-4" onClick={handleIncrementPage}  style={{cursor: "pointer", width: "70px"}}>
            <FontAwesomeIcon  icon={faForward}/>
            </button>
        
        </div>
        :
        null
    }
    </div>
    )
}

export default TracksTable
