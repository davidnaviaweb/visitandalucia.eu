import PropTypes from 'prop-types';
import PlaceCardsItem from './PlaceCardsItem';


const PlaceCards = ({ items, max }) => {
  // Limitamos la cantidad de ítems a 8
  if (max) items = items.slice(0, max);

  return (
    <div className='grid gap-2 mt-4 md:gap-4 4 sm:grid-cols-2 auto-rows-max lg:grid-cols-3 xl:grid-cols-4'>
      {items.map((item, index) => (
        <PlaceCardsItem key={index} {...item} />
      ))}
    </div>
  );
};

PlaceCards.propTypes = {
  items: PropTypes.array.isRequired,
  max: PropTypes.number
};

export default PlaceCards;