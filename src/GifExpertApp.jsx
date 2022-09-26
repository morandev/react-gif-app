import { useState } from "react";
import CategoryAdder from "./components/CategoryAdder";
import GifGrid from "./components/GifGrid";

/**
 * Hi, you need to use your own api-key hehe!
 * 
 * https://developers.giphy.com/
 */
const API_KEY = 'zYIDMpowlV24OPjnTagbvCMm8chVWRhp';

/**
 * 
 * Entry Point Component
 * 
 * estado: Categorias o Etiquetas para busqueda de gifs
 *  
 * @returns 
 */
const GifExpertApp = () => {
    
    const [ categories, setCategories ] = useState(['goku']);

    const onEnterPress = ( input ) => {
        input = input.trim();
        if( input.length > 3 && !categories.includes( input ) ) 
            setCategories([input, ...categories ]);
    };

    return (
        <div className="
            flex flex-col justify-center items-center"
        >
            <h1 className="
                font-sans text-3xl font-bold underline
                p-4"
            >
                GifExpertApp
            </h1>
            <CategoryAdder onEnterPress={onEnterPress} />
            <div>
                {/* the key property is required */}
                {categories.map( cat => <GifGrid key={cat} category={cat} apiKey={API_KEY} /> )}
            </div>
        </div>
    )
};

export default GifExpertApp;
