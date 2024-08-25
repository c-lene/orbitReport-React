import satData from "./satData";


const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div>
      {displaySats.map((sat, id) => {
      return (
        <button onClick={() => filterByType(sat)} key={id}>
          {sat} Orbit
        </button>
      );
    })}

    {/* Need to Pass "satData" to "setSat" */}
    <button onClick={(satData) => setSat}>All Orbits</button>
    </div>

  );
  

  
  
  
  
  
  
  // return (
  //   <div>
  //     <button>Placeholder Button</button>
  //     <button>All Orbits</button>
  //   </div>
  // );
};

export default Buttons;