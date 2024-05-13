const PlaceCardsItems = (item) => {
    console.log(item);
    return (
        <div className="flex flex-col shadow-xl rounded-2xl">
            <figure className="flex items-center justify-center rounded-2xl">
                <img src="https://tailwind-generator.b-cdn.net/images/card-generator/tailwind-card-generator-card-preview.png" alt="Card Preview" className="rounded-t-2xl" />
            </figure>
            <div className="flex flex-col p-8">
                <div className="text-2xl font-bold   text-[#374151] pb-6" >Generator</div>
                <div className=" text-lg   text-[#374151]">Leverage a graphical editor to create beautiful web components.</div>
                <div className="flex justify-end pt-6">
                    <button className="bg-[#7e22ce] text-[#ffffff]  font-bold text-base  p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform" >Try it out!</button>
                </div>
            </div>
        </div>
    );
};

export default PlaceCardsItems;
