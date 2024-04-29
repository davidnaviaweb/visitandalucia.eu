import { useState, useEffect } from 'react'
import Header from './components/Header'
import FeaturedCards from './components/FeaturedCards';
import Map from './components/Map'
import Preloader from './components/Preloader'
import axios from 'axios';
import Forms from './components/Forms'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [contenido, setContenido] = useState([]);

  useEffect(() => {
    setIsLoading(true);

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
      setIsLoading(false);
    }).catch(error => {
      console.error('Error al obtener contenido:', error);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Header />
          <div className="p-5">
            <h1>Mapa</h1>
            <Map places={contenido} />
            <h1 style={{ textAlign: 'center' }}>Lugares de interés</h1><br></br>
            <Forms/>
            <h1>Contenido</h1>
            <FeaturedCards items={contenido} />
          </div>
        </>
      )}
    </>
  )
}

export default App
