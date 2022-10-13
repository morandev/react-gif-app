import { render, screen } from "@testing-library/react"
import GifExpertApp from "../GifExpertApp"

describe('tests en <GifExpertApp />', () => {

    test('debe mostrar como estado inicial Cargando...', () => {
        render( <GifExpertApp /> );

        expect(screen.getByText("Cargando...")).toBeTruthy();
    });

});