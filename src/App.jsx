import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MapContainer from './components/MapContainer'
import axios from 'axios';

import './App.css'
import SimpleCard from './components/SimpleCard';

function App() {
  const [count, setCount] = useState(0)

  const [contenido, setContenido] = useState([]);

  useEffect(() => {
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

    axios.post('https://nac.andalucia.org/nac/api/resource/paginated',
      {
        "item_number": 0,
        "page_size": 50,
        "filters":
        {
          "resource_state_history.resource_state.code": "ESTREPUBLICADO",
          "resource_state_history.current": true
        },
        "sort": "name",
        "asc": true
      }
    ).then(response => {
      setContenido(response.data.list);
    }).catch(error => {
      console.error('Error al obtener contenido:', error);
    });
  }, []);

  return (
    <>
      <h1>Mapa</h1>
        {<MapContainer places={contenido} />}
      <h1>Contenido</h1>
      <div className='cardHolder'>
        {contenido.map(item => (SimpleCard(item)))}
      </div>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
