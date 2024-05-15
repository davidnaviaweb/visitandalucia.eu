import FeaturedCard from './FeaturedCard'


const FeaturedCards = ({ items }) => {
  console.log(items);

  // Limitamos la cantidad de ítems a 8
  // const limitedItems = items.slice(0, 8);

  return (
    <div className="grid grid-cols-4 gap-4 mt-4">
      {items.map((item, index) => (
        index < 12 ? <FeaturedCard key={index} {...item} /> : null
      ))}
    </div>
  );
};

export default FeaturedCards;