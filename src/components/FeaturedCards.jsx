import SimpleCard from './SimpleCard'


const FeaturedCards = ( contenido ) => {
    // Limitamos la cantidad de ítems a 8
    const limitedItems = contenido.items.slice(0, 8);
  
    return (
      <div className='w-fit grid grid-cols-2 gap-4'>
        {limitedItems.map((item, index) => (
          index < 8 ? SimpleCard(item) : null
        ))}
      </div>
    );
  };
  
  export default FeaturedCards;