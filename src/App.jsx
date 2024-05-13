import { useState, useEffect } from 'react'
import Header from './components/Common/Header'
import Preloader from './components/Common/Preloader'
import axios from 'axios';
import Forms from './components/Forms'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Province from './pages/Province';
import Place from './pages/Place';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [provinces, setProvinces] = useState([]);

  useEffect(() => {
      setIsLoading(true);
  
      async function loadPlaces() {
        const places = await axios.post('https://nac.andalucia.org/nac/api/resource/paginated',
          {
            "item_number": 0,
            "page_size": 50,
            "sort": "name",
            "asc": true,
            "filters": {
              "outstanding": true,
              "resource_state.code": "ESTREPUBLICADO",
            }
          }
        );
  
        return places.data.list;
      }
  
      loadPlaces().then(places => {
        setItems(places);
      });

    async function loadProvinces() {
      const provinces = await axios.get('https://nac.andalucia.org/nac/api/territory/provinces/isAndaluz');
      let results = [];

      await Promise.all(provinces.data.list.map(async (province) => {
        const result = await axios.get(`https://nac.andalucia.org/nac/api/territory/get/${province.id}`);
        results.push(result.data);
      }));

      return results;
    }

    loadProvinces().then(provinces => {
      setProvinces(provinces);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <Router>
          <Header provinces={provinces} />
          <div className="p-5">
            <Routes>
              <Route path="/" element={<Home provinces={provinces} items={items} />} />
              <Route path="/provincia/:slug" element={<Province provinces={provinces} />} />
              <Route path="/lugar/:slug" element={<Place />} />
              <Route path="/forms" element={<Forms />} />
            </Routes>
          </div>
        </Router>
      )}
    </>
  )
}

export default App
