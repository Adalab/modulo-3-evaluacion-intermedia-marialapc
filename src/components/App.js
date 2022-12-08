import data from "../data/contacts.json";
import { useState } from "react";

function App() {
  const [allAdalabers, setAllAdalabers] = useState(data);

  const renderList = () => {
    return allAdalabers.map((eachAdalaber) => {
      return (
        <tr key={eachAdalaber.id}>
          <td>{eachAdalaber.name}</td>
          <td>{eachAdalaber.counselor}</td>
          <td>{eachAdalaber.speciality}</td>
        </tr>
      );
    });
  };

  return (
    <>
      <header>
        <h1>Adalabers</h1>
      </header>
      <main>
        <section>
          <table className="table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Tutora</th>
                <th>Especialidad</th>
              </tr>
            </thead>

            <tbody>{renderList(allAdalabers)}</tbody>
          </table>
        </section>
        <h2>Añadir una Adalaber</h2>
        <form>
          <label htmlFor="newName">
            Nombre:
            <input type="text" name="name" id="newName"/>
          </label>
          <label htmlFor="newCounselor">
            Tutora:
            <input type="text" name="counselor" id="newCounselor" />
          </label>
          <label htmlFor="newSpeciality">
            Especialidad:
            <input type="text" name="speciality" id="newSpeciality" />
          </label>
          <label>
            <button>Añadir una nueva Adalaber</button>
          </label>
        </form>
      </main>
    </>
  );
}

export default App;
