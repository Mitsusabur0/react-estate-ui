import { useState } from "react";
import "./navbar.scss"

function Navbar() {
    const [open, setOpen] = useState(false)
    return (
        <nav>
            <div className="left">
                <a href="/" className="logo">
                    <img src="./logo.png" alt=""/>
                    <span>CasaBusco</span>
                </a>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Others</a>
            </div>

            <div className="right">
                <a href="/">Sign In</a>
                <a href="/" className="registerBtn">Sign Up</a>

            {/* Hamburguer */}
            <div className="menuIcon">
                <img 
                    src="/menu.png" 
                    alt="" 
                    onClick={() => setOpen((prev) => !prev)} 
                />
            </div>
            <div className={open ? "menu active" : "menu"}>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Others</a>
                <a href="/">Sign In</a>
                <a href="/">Sign Up</a>
            </div>


            </div>
        </nav>
    )
}

export default Navbar;

