import GifGrid from "../../components/GifGrid";
import { API_KEY } from "../../GifExpertApp";
import useFetchGifs from "../../hooks/useFetchGifs";

const { render, screen } = require("@testing-library/react");

//mock completo de custom hook
jest.mock("../../hooks/useFetchGifs");

describe("tests en <GifGrid />", () => {
     const category = "Goku";

     test("debe mostrar el loading al iniciar", () => {
          useFetchGifs.mockReturnValue({
               images: [],
               isLoading: true,
          });

          render(<GifGrid category={category} apiKey={API_KEY} />);
          //screen.debug()
          expect(screen.getByText("Cargando...")).toBeTruthy();
          expect(screen.getByText(`${category} gifs`)).toBeTruthy();
     });

     test("debe mostrar items luego de haber cargado imagenes", () => {
          const gifs = [
               {
                    id: "abc1",
                    title: "SenTinPlan1",
                    url: "https://face.com/dulces1",
               },
               {
                    id: "abc2",
                    title: "SenTinPlan2",
                    url: "https://face.com/dulces2",
               },
               {
                    id: "abc3",
                    title: "SenTinPlan3",
                    url: "https://face.com/dulces3",
               },        
                {
                    id: "abc4",
                    title: "SenTinPlan4",
                    url: "https://face.com/dulces4",
               },
               {
                id: "abc5",
                title: "SenTinPlan5",
                url: "https://face.com/dulces5",
                },
          ];

          useFetchGifs.mockReturnValue({
               gifs,
               isLoading: false,
          });

          render(<GifGrid category={category} apiKey={API_KEY} />);
          //   screen.debug()

          expect( screen.getAllByRole('img').length ).toBe(5);
     });
});
