import React, { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

/**
 * 
 * Grid o tablero de gifs para cada categoria
 * 
 * @param {*} param0 
 * @returns 
 */
const GifGrid = ({ category, apiKey }) => {
    
    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        getGifs( category, apiKey )
            .then( gifs => setGifs(gifs) )
            .catch( alert );
    }, [])
    
    return (
        <div className="
                text-center
                border-dotted border-2 border-sky-500"
        >
            <h4>{category}</h4>
            <hr />
            <div>
            {
                gifs.map(({ id, title, url }) => {
                    return <div key={id}>
                        <h2>{title}</h2>
                        <img src={url} alt={category} />
                    </div>    
                })
            }
            </div>
        </div>
    );
};

export default GifGrid;
