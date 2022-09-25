import { useState } from "react";

const GifExpertApp = () => {
    
    const [ categories, setCategories ] = useState(['OnePunch', 'Goku', 'Vegeta']);

    return (
        <>
            <h1>GifExpertApp</h1>
            <o>
                {
                    categories.map( cat => <li key={cat} >{cat}</li>)
                }
            </o>
        </>
    );
};

export default GifExpertApp;
