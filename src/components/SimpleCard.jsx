const SimpleCard = ( item ) => {
    return (
        <article className='border-2 border-blue-200 rounded-md p-4 flex items-center bg-blue-50 dark:bg-slate-800'>
            <div className='w-24 h-24 rounded-full overflow-hidden'>
                <img className='w-full h-full object-cover' src={item.image} alt={item.name} />
            </div>
            <div className='ml-4'>
                <h2 className='text-xl font-bold text-blue-800'>{item.name}</h2>
                <p className='text-sm text-blue-600'>{item.description}</p>
            </div>
        </article>
    );
};

export default SimpleCard;
