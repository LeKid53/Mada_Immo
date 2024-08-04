// src/Header.jsx
import React, { useState } from 'react';
import './Header.css';
//import { FaUser, FaBars } from 'react-icons/fa';
import { AiFillCloseCircle } from 'react-icons/ai';
import { PiDotsNineBold } from 'react-icons/pi';
import {FaHome} from 'react-icons/fa';
//import Image from '../../assets/images/MadaImmo.PNG';

const Header = () => {
    const [header, setHeader] = useState("header_center");
    //Afficher le menu
    const showheader = () => {
        setHeader("header_center showheader");
    };
    //Remonter le menu
    const removeheader = () => {
        setHeader("header_center");
    };


    return (
        <header className="header">
            <div className="header_left">
                <FaHome className="icon"/> 
                <span>Mada Immo </span>
                {/*<a href="./"><img src={Image} alt="Mada Immo" className='logo' color='white'/></a>*/}
            </div>
            <div className={header}>
                <ul>
                    <li className='navList'>
                        Propriétés
                    </li>
                    <li className='navList'>
                        Experiences
                    </li>
                    <li className='navList'>
                        Contact
                    </li>
                    {/* Icon pour eclipse le menu */}
                    <AiFillCloseCircle className='icon closeIcon' onClick={removeheader}/>
                </ul>
            </div>
            <button className="signUpBtn btn">
                Se Connecter
            </button>
            {/* Icon pour le menu en petite fenetre */}
            <PiDotsNineBold className='icon menuIcon' onClick={showheader} /> {/*color='white'*/}
        </header>
    );
};

export default Header;
