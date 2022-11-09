import { useState } from "react";

const Navbar = ({logout}) => {

    const [ dropdownOpen, setDropdownOpen ] = useState(false)

    const handleToggle = () => {
        setDropdownOpen(!dropdownOpen)
    }
    const handleClickLogout = () => {
        logout()
    }

    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand p-2" href="/">PORTIFY</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" onClick={handleToggle}></span>
    </button>
    <div className="collapse navbar-collapse" style={{display: dropdownOpen ? "block" : "none"}}>
        <ul className="navbar-nav  ps-2" style={{cursor: "pointer"}}>
        <li className="nav-item active">
            <a className="nav-link" href="/create">Browse & Create</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" onClick={handleClickLogout}>Log out</a>
        </li>
        </ul>
    </div>
    </nav>
    )
}

export default Navbar