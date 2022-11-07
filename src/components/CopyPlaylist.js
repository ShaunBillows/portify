import { useState } from "react"
import { createPlaylist } from "../utils"

const CopyPlaylist = ({ tracks, cookies, setUser, closeModal, modalContent }) => {

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const [ input, setInput ] = useState("")

    const handleSumbit = async () => {
        const status = await createPlaylist(    
            input,
            tracks,
            cookies,
            setUser
        )
        // console.log(cookies);
        if (status) {
            alert("success")
        }
    }

    return (
        <div className=" d-flex flex-column ">
    <form className="form-inline px-2 mt-4">
    <div className="form-group mx-sm-3 mb-2">
    <label  className="" style={{maxWidth:"270px"}}>Copy selected tracks into a new playlist.</label>
    {/* <input type="text" className="form-control"  placeholder="New name" onChange={handleChange}></input> */}
  </div>
  <div className="form-group mx-sm-3 mb-2">
    <label  className=" mb-1">Select playlist name</label>
    <input type="text" className="form-control"  placeholder="Playlist name" onChange={handleChange}></input>
  </div>
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

export default CopyPlaylist
