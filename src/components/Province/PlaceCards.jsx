import PlaceCardsItems from "./PlaceCardsItem";

const PlaceCards = ({ items }) => {
  // Limitamos la cantidad de ítems a 8
  const limitedItems = items.slice(0, 8);

  return (
    <div className='grid gap-2 mt-4 md:gap-4 4 sm:grid-cols-2 auto-rows-fr lg:grid-cols-3 xl:grid-cols-4'>
      {limitedItems.map((item, index) => (
        index < 8 ? <PlaceCardsItems key={index} {...item} /> : null
      ))}
    </div>
  );
};
  
  export default PlaceCards;