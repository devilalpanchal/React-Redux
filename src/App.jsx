import { useState } from "react";
import "./App.css";
import User from "./User";
import HomeContainer from "./Container/HomeContainer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app">
        <h1 className="app">Devilal panchal start Redux</h1>
        <HomeContainer/>
        {/* <User data={{ name: "devilal Panchal", age: "23" }} /> */}
      </div>
    </>
  );
}

export default App;
