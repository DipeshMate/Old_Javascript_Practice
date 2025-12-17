import Header from "./component/Header";
import Home from "./component/Home";
import HomePrac from "./component/HomePrac";
import { createContext } from "react";

const Context = createContext();

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Context.Provider value={"My Name is Dipesh"}>
      <HomePrac />
      </Context.Provider>
     
    </div>
  )
}
export { Context };
export default App;
