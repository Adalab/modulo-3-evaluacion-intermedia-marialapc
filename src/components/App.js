import "../styles/App.scss";
import contacts from "../data/contacts.json";
import { useState } from "react";

function App() {
  // VARIABLES ESTADO
  const [data, setData] = useState(contacts.results);
  console.log(data);
  console.log(contacts);
  // FUNCIONES HANDLER

  // FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR HTML
  const htmlData = data.map((adalaber) => {
    return (
    <tr key={adalaber.id}>
        <td>{adalaber.name}</td>
        <td>{adalaber.counselor}</td>
        <td>{adalaber.speciality}</td>
   </tr>
    );
  });

  // HTML EN EL RETURN

  return (
    <>
      <h1>Adalabers</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tutora</th>
            <th>Especialidad</th>
          </tr>
        </thead>
        <tbody>
         {htmlData}
          </tbody>
      </table>
    </>
  );
}

export default App;
