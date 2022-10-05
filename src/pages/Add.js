import Navbar from "../components/Navbar"
import Form from "../components/Form"
import Header from "../components/Header"

const Home = () => {
    return (
        <>
        <Navbar/>
        <div className="container-lg mt-3 py-3">
        <Header title={"Upload Playlist"}/>
        <Form/>
        </div>
        </>

    )
}

export default Home