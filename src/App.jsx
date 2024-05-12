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

    async function loadAllItems() {
      let items = [];
      let pageNumber = 0;
      const pageSize = 50;
      let totalCount = 0;
    
      do {
        const response = await axios.post('https://nac.andalucia.org/nac/api/resource/paginated',
          {
            "item_number": 0,
            "page_size": pageSize,
            "filters":
            {
              "resource_state_history.resource_state.code": "ESTREPUBLICADO",
              "resource_state_history.current": true
            },
            "sort": "name",
            "asc": true
          }
        );

        items = items.concat(response.data.list);
        totalCount = response.data.summary_count;
        pageNumber++;
      } while (items.length < totalCount && pageNumber < 10);
    
      return items;
    }
    
    loadAllItems().then(items => {
      console.log(items); // Aquí tienes todos los elementos cargados
      setContenido(items);
      setIsLoading(false);
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
