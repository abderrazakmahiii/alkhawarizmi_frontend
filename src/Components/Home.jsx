import React from 'react';
import home from '../images/home.png';
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Home() {
    return (
        <div id="home">
            <img src={home} />
            <div id="home-text">
                <h2>Alkhawarizmi AI brings life to your old memories using the power of AI.</h2>
                <p>Alkhawirizmi's AI algorithms meticulously analyze the intricate details of your images, discerning patterns and textures to accurately infuse color. The result is a seamless blend of realism and artistry, preserving the essence of your original photos while imbuing them with a touch of color magic.</p>
                <div className="buttons">
                    <div className="github"><button><a target="_blank" href="https://github.com/abderrazakmahiii/alkhawarizmi"><FaGithub /> Github</a></button></div>
                   <div className="portfolio"> <button><a target="_blank" href="https://abderrazakmahiii.github.io/myportfolio/"><FaExternalLinkAlt /> Portfolio</a></button></div>
                </div>
            </div>
        </div>

    );
};