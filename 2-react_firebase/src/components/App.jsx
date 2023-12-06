import { useState, useEffect } from "react";
import { app as fireBase } from "../config/firebase";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import Row from "./Row";
const db = getFirestore(fireBase);

// Get a list of cities from your database
const getData = async () => {

  const citiesCol = collection(db, 'data');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    const data = async () => {
      const res = await getData()
      setData(res.sort((a, b) => a.number - b.number));
    }

    data();
  }, [])

  return (
    <main>
      <h1>Clase Alpha - Coding test</h1>
      <div className="container">

        <div className="table">
          <div className="table-header">
            <div className="header__item"><a id="total" className="filter__link filter__link--number" href="#">#</a></div>
            <div className="header__item"><a id="name" className="filter__link" href="#">Nombre</a></div>
            <div className="header__item"><a id="wins" className="filter__link filter__link--number" href="#">Puntaje</a></div>
            <div className="header__item"><a id="draws" className="filter__link filter__link--number" href="#">Código</a></div>
          </div>
          <div className="table-content" id="rows-container">
            {!data && <p>Loading</p>}
            {
              data &&
              data.map((e, index) => {
                return (
                  <Row
                    key={index}
                    number={e.number}
                    score={e.score}
                    name={e.name}
                    code={e.code}
                  />
                )
              })
            }
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
