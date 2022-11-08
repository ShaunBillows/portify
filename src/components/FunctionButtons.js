

const FunctionButtons = ({setModalIsOpen, setModalContent, selectedPlaylist, setEditPlaylist, editPlaylist}) => {

    const handleClickEdit = () => {
        setEditPlaylist(!editPlaylist)
    }

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
    const handleClickUpload = () => {
        setModalIsOpen(true)
        setModalContent("Upload Playlist")
    }

    return (
        <>
        <div className="col d-flex align-items-center">
            <h3 className="p-2">Playlist: {selectedPlaylist && selectedPlaylist.name}</h3>
        </div>
        <div className="col d-flex align-items-center justify-content-end">
                {
                    editPlaylist
                    ?
                    <button type="button" onClick={handleClickCreate} className="btn btn-primary m-1">Update</button>
                    :
                    <div className="mt-5"></div>
                }
        </div>
            {/* </div> */}
            <div className="row">
                <div className="col">                  
                </div>
                <div className="col">
                <div  className="text-end pe-1">
                <label>Playlist Functions</label>
                </div>
                <button type="button" className="btn btn-dark m-1 float-end" onClick={handleClickEdit}>Edit</button>  
                <button type="button" onClick={handleClickDelete} className="btn btn-dark m-1 float-end">Delete</button>
                <button type="button" onClick={handleClickMerge} className="btn btn-dark m-1 float-end">Merge</button>
                <button type="button" onClick={handleClickCopy} className="btn btn-dark m-1 float-end">Copy</button>  
                <button type="button" onClick={handleClickUpload} className="btn btn-success m-1 float-end">Upload</button>  

                </div>                 
                </div>
                </>
    )
}

export default FunctionButtons