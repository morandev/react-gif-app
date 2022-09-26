import useFetchGifs from "../hooks/useFetchGifs";
import GridItem from "./GridItem";

/**
 * 
 * Grid o tablero de gifs para cada categoria
 * 
 * @param {*} param0 
 * @returns 
 */
const GifGrid = ({ category, apiKey }) => {
    
    const { gifs, isLoading } = useFetchGifs( category, apiKey );

    return (
        <div className="
                text-center
                drop-shadow-2xl
                m-1 md:m-3"
        >
            <h4 className="
                font-sans font-medium text-2xl text-slate-500
                p-2
                "
            >
                {`${category} gifs`}
            </h4>
            <hr />
            <div
                className="
                flex flex-row flex-wrap justify-evenly items-center
                rounded-lg
                "
            >
            {
                isLoading || gifs.map(({ id, title, url }) => <GridItem key={id} title={title} url={url} category={category} />)
            }
            </div>
        </div>
    );
};

export default GifGrid;
