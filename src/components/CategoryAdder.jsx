import React, { useState } from "react";

/**
 *
 * Input para las categorias
 *
 * @param {*} param0
 * @returns
 */
const CategoryAdder = ({ onEnterPress }) => {
     const [input, setInput] = useState("");

     const onInputChange = ({ target: { value } }) =>
          setInput(value.toLowerCase());

     const onInputSent = ({ key }) => {
          if (key === "Enter") {
               onEnterPress(input);
               setInput("");
          }
     };

     return (
          <input
               className="
                border border-sky-500
                p-2
            "
               type="text"
               value={input}
               onKeyUp={onInputSent}
               onChange={onInputChange}
               placeholder="Ex. Goku"
               maxLength={60}
               autoFocus
          />
     );
};

export default CategoryAdder;
