import { fireEvent, render, screen } from "@testing-library/react";
import CategoryAdder from "../../components/CategoryAdder";

describe("tests en el <CategoryAdder />", () => {
     test("debe cambiar el valor en el input", () => {
          render(<CategoryAdder onEnterPress={() => {}} />);

          const inputElm = screen.getByRole("textbox");

          //disparar evento de entrada de datos en el input
          fireEvent.input(inputElm, { target: { value: "Goku" } });

          expect(inputElm.value).toBe("goku");
          // screen.debug();
     });

     test("debe llamar onInputSent al presionar enter y llamar onEnterPress", () => {
          //jest function
          const onEnterPress = jest.fn();

          render(<CategoryAdder onEnterPress={onEnterPress} />);

          const inputVal = "gokaaaaaaaau";
          const inputElm = screen.getByRole("textbox");

          //disparar evento de entrada de datos en el input
          fireEvent.input(inputElm, { target: { value: inputVal } });
          //disparar evento de soltar la tecla enter en el input
          fireEvent.keyUp(inputElm, {
               key: "Enter",
               code: "Enter",
               charCode: 13,
          });

          expect(inputElm.value).toBe("");
          // al utilizar jest function podemos saber si esta funcion fue llamada o no
          expect(onEnterPress).toHaveBeenCalled();
          // al utilizar jest function podemos saber si esta funcion fue llamada 1 sola ves
          expect(onEnterPress).toHaveBeenCalledTimes(1);
          // al utilizar jest function podemos saber si esta funcion fue llamada con el valor de inputVal
          expect(onEnterPress).toHaveBeenCalledWith(inputVal);
     });
});
