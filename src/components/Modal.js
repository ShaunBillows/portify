import styled from "styled-components";
import CopyPlaylist from "../components/CopyPlaylist"
import MergePlaylists from "./MergePlaylists";
import DeletePlaylist from "./DeletePlaylist";
import UpdatePlaylist from "./UpdatePlaylist";

const Modal = ({title, closeModal, submitButton, submitText, modalContent, playlists, tracks, selectedPlaylist, cookies, setUser}) => {

    const handleOpenModal = () => {
        switch(modalContent) {
            case 'Copy Playlist':
                return <CopyPlaylist tracks={tracks} cookies={cookies} setUser={setUser} closeModal={closeModal} modalContent={modalContent}/>;
            case 'Merge Playlists':
                return <MergePlaylists playlists={playlists} cookies={cookies} setUser={setUser} closeModal={closeModal} modalContent={modalContent}/>;
            case 'Delete Playlist':
                return <DeletePlaylist playlists={playlists} cookies={cookies} setUser={setUser} closeModal={closeModal} modalContent={modalContent}/>;
            case 'Update Playlist':
                return <UpdatePlaylist selectedPlaylist={selectedPlaylist} cookies={cookies} setUser={setUser} closeModal={closeModal} modalContent={modalContent}/>;
            default:
              return '';
          }
    }

    return (
        <>
        <Wrapper className="modal" tabindex="-1" role="dialog">
        <Container className="modal-dialog modal-dialog-centered " role="document">
            <Content className="modal-content bg-dark " >
            <div className="modal-header ps-4">
                <h5 className="modal-title">{title}</h5>
                <ButtonContainer>
                <Button  type="button" className="btn btn-dark" data-dismiss="modal" aria-label="Close" onClick={closeModal}>
                <span aria-hidden="true">&times;</span>
                </Button>
                </ButtonContainer>
            </div>
            <Body className="modal-body p-0 m-0" >
                {handleOpenModal()}
            </Body>
            <div  style={{display: submitButton ? "block": "none"}}>
            <div className="modal-footer" >
                <button type="button" className="btn btn-success">{submitText}</button>
                <button type="button" className="btn btn-secondary" data-dismiss="modal"  onClick={closeModal}>Close</button>
            </div>
            </div>
            </Content>
        </Container>
        </Wrapper>
        </>
    )
}

export default Modal

const Wrapper = styled.div`
    display: ${props => props.display ? "block" : "none"};
    display: flex;
    justify-content: center;
    /* align-items: center;
    /* width: 100%; */
`
const Container = styled.div`
    position: relative;
    display: table; /* This is important */ 
    overflow-y: auto;    
    overflow-x: auto;
    width: auto;
    min-width: 300px;   
    @media (max-width: 480px){
    /* margin: 0; */
    /* padding: 0; */
    }
`
const Content = styled.div`
    /* background-color: rgba(74,74,74); */
    border: 2px solid rgb(200, 200, 200);
    /* width: fit-content; */
`
const Body = styled.div`
    display: flex;
    justify-content: center;
`
const ButtonContainer = styled.div`
    /* background-color: rgba(0,0,0); */
    aspect-ratio: 1/1;
    font-size: larger;
    border-radius: 8px;
    height: 35px;
    width: 35px;
`
const Button = styled.button`
    /* background-color: rgba(0,0,0); */
    font-size: larger;
    color: white;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    border: none;
    border-radius: 8px;
    line-height: 0%;
`