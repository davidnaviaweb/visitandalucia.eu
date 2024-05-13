import PlaceCardsItems from "./PlaceCardsItem";

const PlaceCards = ({ items }) => {
  // Limitamos la cantidad de ítems a 8
  const limitedItems = items.slice(0, 8);

  return (
    <div className='grid grid-cols-3 gap-4 mt-4'>
      {limitedItems.map((item, index) => (
        index < 8 ? <PlaceCardsItems key={index} {...item} /> : null
      ))}
    </div>
  );
};
  
  export default PlaceCards;