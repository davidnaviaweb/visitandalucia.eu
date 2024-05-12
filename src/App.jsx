import { useState, useEffect } from 'react'
import Header from './components/Common/Header'
import Preloader from './components/Common/Preloader'
import axios from 'axios';
import Forms from './components/Forms'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Province from './pages/Province';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [provinces, setProvinces] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    // async function loadAllItems() {
    //   let items = [];
    //   let pageNumber = 0;
    //   const pageSize = 50;
    //   let totalCount = 0;

    //   do {
    //     const response = await axios.post('https://nac.andalucia.org/nac/api/resource/paginated',
    //       {
    //         "item_number": 0,
    //         "page_size": pageSize,
    //         "filters":
    //         {
    //           "resource_state_history.resource_state.code": "ESTREPUBLICADO",
    //           "resource_state_history.current": true
    //         },
    //         "sort": "name",
    //         "asc": true
    //       }
    //     );

    //     items = items.concat(response.data.list);
    //     totalCount = response.data.summary_count;
    //     pageNumber++;
    //   } while (items.length < totalCount && pageNumber < 2);

    //   return items;
    // }

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
          <Routes>
            <Route path="/" element={<Home provinces={provinces} items={items} />} />
            <Route path="/provincia" element={<Province places={items} />} />
            <Route path="/forms" element={<Forms />} />
          </Routes>
        </Router>
      )}
    </>
  )
}

export default App
