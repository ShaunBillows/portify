import { useState } from "react"
import { login } from "../utils"
import { useNavigate } from "react-router-dom"

const Login = ({setUser,
    setCookie,
    setIsLoggedIn}) => {

   const [ usernameInput, setUsernameInput ] = useState("")
   const [ passwordInput, setPasswordInput ] = useState("")
   const navigate = useNavigate()

   const handleUsernameChange = async (e) => {
        setUsernameInput(e.target.value)
   }
   const handlePasswordChange = async (e) => {
    setPasswordInput(e.target.value)
    }
    const handleClickLogin = async () => {
        await login(  
            usernameInput,
            passwordInput,
            setUser,
            setCookie,
            setIsLoggedIn)
        navigate("/")
    }

    return (
        <div className="container d-flex flex-column justify-content-center align-items-center" style={{height: "100vh"}} >
            <div className="row w-100 pb-4 pt-4 px-4 bg-dark" style={{maxWidth: "350px", borderRadius: "8px"}}>
            <h2 className="mb-4 text-center">Login</h2>
            <form>
            <div className="form-group">
                <label for="formGroupExampleInput">Username</label>
                <input type="text" className="form-control" value={usernameInput} onChange={handleUsernameChange} placeholder="Enter username"></input>
            </div>
            <div className="form-group mt-2">
                <label for="formGroupExampleInput2">Password</label>
                <input type="password" className="form-control" value={passwordInput} onChange={handlePasswordChange}  placeholder="Enter password"></input>
            </div>
            </form>
            <div className="mt-5 d-flex justify-content-center w-100">
                <button className="btn btn-primary px-4" onClick={handleClickLogin}>Enter</button>
            </div>
        </div>
        </div>
    )
}

export default Login