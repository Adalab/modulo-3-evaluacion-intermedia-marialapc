import data from "../data/contacts.json";
import { useState } from "react";

function App() {
  const [allAdalabers, setAllAdalabers] = useState(data);
  const [newAdalaber, setNewAdalaber] = useState(
    {
      name: '',
      counselor: '',
      speciality:'',
    }
  );

  const handleChangeInput = (ev) => {
    setNewAdalaber({ ...newAdalaber,[ev.target.id]: ev.target.value,
    })
  };

  const handleClickNewAdalaber = (ev) => {
    allAdalabers.push(newAdalaber);
    setAllAdalabers( [...allAdalabers, newAdalaber]);
   
  };

const handleSubmit = (ev) => {
ev.preventDefault();
};

  const renderList = () => {
    return allAdalabers.map((eachAdalaber) => {
      return (
        <tr key={eachAdalaber.name}>
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
        <form onSubmit={handleSubmit}>
          <label htmlFor="newName">
            Nombre:
            <input onChange={handleChangeInput} type="text" name="name" id="newName" value={newAdalaber.name}/>
          </label>
          <label htmlFor="newCounselor">
            Tutora:
            <input onChange={handleChangeInput} type="text" name="counselor" id="newCounselor"value={newAdalaber.counselor} />
          </label>
          <label htmlFor="newSpeciality">
            Especialidad:
            <input onChange={handleChangeInput} type="text" name="speciality" id="newSpeciality"value={newAdalaber.speciality} />
          </label>
          <label>
            <button onClick={handleClickNewAdalaber}>Añadir una nueva Adalaber</button>
          </label>
        </form>
      </main>
    </>
  );
}

export default App;
