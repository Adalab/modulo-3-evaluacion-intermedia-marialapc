import "../styles/App.scss";
import contacts from '../data/contacts.json';
import { useState } from 'react';

function App() {
  // VARIABLES ESTADO
  console.log(contacts)
  const [data, setData] = useState(contacts);
  // FUNCIONES HANDLER

  // FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR HTML
  const htmlData = data

  // HTML EN EL RETURN

  return (
    <>
 <h1>Adalabers</h1>
      <table className="table">
      {/* fila de la cabecera */}
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Tutora</th>
          <th>Especialidad</th>
        </tr>
      </thead>
     {/* // fin cabecera */}
        <tbody>
        {/* <!-- Primera fila --> */}
 <tr>
 <td>MariCarmen</td>
 <td>Yanelis</td>
 <td>Python</td>
 </tr>
 {/* <!-- Segunda fila --> */}
 <tr>
 <td>Amparo</td>
 <td>Dayana</td>
 <td>IA</td>
 </tr>
 {/* <!-- Tercera fila --> */}
 <tr>
 <td>Escandia</td>
 <td>Iván</td>
 <td>3D graphics</td>
 </tr>
 </tbody>
  </table>
  </>
  );
}

export default App;
