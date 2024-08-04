import React from "react";
import "./Accueil.css";
import Video from '../../assets/images/video.mp4'
//import Image from "../../assets/images/img1.jpg"
import {AiOutlineSwapRight} from 'react-icons/ai';


const Accueil = () => {
    return (
        <div className="Accueil">
            <div className="imgBg">
                <video src={Video} autoPlay loop muted></video>
                {/*<img src={Image} alt="" />*/}
            </div>

            <div className="sectionText">
                <h1>Trouvez les plus belles endroits à Madagascar avec nous</h1>
                <p>
                    Decouvrer les sites mervellieux de notre grandes îles Paradisiaque,
                    Mada Dodo vous offre votre rêve en quelque clic seulement. 
                </p>
                <button className="btn flex">
                    S'inscrire <AiOutlineSwapRight className='icon'/>
                </button>
            </div>

            <div className="popularPlaces">
                <div className="content">
                    <h3>Endroits les plus visites</h3>
                    <div className="images flex">
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Accueil;