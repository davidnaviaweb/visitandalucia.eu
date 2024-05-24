import FeaturedCard from './FeaturedCard'


const FeaturedCards = ({ items }) => {
  return (
    <div className="grid grid-cols-4 gap-4 mt-4">
      {items.map((item, index) => (
        index < 12 ? <FeaturedCard key={index} {...item} /> : null
      ))}
    </div>
  );
};

export default FeaturedCards;