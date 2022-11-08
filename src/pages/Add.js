import Navbar from "../components/Navbar"
import UploadPlaylist from "../components/UploadPlaylist"
import Header from "../components/Header"

const Home = ({logout}) => {
    return (
        <>
        <Navbar logout={logout}/>
        <div className="container-lg mt-3 py-3">
        <Header title={"Upload Playlist"}/>
        <UploadPlaylist/>
        </div>
        </>

    )
}

export default Home