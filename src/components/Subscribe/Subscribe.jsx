import React from "react";
import "./Subscribe.css";

import pers8 from "../../assets/images/pers8.avif"; 


const Subscribe = () => {
    return(
        <div className="subscribe section container">
            <div className="secContainer grid">
                <img src={pers8} alt="Div Img" />

                <div className="textDiv">
                    <h4> Les Meilleurs propriétés que vous vouliez</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Voluptate, tenetur earum dolores amet tempore assumenda obcaecati! Voluptatum, 
                        mollitia. Nesciunt alias, 
                        dolore id vitae libero officia nisi temporibus doloribus laborum provident?
                    </p>

                    <button className="btn">
                        Commencer Maintenant
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;