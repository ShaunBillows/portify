import { updatePlaylist } from "../utils";

const UpdatePlaylist = ({
  selectedPlaylist,
  cookies,
  setUser,
  closeModal,
  modalContent,
  setEditPlaylist,
  setPage,
}) => {
  const handleUpdatePlaylist = async () => {
    const status = await updatePlaylist(
      selectedPlaylist.name,
      selectedPlaylist.playlist,
      cookies,
      setUser
    );
    if (status !== 200) {
      alert("An error occured.");
    }
    closeModal();
    setEditPlaylist(false);
    setPage(1);
  };

  return (
    <div className=" d-flex flex-column ">
      <form className="form-inline px-2 mt-4">
        <div className="form-group mx-sm-3 mb-2">
          <p style={{ maxWidth: "300px" }}>
            Save changes to {selectedPlaylist.name}.<br></br>
            <br></br>
            Any edits you've made to {selectedPlaylist.name} will be applied.
            This action is irreversable.
          </p>
        </div>
      </form>
      <div>
        <div className="modal-footer mt-4">
          <button
            type="button"
            className="btn btn-success"
            onClick={handleUpdatePlaylist}
          >
            {modalContent}
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdatePlaylist;
