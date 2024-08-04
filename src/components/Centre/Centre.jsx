import React from "react";
import "./Center.css";

const Center = () => {
    return(
        <div className="centre section">
            <div className="secContainer container">
                <div className="grid">
                    <span className="flex">
                        <h1>50</h1>
                        <p>
                            Propreiétés Visites
                        </p>   
                    </span>

                    <span className="flex">
                        <h1>1K+</h1>
                        <p>
                            Propriétés à Vendre 
                        </p>   
                    </span>

                    <span className="flex">
                        <h1>2k+</h1>
                        <p>
                            Propriétés à louer 
                        </p>   
                    </span>

                    <span className="flex">
                        <h1>5.4</h1>
                        <p>
                            listes globales 
                        </p>   
                    </span>
                </div>
            </div>

        </div>
    );
};

export default Center;