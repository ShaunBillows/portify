import Modal from "./Modal";
import CopyPlaylist from "../components/CopyPlaylist"
import MergePlaylists from "./MergePlaylists";
import DeletePlaylist from "./DeletePlaylist";
import UpdatePlaylist from "./UpdatePlaylist";

const FunctionalModals = ({modalContent, playlists, setModalIsOpen }) => {

    const renderComponent = () => {
        console.log(modalContent);
        switch(modalContent) {
            case 'Copy Playlist':
                // return <CopyPlaylist/>;
                    return <Modal title={modalContent} display={true} closeModal={() => setModalIsOpen(false)} submitButton={true} submitText={modalContent} component={<CopyPlaylist/>} playlists={playlists}/>
            case 'Merge Playlists':
                // return <MergePlaylists playlists={playlists}/>;
                    return <Modal title={modalContent} display={true} closeModal={() => setModalIsOpen(false)} submitButton={true} submitText={modalContent} component={<MergePlaylists playlists={playlists}/>} playlists={playlists}/>
            case 'Delete Playlist':
                // return <DeletePlaylist playlists={playlists}/>;
                    return <Modal title={modalContent} display={true} closeModal={() => setModalIsOpen(false)} submitButton={true} submitText={modalContent} component={<DeletePlaylist playlists={playlists}/>} playlists={playlists}/>
            case 'Update Playlist':
                // return <UpdatePlaylist playlists={playlists}/>;
                    return <Modal title={modalContent} display={true} closeModal={() => setModalIsOpen(false)} submitButton={true} submitText={modalContent} component={<UpdatePlaylist playlists={playlists}/>} playlists={playlists}/>
            default:
              return '';
          }
    }
    // return <Modal title={modalContent} display={true} closeModal={() => setModalIsOpen(false)} submitButton={true} submitText={modalContent} component={renderComponent()} playlists={playlists}/>

}

export default FunctionalModals