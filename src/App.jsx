import { useState, useEffect } from 'react'
import Header from './components/Common/Header'
import Preloader from './components/Common/Preloader'
import axios from 'axios';
import Forms from './components/Forms'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Province from './pages/Province';
import Place from './pages/Place';
import Footer from './components/Common/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [provinces, setProvinces] = useState([]);
  const [featuredItems, setFeaturedItems] = useState([]);
  const [mapItems, setMapItems] = useState([]);
  const [resourceTypes, setResourceTypes] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    async function fetchData() {
      const placesPromise = await axios.post('https://nac.andalucia.org/nac/api/resource/paginated', {
        "item_number": 0,
        "page_size": 50,
        "sort": "random",
        "filters": {
          "outstanding": true,
          "resource_state.code": "ESTREPUBLICADO",
          "resource_type.code": [
            "TIPRECAREANATURAL"
          ],
        }
      });
      const provincesPromise = await axios.get('https://nac.andalucia.org/nac/api/territory/provinces/isAndaluz');
      const resourceTypesPromise = await axios.get('https://nac.andalucia.org/nac/api/resource_type/generic');

      const [placesResponse, provincesResponse, resourceTypesResponse] = await Promise.all([placesPromise, provincesPromise, resourceTypesPromise]);

      const featuredItems = placesResponse.data.list;
      const provinces = provincesResponse.data.list;
      const resourceTypes = resourceTypesResponse.data.list;

      const provincePromises = provinces.map(province => axios.get(`https://nac.andalucia.org/nac/api/territory/get/${province.id}`));
      const provinceResponses = await Promise.all(provincePromises);
      const provinceData = provinceResponses.map(response => response.data);

      return { featuredItems, provinces: provinceData, resourceTypes };
    }

    fetchData().then(data => {
      setFeaturedItems(data.featuredItems);
      setProvinces(data.provinces);
      setMapItems(data.featuredItems);
      setResourceTypes(data.resourceTypes);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Router>
            <Header provinces={provinces}/>
            <main className="container mx-auto">
              <Routes>
                <Route path="/" element={<Home provinces={provinces} items={featuredItems} mapItems={mapItems} resourceTypes={resourceTypes} />} />
                <Route path="/provincia/:slug" element={<Province provinces={provinces} />} />
                <Route path="/lugar/:slug" element={<Place />} />
                <Route path="/forms" element={<Forms />} />
              </Routes>
            </main>
            <Footer />
          </Router>
        </>
      )}
    </>
  )
}

export default App;
