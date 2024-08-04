import React, {/* useState */} from "react";
import "./Questions.css";

//import Accordion from "./Accordion";

const Questions = () => {

    //const [active, setActive] = useState("Question1?");

    return(
        <div className="questions section container">
            <div className="secHeading">
                <h3>Foire aux Questions</h3>
            </div>

            <div className="secContainer grid">
                {/* Nous allons apporté plusieurs 
                fichiers de differents composants */}
                {/*<div className="accordion grid">
                    <Accordion  title="Question1?"
                    desc="Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. Sunt tempore inventore 
                ullam delectus voluptas voluptatibus. 
                Facere nam dolorem quibusdam sapiente, 
                molestiae eaque corrupti sunt quisquam! 
                Itaque porro tenetur dolores eveniet!"
                    active={active} 
                    setActive={setActive}
                    />

                    <Accordion  title="Question2?"
                    desc="Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. Sunt tempore inventore 
                ullam delectus voluptas voluptatibus. 
                Facere nam dolorem quibusdam sapiente, 
                molestiae eaque corrupti sunt quisquam! 
                Itaque porro tenetur dolores eveniet!"
                    active={active} 
                    setActive={setActive}
                    />
                    {/*<Accordion />

                </div>*/}


                <div className="form">
                    <div className="secHeading">
                        <h4>Avez vous une question specifique?</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, 
                            adipisicing elit. Sunt tempore inventore 
                            ullam delectus voluptas voluptatibus. 
                            Facere nam dolorem quibusdam sapiente, 
                            molestiae eaque corrupti sunt quisquam! 
                            Itaque porro tenetur dolores eveniet!
                        </p>
                    </div>

                    <div className="formContent grid">
                        <input type="email" placeholder="Entrer votre adresse email"/>
                        <textarea placeholder="Poser votre question ici"></textarea>
                        <button className="btn">
                            Envoyer une question
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Questions;