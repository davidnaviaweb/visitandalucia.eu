import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MapContainer from './components/Map';

function ContenidoList() {
  const [contenido, setContenido] = useState([]);

  useEffect(() => {
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    /*
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
    */
   // axios.get('https://maps.andalucia.org/rest-turistico/rest/resource/list',
    axios.post('https://maps.andalucia.org/maps/api/seeker/naturalLanguage',{"query":"","query_filter":[35.726170292715196,-9.410797865889844,40.159723513209855,0.396894441802465],"page_size":5001,"item_number":0})
      .then(response => {
        console.log(response.data.list.length);
        setContenido(response.data.list);
      })
      .catch(error => {
        console.error('Error al obtener contenido:', error);
      });
  }, []);

  return (
    <div>
      <MapContainer places={contenido} />
      <h1>Contenido</h1>
      <ul>
        {contenido.map(item => (
          <li key={item.id}><img height="100px" src={item.image} alt={item.name}/>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ContenidoList;