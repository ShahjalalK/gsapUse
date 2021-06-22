import React, { useEffect, useState } from 'react'
import './Navbar.css'
import Logo from '../../Image/logo.png'
import pic from '../../Image/profile.jpg'
import spin from '../../Image/lodar.gif'

const Navbar = () => {
    const [spins, setSpin] = useState(false)
    useEffect(() => {
        setSpin(true)
        setTimeout(() => {
            setSpin(false)
        }, 3000)
    }, [])
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={Logo} alt="" />
                <span className="logo-name">Logo name</span>
            </div>
            <div className="searchbox">
                <form action="">
                    <input type="text" placeholder="search" />
                    <i className="fa fa-search"></i>
                </form>
            </div>
            <div className="nav-item">
                <div className="lang">
                    <select name="" id="">
                        <option value="">English</option>
                        <option value="">Bangla</option>
                    </select>
                </div>
                <div className="icon">
                    <ul>
                        <li><i className="fa fa-envelope"></i></li>
                        <li><i className="fa fa-bell"></i></li>
                    </ul>
                </div>
                <div className="acount">
                    {spins ? <img src={spin} alt="" style={{width: '25px', height: '25px'}} /> :
                        <img src={pic} alt="" style={{width: '25px', height: '25px'}} />
                    }
                    
                     
                    <span className="name">robert downey</span>
                    <span className="username">@rover545</span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
