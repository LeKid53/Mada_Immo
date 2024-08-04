import React from "react";
import './Proprietes.css';
import {MdLocationPin} from'react-icons/md';
import {BsFillCalendarDateFill} from'react-icons/bs';
import { BsFillCreditCardFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { TiLocation } from "react-icons/ti";
//import les images du contenue secMenu

import image1 from '../../assets/images/image1.jpg';
import image2 from '../../assets/images/image2.jpg';
import image3 from '../../assets/images/image3.jpg';
import image4 from '../../assets/images/image4.jpg';
import image5 from '../../assets/images/image5.jpg';
import image6 from '../../assets/images/image6.jpg';
import image7 from '../../assets/images/image7.jpg';
import image8 from '../../assets/images/image8.jpg';
import image9 from '../../assets/images/image9.jpg';
import image10 from '../../assets/images/image10.jpg';

//On va créer un tableau pour tous les propriétés et faire une iterations

const proprietes = [
    {
        id: 1,
        img: image1,
        name: 'Maison Familiale',
        location: 'Antananarivo',
        rating: 3.8,
    },

    {
        id: 2,
        img: image2,
        name: 'Maison Familiale',
        location: 'Antananarivo',
        rating: 5.8,
    },

    {
        id: 3,
        img: image3,
        name: 'Maison Familiale',
        location: 'Antananarivo',
        rating: 6.0,
    },

    {
        id: 4,
        img: image4,
        name: 'Maison Familiale',
        location: 'Antananarivo',
        rating: 2.8,
    },

    {
        id: 5,
        img: image5,
        name: 'Maison Familiale',
        location: 'Antananarivo',
        rating: 4.2,
    },

    {
        id: 6,
        img: image6,
        name: 'Maison Familiale',
        location: 'Antananarivo',
        rating: 3.5,
    },

    {
        id: 7,
        img: image7,
        name: 'Maison Familiale',
        location: 'Antananarivo',
        rating: 5.5,
    },

    {
        id: 8,
        img: image8,
        name: 'Maison Privée',
        location: 'Antananarivo',
        rating: 4.3,
    },

    {
        id: 9,
        img: image9,
        name: 'Maison Familiale',
        location: 'Antananarivo',
        rating: 5.0,
    },

    {
        id: 10,
        img: image10,
        name: 'Maison Familiale',
        location: 'Antananarivo',
        rating: 2.5,
    }
]

const Proprietes = () => {
    return(
        <div className="propriete section container">
            <div className="secContainer">
                <div className="">
                    <span className="blueText">EXPLOREZ MAINTENANT</span>
                    <h3>Trouvez votre propriété de rêve</h3>
                    <p>
                    Indiquez ci-dessous les critères idéaux 
                    pour votre prochaine propriété
                    </p>
                </div>

                <div className="searchField grid">
                    <div className="inputField flex">
                        <MdLocationPin className='icon'/>
                        <input type="text" placeholder="Location"/>
                    </div>

                    <div className="inputField flex">
                        <BsFillCalendarDateFill className='icon'/>
                        <input type="text" placeholder="Date"/>
                    </div>

                    <div className="inputField flex">
                        <BsFillCreditCardFill className='icon'/>
                        <input type="text" placeholder="Budget"/>
                    </div>

                    <button className="btn flex">
                    <BiSearchAlt className='icon'/>Recherche
                    </button>

                </div>

                <div className="secMenu">
                    <ul className="flex">
                        <li className="active">Tous</li>
                        <li className="">Maison</li>
                        <li className="">Studio</li>
                        <li className="">Terrain</li>
                        <li className="">Ecole</li>
                        <li className="">Chambre</li>
                        <li className="">Hotel</li>
                        <li className="">Magasin</li>
                    </ul>
                </div>

                <div className="proprieteContainer grid">

                    {
                        proprietes.map(propriete => {
                            return(
                                <div className="singlePropriete" key={propriete.id}>
                                    <div className="imgDiv">
                                        <img src={propriete.img} 
                                        alt="propriété Image" />
                                        <div className="descInfo flex">
                                            <div className="Text">
                                                <span className="name">
                                                    {propriete.name}
                                                </span>
                                                <p className="flex">
                                                    <TiLocation className="icon"/>
                                                    {propriete.location}
                                                </p>
                                            </div>
                                            <span className="rating">
                                                {propriete.rating}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        } )
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Proprietes;