import "./styling.css";

const Table = ({ sat }) => {
  
  // Using map() function to iterate through each object in array
  const info = sat.map((data, id) => (
    <tr key={id}>
      <td>{data.name}</td>
      <td>{data.type}</td>
      <td>{data.launchDate}</td>
      <td>{data.operational ? "active" : "inactive"}</td>
    </tr>
  ));

  
  return (
    <table>
      
    <thead>
     <tr>
       <th>Name</th>
       <th>Type of Satellite</th>
       <th>Launch Date</th>
       <th>Status</th>
     </tr>
     </thead>

     <tbody>
      {info}
     </tbody>

   </table>
  );
};

export default Table;