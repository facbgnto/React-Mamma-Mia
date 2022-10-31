import { useEffect, createContext, useState, useContext } from "react";
import { fetchPizzas } from "./api";

const myContext = createContext();

export function usePokemonesConstext()  {
  return useContext(myContext);
};

function ContextProvider({ children }) {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetchPizzas()
    .then((data) => setPizzas(data))
    .catch(e => console.log(e.message))
    console.log(pizzas)
 });


  return (
        <myContext.Provider value={pizzas}>
            {children}
        </myContext.Provider>
  )
}

export default ContextProvider;