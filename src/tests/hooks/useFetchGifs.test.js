import { renderHook, waitFor } from "@testing-library/react";
import useFetchGifs from "../../hooks/useFetchGifs"
import { API_KEY } from '../../GifExpertApp.jsx'


describe('tests en useFetchGifs custom hook', () => {

    test('debe retornar el estado inicial', () => {

        const { result } = renderHook(() => useFetchGifs('Goku', API_KEY))
    });

    test('debe retornar arreglo con gifs y isLoading en false', async () => {

        const { result } = renderHook(() => useFetchGifs('Goku', API_KEY));
        await waitFor(
            () => expect(result.current.gifs.length).toBeGreaterThan(0)
        );
        const { gifs, isLoading } = result.current;

        expect(gifs.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });

})