import { Link } from "react-router-dom";
import FaIcon from "../Common/FaIcon";

const FeaturedCard = (item) => {
    const { slug, image, name, description, resource_type, territories } = item;

    let territoryNames = [...new Set(territories.map(territory => territory.province_name))];
    return (
        <Link to={`/lugar/${slug}`}>
            <div className="relative flex items-center justify-center h-56 overflow-visible bg-center bg-cover shadow-xl rounded-xl" style={{ backgroundImage: 'url(' + image + ')' }}>
                <div className="absolute inset-0 flex-col justify-end pflex bg-opacity-10 bg-gradient-to-t from-black to-transparent hover:from-neutral-900 rounded-xl">
                    <div className='absolute bottom-0 left-0 right-0 flex items-end justify-between p-4 lg:p-6 grow'>
                        <div>
                            <h3 className='text-sm font-bold text-puertoRico-200 dark:text-puertoRico-200'>{territoryNames.join(", ")}</h3>
                            <h2 className='text-xl font-bold text-white'>{name}</h2>
                            {description && <p className='text-sm text-white'>{description}</p>}
                        </div>
                        <div className="flex items-center justify-around p-2 text-white bg-white rounded-full shadow-lg text-md">
                            <FaIcon resourceTypeCode={resource_type.code} className={"text-puertoRico-600"} />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default FeaturedCard;
