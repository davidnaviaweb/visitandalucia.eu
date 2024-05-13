import SimpleCard from './SimpleCard'


const FeaturedCards = ({ items }) => {
  console.log(items);

  // Limitamos la cantidad de ítems a 8
  const limitedItems = items.slice(0, 8);

  return (
    <div className='grid grid-cols-2 gap-4 mt-4'>
      {limitedItems.map((item, index) => (
        index < 8 ? <SimpleCard key={index} {...item} /> : null
      ))}
    </div>
  );
};
  
  export default FeaturedCards;