const PlaceCardsItems = (item) => {
    console.log(item);
    return (
        <div className="flex flex-col shadow-xl rounded-2xl">
            <figure className="flex items-center justify-center rounded-2xl">
                <img src={item.image} alt="Card Preview" className="rounded-t-2xl" style={{ width: '450px', height: '350px' }}/>
            </figure>
            <div className="flex flex-col p-8">
                <div className="text-2xl font-bold   text-[#374151] pb-6" >{item.name}</div>
                <div className=" text-lg   text-[#374151]">{item.territories[0].name}</div>
                <div className="flex justify-end pt-6">
                    <button className="bg-[#7e22ce] text-[#ffffff]  font-bold text-base  p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform" >Visitame!</button>
                </div>
            </div>
        </div>
    );
};

export default PlaceCardsItems;
