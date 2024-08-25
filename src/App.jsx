import Banner from "./components/Banner";
import Buttons from "./components/Buttons";
import Table from "./components/Table";
import { useState } from "react";
import satData from "./components/satData";



function App() {
  
  // Task #3 - Step 3 - Create first variable
  const [sat, setSat] = useState(satData);
  
  // Task #3 - Step 4 - Create second variable 'displaySats'
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];

  // Task #3 - Step 5 - Create arrow function 'filterByType'
  const filterByType = (currentType) => {
    const displaySats = satData.filter((newSatDisplay) => {
       return newSatDisplay.orbitType === currentType;
    });
    setSat(displaySats);
  };


  return (
    <div>
      <Banner />

      <Buttons 
        filterByType={filterByType}
        setSat={setSat}
        displaySats={displaySats}
      />

      <Table 
        sat={sat}
      />
    </div>
  );
}


export default App;