const { render, screen } = require("@testing-library/react");
import GridItem from "../../components/GridItem";

describe("test in <GridItem />", () => {
     const title = "Saitama";
     const url = "https://one-punch.com/saitama.jpg";

     test("debe hacer match con el snapshot ", () => {
          const { container } = render(<GridItem title={title} url={url} />);

          //TODO: hacer el snapshot de GridItem para poder realizar:
          //expect( container ).toMatchSnapshot();
     });

     test("debe mostrar la imagen con el URL indicado", () => {
          render(<GridItem title={title} url={url} />);

          // screen.debug();

          const { src, alt } = screen.getByRole("img");

          expect(src).toBe(url);
          expect(alt).toBe("");
     });

     test("<GridItem /> debe mostrar el titulo", () => {
        render(<GridItem title={title} url={url} />);

        //que exista el titulo
        expect( screen.getByText( title ) ).toBeTruthy();
     });
});
