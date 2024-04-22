import SimpleCard from './SimpleCard'

const FeaturedCards = (contenido) => {
    return (
        <div className='w-fit grid grid-cols-2 gap-4'>
            {contenido.items.map(item => (SimpleCard(item)))}
        </div>
    );
};

export default FeaturedCards;