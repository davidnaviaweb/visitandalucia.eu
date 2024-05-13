import { Link } from "react-router-dom";

const PlaceCardsItems = (item) => {
    let { slug, image, name, territories } = item;
        return (
        <Link to={`/lugar/${slug}`} className="flex">
            <div className="flex flex-col overflow-auto shadow-xl grow rounded-2xl">
                <figure className="flex items-center justify-center bg-center bg-cover aspect-video" style={{ backgroundImage: 'url(' + image + ')' }}></figure>
                <div className="flex flex-col justify-between p-4 grow">
                    <div className="flex flex-col">
                        <h4 className="text-2xl font-bold">{name}</h4>
                        <span className="text-lg">{territories[0].name}</span>
                    </div>
                    <div className="flex justify-end pt-6">
                        <button className="p-3 text-base font-bold transition-transform transform rounded-lg hover:bg-purple-800 active:scale-95" >Visitame!</button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default PlaceCardsItems;
