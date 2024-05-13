const SimpleCard = ( item ) => {
    console.log(item);
    return (
        <article className='flex items-center'>
            <div className='w-24 h-24 overflow-hidden rounded-full'>
                <img className='object-cover w-full h-full' src={item.image} alt={item.name} />
            </div>
            <div className='ml-4'>
                <h2 className='text-xl font-bold'>{item.name}</h2>
                <p className='text-sm '>{item.description}</p>
            </div>
        </article>
    );
};

export default SimpleCard;
