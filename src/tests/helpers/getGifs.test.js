import { getGifs } from '../../helpers/getGifs'
import { API_KEY } from '../../GifExpertApp.jsx'


describe('tests en getGifs helper', () => {

    const category = 'One Punch'

    test('debe retornar un arreglo de gifs', async () => {
        const gifs = await getGifs( category, API_KEY );

        expect( gifs.length ).toBeGreaterThan( 0 );
        // si el expect de arriba falla el de abajo no se ejecuta
        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String ),
        });
    })
})