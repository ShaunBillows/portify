import Navbar from "../components/Navbar";
import TracksTable from "../components/TracksTable";
import { useState, useEffect } from "react";
import PlaylistTable from "../components/PlaylistTable";
import Header from "../components/Header";
import SelectGenre from "../components/SelectGenre";
import Modal from "../components/Modal";
import FunctionalModals from "../components/FunctionalModals";
import FunctionButtons from "../components/FunctionButtons";

const Create = ({ logout, user, cookies, setUser }) => {
    // tracks states
  const [playlists, setPlaylists] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState();
  const [genres, setGenres] = useState([]);
  const [tracks, setTracks] = useState([]);

    // populate tables
  useEffect(() => {
    if (user) {
      setPlaylists(user.playlists);
      setSelectedPlaylist(user.playlists[0]);
      setGenres([
        "All",
        ...new Set(user.playlists[0].playlist.map((x) => x.genre)),
      ]);
      setTracks(user.playlists[0].playlist);
    }
  }, [user]);

  // keep tracks of tracks page number
  const [page, setPage] = useState(1);
  // toggles the edit playlist mode
  const [editPlaylist, setEditPlaylist] = useState(false);

  // modals
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  return (
    <>
        {/* Function Modals */}
      {modalIsOpen && (
        <Modal
          title={modalContent}
          display={true}
          closeModal={() => setModalIsOpen(false)}
          submitButton={false}
          submitText={modalContent}
          modalContent={modalContent}
          playlists={playlists}
          selectedPlaylist={selectedPlaylist}
          tracks={tracks}
          cookies={cookies}
          setUser={setUser}
          setEditPlaylist={setEditPlaylist}
          setPage={setPage}
        />
      )}
        {/* Navbar */}
      <Navbar logout={logout} />

      <div className="container-lg pb-3 mt-3  " style={{overflow:"hidden"}} >
      <div className="bg-success ms-0 " style={{borderRadius: "6px"}}>

        {/* Function Buttons */}
        <div className="row ">
          <FunctionButtons
            setModalIsOpen={setModalIsOpen}
            setModalContent={setModalContent}
            selectedPlaylist={selectedPlaylist}
            setEditPlaylist={setEditPlaylist}
            editPlaylist={editPlaylist}
          />
        </div>

        <div className="row me-0">
          <div className="col-2 "></div>
            {/* page number */}
          <div className="col-2 d-flex align-items-end"><h5 className="m-0 p-0 bg-dark py-3 px-2 rounded-top">Page: {page} / {Math.ceil(tracks.length/30)}</h5></div>
          {/* genre dropdown*/}
          <div className=" col-xl-5 col-lg-4 col-md-4 col-sm-3 col-1"></div>
          <div className="col-xl-3 col-lg-4 col-md-4 col-sm-5 col-7 text-end mt-1 mb-2 " id="bootstrap-override">
            <SelectGenre
              genres={genres}
              setTracks={setTracks}
              selectedPlaylist={selectedPlaylist}
              setPage={setPage}
              setEditPlaylist={setEditPlaylist}
            />
          </div>
        </div>
        </div>

        <div className="row mt-2">
          {/* playlists table */}
          <div className="col-2  pe-0">
            <PlaylistTable
              playlists={playlists}
              setSelectedPlaylist={setSelectedPlaylist}
              setGenres={setGenres}
              setTracks={setTracks}
              setPage={setPage}
              setEditPlaylist={setEditPlaylist}
            />
          </div>
          {/* tracks table*/}
          <div className="col-10">
            <TracksTable
              tracks={tracks}
              setTracks={setTracks}
              editPlaylist={editPlaylist}
              setSelectedPlaylist={setSelectedPlaylist}
              selectedPlaylist={selectedPlaylist}
              page={page}
              setPage={setPage}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
