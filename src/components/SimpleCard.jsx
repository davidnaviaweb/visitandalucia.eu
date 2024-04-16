import './SimpleCard.css'


const SimpleCard = (item) => {
    return (
        console.log(item),
        <article className='card'>
            <aside className='image' style={{ backgroundImage:  `url(${ item.image}`}}/>
            <h2 className='title'>{item.name}</h2>
            <p className='description'>{item.description}</p>
        </article>
    );
};

export default SimpleCard;