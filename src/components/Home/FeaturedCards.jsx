import PropTypes from 'prop-types';
import FeaturedCard from './FeaturedCard';

const FeaturedCards = ({ items }) => {
  return (
    <div className="grid grid-cols-2 gap-2 md:gap-4 md:grid-cols-3 lg:grid-cols-4">
      {items.map((item, index) => (
        index < 12 ? <FeaturedCard key={index} {...item} /> : null
      ))}
    </div>
  );
};

FeaturedCards.propTypes = {
  items: PropTypes.array.isRequired,
};

export default FeaturedCards;