import React from 'react';

import { slide as Menu } from 'react-burger-menu'

import styles from './Navbar.module.scss'

import logo from '../assets/Logo.svg';
import custom_cross from '../assets/custom_cross.svg'
import './hamburger.css'

const Navbar = () => {

    const showSettings = (event) => {
        event.preventDefault();
    }
    return (
        <div>
            <div className={styles.bodyNav}>
                <div><img src={logo} alt='logo' /></div>
                <div className={styles.menu}>
                    <div>Home</div>
                    <div>About</div>
                    <div>FAQ</div>
                </div>

                <div className={styles.wallet}>Connect Wallet</div>
            </div>
            <div className={styles.hamburgerMenu}>
                <div style={{ float: 'start', marginRight: 0 }}>
                    <Menu right >
                        <div id="home" className="menu-item" href="/#">Home</div>
                        <div id="about" className="menu-item" href="/#">About</div>
                        <div id="contact" className="menu-item" href="/#">Contact</div>
                        <div className={styles.wallet}>Connect Wallet</div>
                        <hr />
                    </Menu>
                </div>
            </div>
        </div >
    );
};

export default Navbar;

