import "../styles/App.scss";
import contacts from "../data/contacts.json";
import { useState } from "react";

function App() {
  // VARIABLES ESTADO
  const [data, setData] = useState(contacts.results);
  const [newAdalaber, setNewAdalaber] = useState({
  name:"",
  counselor:"",
  speciality:"",
  id:"",
  })
 
  // FUNCIONES HANDLER
const handleNewAdalaber = (ev)=>{
  setNewAdalaber({...newAdalaber,[ev.target.id]: ev.target.value })
};
const handleClick = (event) => {
  event.preventDefault();
setData([...data, newAdalaber]);
};
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
      <form>
        <h2>Añadir una adalaber</h2>
        <label> Nombre:</label>
        <input type="text" id="name" onInput={handleNewAdalaber}></input>
        <label>Tutora:</label>
        <input type="text" id="counselor" onInput={handleNewAdalaber}></input>
        <label>Especialidad:</label>
        <input type="text" id="speciality" onInput={handleNewAdalaber}></input>
        <button onClick={handleClick}>Añadir una nueva Adalaber</button>
      </form>
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
