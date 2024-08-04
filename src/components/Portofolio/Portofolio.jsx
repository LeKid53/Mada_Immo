import React from "react";
import './Portofolio.css';

//Importer image comme icon

import icon1 from '../../assets/images/icon1.png';
import icon2 from '../../assets/images/icon2.png';
import icon3 from '../../assets/images/icon3.png';
import image from '../../assets/images/im5.jpeg';

const Portofolio = () => {
    return(
        <div className="portofolio section container">
            <div className="secContainer grid">
                <div className="leftContainer">
                    <div className="secHeading">
                        <h3>Pourquoi vous devez nous choisir</h3>
                        <p>
                            Nous savons ce que vous voulez, 
                            de l'experience et de savoir en propriété immobilier.
                        </p>
                    </div>

                    <div className="grid">
                        <div className="singlePortofolio flex">
                            <div className="iconDiv">
                                <img src={icon1} alt="Icon Image" />
                            </div>

                            <div className="infor">
                                <h4>Sécurité et Support</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                    Magni atque fuga voluptatibus, inventore et odit dolor totam sint,
                                     ex dolore dicta culpa. 
                                     Cumque, quasi natus itaque esse facere cum odit!
                                </p>
                            </div>
                        </div>

                        <div className="singlePortofolio flex">
                            <div className="iconDiv">
                                <img src={icon3} alt="Icon Image" />
                            </div>

                            <div className="infor">
                                <h4>Propiétés </h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                    Magni atque fuga voluptatibus, inventore et odit dolor totam sint,
                                     ex dolore dicta culpa. 
                                     Cumque, quasi natus itaque esse facere cum odit!
                                </p>
                            </div>
                        </div>

                        <div className="singlePortofolio flex">
                            <div className="iconDiv">
                                <img src={icon2} alt="Icon Image" />
                            </div>

                            <div className="infor">
                                <h4>24h/7j Assistances</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                    Magni atque fuga voluptatibus, inventore et odit dolor totam sint,
                                     ex dolore dicta culpa. 
                                     Cumque, quasi natus itaque esse facere cum odit!
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="rightContent">
                    <img src={image} alt="Image" />
                </div>
            </div>
        </div>
    );
};

export default Portofolio;