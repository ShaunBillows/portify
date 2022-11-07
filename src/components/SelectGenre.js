import Button from "../components/Button"
import Dropdown from "../components/Dropdown"


const SelectGenre = ({genres, setTracks, selectedPlaylist, setPage}) => {

    const handleSelectGenre = (option) => {
        if (option.label === "All") {
            setTracks(selectedPlaylist.playlist);
        } else {
            setTracks(selectedPlaylist.playlist.filter( x => x.genre === option.label ));
        }
        setPage(1)
    }

    return (
        <>
            <label className=" me-1 mb-1" >Filter by genre</label>
            {
            genres.length < 0
            ?
            genres.map( (genre, i) => <Button genre={genre} key={i} selectedPlaylist={selectedPlaylist} setTracks={setTracks}/>)
            :
            <div className="d-flex justify-content-end align-items-center  mt-0">
            <div className="" style={{width: "300px"}}>
            <Dropdown options={genres} text={"Select genre"} func={handleSelectGenre} color={"#212121"}/>
            </div>
            </div>
            }
        </>

    )
}

export default SelectGenre