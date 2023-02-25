import { useState } from "react";
import Card from "./components/Card/Card";
import frameworks from "./assets/data.json";

import "./App.css";

function App() {
  const [indexVisibleFramework, setFrameworkVisible] = useState(0);

  const changeFramework = () => {
    const newFrameworkVisible = indexVisibleFramework + 1;

    if (newFrameworkVisible > frameworks.length - 1) setFrameworkVisible(0);
    else setFrameworkVisible(newFrameworkVisible);
  };

  return (
    <div className="App">
      <h1>Frameworks</h1>
      <Card
        framework={frameworks[indexVisibleFramework]}
        changeFramework={changeFramework}
      />
    </div>
  );
}

export default App;
