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
        const activeRoute = getActiveRouteName();
        setActiveRouteName(activeRoute);
    }, [location]);

    const isLinkActive = (path) => {
        return location.pathname === path;
    }

    console.log(location.pathname)
    // Function to get the name of the active route
    const getActiveRouteName = () => {
        let pathName = '';
        if (location.pathname === '/') {
            pathName = 'Home';
        } else if (location.pathname.includes('/project/')) {
            pathName = location.pathname.replace(/\/project\//i, '');
            console.log(pathName);
        } else {
            pathName = location.pathname.replace('/', '');
        }
        return pathName;
    };


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