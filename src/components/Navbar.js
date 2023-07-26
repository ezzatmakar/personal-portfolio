import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);
    const location = useLocation();
    const [activeRouteName, setActiveRouteName] = useState('');

    useEffect(() => {
        setExpandNavbar(false);
        // Get the name of the active route and set it in the state
        const activeRoute = getActiveRouteName();
        setActiveRouteName(activeRoute);
    }, [location]);

    // Function to check if the link is active
    const isLinkActive = (path) => {
        return location.pathname === path;
    }

    // Function to get the name of the active route
    const getActiveRouteName = () => {
        // Replace '/' with 'Home' and remove leading '/'
        return location.pathname === '/' ? 'Home' : location.pathname.replace('/', '');
    }

    return (
        <div className='navbar' id={expandNavbar ? 'open' : 'close'}>
            <div className='activeLink'>
                <p className='activeLinkTitle'>{activeRouteName.replace('-', ' ')}</p>
            </div>

            <div className='toggleButton'>
                <button onClick={() => {
                    setExpandNavbar((prev) => !prev);
                }}>
                    <ReorderIcon />
                </button>
            </div>
            <div className='links'>
                <Link to='/' className={isLinkActive('/') ? 'active' : ''}>Home</Link>
                <Link to='/experience' className={isLinkActive('/experience') ? 'active' : ''}>Experience</Link>
                <Link to='/projects' className={isLinkActive('/projects') ? 'active' : ''}>Projects</Link>
            </div>
        </div>
    )
}

export default Navbar;