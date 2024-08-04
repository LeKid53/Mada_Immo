import React from "react";
import './Reviews.css';

import { AiFillStar } from "react-icons/ai";
import pers1 from '../../assets/images/pers1.jpeg';
import pers2 from '../../assets/images/pers2.jpeg';
import pers3 from '../../assets/images/pers3.jpeg';
import pers4 from '../../assets/images/pers4.jpeg';
import pers5 from '../../assets/images/persLong4.jpg';

const Reviews = () => {
    return(
        <div className="review section container">
            <div className="secContainer grid">
                <div className="textDiv">
                    <span className="blueText">
                        DE LA PART DE NOS CLIENTS
                    </span>
                    <h3>
                        Les commentaires expriment 
                        la satisfaction de nos clients
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Aliquam, aliquid iure. 
                        Inventore omnis laborum repellendus 
                        placeat voluptatibus assumenda deserunt eveniet 
                        quibusdam sit nesciunt laudantium, 
                        optio quod voluptates dolorum distinctio dicta?
                    </p>

                    <span className="stars flex">
                        <AiFillStar  className="icon"/>
                        <AiFillStar  className="icon"/>
                        <AiFillStar  className="icon"/>
                        <AiFillStar  className="icon"/>
                        <AiFillStar  className="icon"/>
                    </span>

                    <div className="clientsImages flex">
                        <img src={pers1} alt="Client Image" />
                        <img src={pers2} alt="Client Image" />
                        <img src={pers3} alt="Client Image" />
                        <img src={pers4} alt="Client Image" />
                    </div>
                </div>

                <div className="imgDiv">
                    <img src={pers5} alt="Div Image" />
                </div>
            </div>
        </div>
    );
};

export default Reviews;