
const Button = ({genre, setTracks, selectedPlaylist}) => {

    const handleSelectGenre = () => {
        if (genre === "All") {
            setTracks(selectedPlaylist.playlist);
        } else {
            setTracks(selectedPlaylist.playlist.filter( x => x.genre === genre ));
        }
    }

    return (
        <button type="button" class="btn btn-sm btn-dark m-1 float-end" onClick={handleSelectGenre}>{genre}</button>
    )
}

export default Button
