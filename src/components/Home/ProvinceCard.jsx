import { Link } from 'react-router-dom';

const ProvinceCard = (province) => {
    let { name, image, slug } = province;

    return (
        <Link to={`/provincia/${slug}`}>
            <div className="relative flex items-center justify-center h-64 overflow-hidden bg-center bg-cover shadow-xl md:h-72 rounded-xl" style={{ backgroundImage: 'url(' + image + ')' }}>
                <div className="absolute inset-0 flex flex-col justify-end bg-opacity-10 bg-gradient-to-t from-black to-transparent hover:from-neutral-900">
                    <h2 className="p-4 text-3xl font-bold text-white lg:p-6">{name}</h2>
                </div>
            </div>
        </Link>
    );
};

export default ProvinceCard;