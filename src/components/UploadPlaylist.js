import { createSpotifyPlaylist } from "../utils/spotifyClient"

const UploadPlaylist = () => {

    const handleCreatePlaylist = async () => {
        await createSpotifyPlaylist(
            "test", 
            "shaunbillows", 
            "BQDFa84w4AJDctxGWNwROriAz1sU4oybAeCBfWNwmozR7Q5Y1_9SPdsZd-xZ7R78hYC2QftOIZMOQLHIpnfkiv20tKWUR9iAjJ5WC4Gwl0nEsV8EljwYDb_-ukZY58MNoBwg8Ng3BAY_kbgV3uUh7Kj9jwSihbV-TS2SBiV_UsQuK5sj4jTpeIXpi1oEyixw8OXwRQvJqFbP0H6zYXQCiM438ixx3FXCqACSHlpf2sG2Fhg"
        )
    }

    return (

    <div class="container d-flex justify-content-center" id="bootstrap-override">
        <div className="form-container bg-dark mt-3"> 
            <div class="contact px-5 py-5 w-100" >

                    <div class="col mt-3"> <input type="text" class="form-control bg-dark"placeholder="Spotify URL" /> </div>

                    <div class="col mt-3"> 
                        <input type="text" class="form-control  bg-dark" placeholder="Playlist ID" /> 
                    </div>

                    <div class="col mt-3"> <input type="text" class="form-control bg-dark" placeholder="Playlist Name" /> </div>

                    <div class="col d-flex justify-content-center"> <button class="btn btn-success mt-4 px-5 w-100" onClick={handleCreatePlaylist}>Retrive playlist information<i class="fa fa-long-arrow-right ml-2 mt-1"></i></button> </div>
                
            </div>
        </div>
    </div>
        
    )
}

export default UploadPlaylist