import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Banner from '../components/Common/Banner';
import PlaceCards from '../components/Province/PlaceCards';
import axios from 'axios';
import H2 from '../components/Common/H2';
import Preloader from '../components/Common/Preloader';
import Pagination from '../components/Common/Pagination';

const Category = ({ resourceTypes }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [places, setPlaces] = useState([]);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(12);
  const [totalPages, setTotalPages] = useState(0);
  const slug = useParams().slug;

  const selectedResourceType = resourceTypes.find(type => type.name.toLowerCase() === slug.toLowerCase());


  const onPageChange = (page) => {
    let newPage = page - 1;
    setPage(newPage);
    setIsLoading(true);

    async function loadPlaces() {
      const places = await axios.post('https://nac.andalucia.org/nac/api/resource/paginated',
        {
          "item_number": newPage,
          "page_size": pageSize,
          "sort": "name",
          "asc": true,
          "filters": {
            "resource_state.code": "ESTREPUBLICADO",
            "resource_type.code": [selectedResourceType.code],
          }
        }
      );

      return places.data;
    }

    loadPlaces().then(placesData => {
      setPlaces(placesData.list);
      setTotalPages(Math.ceil(parseInt(placesData.summary_count) / pageSize));
      setIsLoading(false);
    });
  }

  useEffect(() => {
    setIsLoading(true);

    async function loadPlaces() {
      const places = await axios.post('https://nac.andalucia.org/nac/api/resource/paginated',
        {
          "item_number": (page + 1) * pageSize,
          "page_size": pageSize,
          "sort": "name",
          "asc": true,
          "filters": {
            "resource_state.code": "ESTREPUBLICADO",
            "resource_type.code": [selectedResourceType.code],
          }
        }
      );

      return places.data;
    }

    loadPlaces().then(placesData => {
      setPlaces(placesData.list);
      setTotalPages(Math.ceil(parseInt(placesData.summary_count) / pageSize));
      setIsLoading(false);
    });
  }, [page, selectedResourceType]);

  return (
    <>
      <Banner src={selectedResourceType.image} text={selectedResourceType.name} className={'text-6xl'} />
      <H2 className={'text-center'} text={'Nuestros destacados'}></H2>
      {
        (isLoading) ? (
          <Preloader />
        ) : (
          <>
            <Pagination currentPage={page + 1} totalPages={totalPages} onPageChange={onPageChange} />
            <PlaceCards items={places} />
            <Pagination currentPage={page + 1} totalPages={totalPages} onPageChange={onPageChange} />
          </>
        )
      }
    </>

  )
}

export default Category