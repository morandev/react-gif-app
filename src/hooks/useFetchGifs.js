import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

const useFetchGifs = ( category, apiKey ) => {

    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getGifs( category, apiKey )
            .then( gifs => {setGifs(gifs);setIsLoading(false)} )
            .catch( alert );
    }, [])

    return {
        gifs,
        isLoading
    }
}

export default useFetchGifs