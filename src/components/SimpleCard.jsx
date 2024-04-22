const SimpleCard = (item) => {
    return (
        <article className='border-2 border-gray-100 rounded-md p-2'>
            <aside className='size-40 rounded-full bg-cover' style={{ backgroundImage:  `url(${ item.image}`}}/>
            <h2 className='title'>{item.name}</h2>
            <p className='description'>{item.description}</p>
        </article>
    );
};

export default SimpleCard;