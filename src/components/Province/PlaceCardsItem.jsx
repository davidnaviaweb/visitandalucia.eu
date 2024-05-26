import { Link } from "react-router-dom";
import FaIcon from "../Common/FaIcon";

const PlaceCardsItem = (item) => {
    let { slug, image, name, territories, resource_type } = item;
    return (
        <Link to={`/lugar/${slug}`} className="flex">
            <div className="flex flex-col overflow-auto shadow-xl grow rounded-2xl hover:shadow-2xl dark:bg-slate-700 h-72">
                <figure className="flex items-start justify-end bg-center bg-cover aspect-video h-1/2" style={{ backgroundImage: 'url(' + image + ')' }}>
                </figure>
                <div className="flex flex-col justify-between p-4 grow">
                    <div className="flex flex-col">
                        <h4 className="text-2xl font-bold text-black">{name}</h4>
                        <span className="text-lg text-puertoRico-500">{territories[0].name}</span>
                    </div>
                    <div className="flex items-center justify-end pt-2">
                        <div className="flex items-center justify-around p-2 rounded-full shadow-lg bg-puertoRico-600 text-md" title={resource_type.name}>
                            <FaIcon resourceTypeCode={resource_type.code} className={"text-white"} />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default PlaceCardsItem;
