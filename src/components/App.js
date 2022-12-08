import data from "../data/contacts.json";
import { useState } from "react";

function App() {
  //variables estado
  const [allAdalabers, setAllAdalabers] = useState(data);
  const [newAdalaber, setNewAdalaber] = useState(
    {
      name: '',
      counselor: '',
      speciality:'',
    }
  );
  const [counselorFilter, SetCounselorFilter] = useState('');

//funciones handle
  const handleChangeInput = (ev) => {
    setNewAdalaber({ ...newAdalaber,[ev.target.name]: ev.target.value,
    })
  };

  const handleClickNewAdalaber = (ev) => {
   setAllAdalabers([...allAdalabers, newAdalaber]); //push
   setNewAdalaber({
    name:'',
    counselor:'',
    speciality: '',
   });
   
  };

const handleSubmit = (ev) => {
ev.preventDefault();
};
const handleChangeCounselorFilter = (ev) =>{
SetCounselorFilter(ev.target.value);
};

// funciones render
  const renderList = (list) => {
    return list.map((eachAdalaber) => {
      return (
        <tr key={eachAdalaber.name}>
          <td>{eachAdalaber.name}</td>
          <td>{eachAdalaber.counselor}</td>
          <td>{eachAdalaber.speciality}</td>
        </tr>
      );
    });
  };

  const filteredAdalabers = allAdalabers.filter( (eachAdalaber) =>{
    return  counselorFilter === '' || eachAdalaber.counselor === counselorFilter;
  });
  
  return (
    <>
      <header>
        <h1>Adalabers</h1>
      </header>
      <main>
        <form>
          <label>
            Escoge una tutora:
            <select onChange={handleChangeCounselorFilter} value={counselorFilter}>
              <option value="">Todos</option>
              <option value="Yanelis">Yanelis</option>
              <option value="Dayana">Dayana</option>
              <option value="Iván">Iván</option>
            </select>
          </label>

        </form>
        <section>
          <table className="table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Tutora</th>
                <th>Especialidad</th>
              </tr>
            </thead>

            <tbody>{renderList(filteredAdalabers)}</tbody>
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
