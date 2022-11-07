import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark} from "@fortawesome/free-solid-svg-icons"
import UpdatePlaylist from "./UpdatePlaylist"

const TracksItem = ({track, index, setTracks, tracks, editPlaylist, setSelectedPlaylist, selectedPlaylist}) => {

    const [ selected, setSelected ] = useState(false)
    const [ input, setInput ] = useState("")

    const handleSelect = () => {
        setSelected(!selected)
    }
    const handleKeydown = (e) => {
        if (e.key === "Enter" && input) {
            setTracks(tracks.map( x => x.name === track.name ? {name: track.name, artist: track.artist, genre: input, url: track.url, uri: track.uri} : x))
            const updatedPlaylist = selectedPlaylist
            updatedPlaylist.playlist = updatedPlaylist.playlist.map( x => x.name === track.name ? {name: track.name, artist: track.artist, genre: input, url: track.url, uri: track.uri} : x)
            setSelectedPlaylist(updatedPlaylist)
            setSelected(false)
            setInput("")
        }
    }
    
    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleDeleteTrack = () => {
        setTracks(tracks.filter( x => x.name !== track.name ))
        const updatedPlaylist = selectedPlaylist
        updatedPlaylist.playlist = updatedPlaylist.playlist.filter( x => x.name !== track.name )
        setSelectedPlaylist(updatedPlaylist)
    }

    return (

        <>
            
            <td scope="col">{index+1}</td>
            <td scope="col">{track.name}</td>
            <td scope="col">{track.artist}</td>
            <td scope="col">{selected ? <input className="bg-dark" value={input} placeholder="Select genre" onKeyDown={handleKeydown} onChange={handleChange}></input> : track.genre}</td>
            {
                editPlaylist
                &&
                <>
                <td scope="col"><a href={track.url} target="_blank" style={{textDecoration: "none", color:"white"}}>{track.url}</a></td>
                <td scope="col">
                <div class="form-check">
                <input class="form-check-input" type={'checkbox'} defaultChecked={selected ? true : false} value="" onClick={handleSelect}></input>
                </div>
                </td>
                <td scope="col">
                <div class="form-check">
                <FontAwesomeIcon onClick={handleDeleteTrack} icon={faCircleXmark} style={{cursor: "pointer"}}/>
                </div>
                </td>
                </>
            }
            
        </>

    )
}

export default TracksItem