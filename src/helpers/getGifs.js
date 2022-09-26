
const getGifs = async (category, apiKey) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=5&offset=0&rating=g&lang=es`;

    const resp = await fetch(url);
    const { data } = await resp.json();

    return data.map(({ id, title, images: { original: { url } } }) => ({ id, title, url }));
}

export {
    getGifs,
}