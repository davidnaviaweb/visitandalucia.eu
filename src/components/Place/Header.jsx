
const Header = ({ place }) => {
    return (
        <div className="relative w-full overflow-hidden bg-center bg-cover shadow-xl h-96 rounded-xl" style={{ backgroundImage: 'url(' + place.image + ')' }}>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
                <h1 className="text-3xl font-bold text-center text-white lg:text-5xl">{place.name}</h1>
                <br></br>
                <h4 className="mt-2 text-2xl text-puertoRico-200">{place.territories ? place.territories[0].name : ''}</h4>
            </div>
        </div>
    );
}

export default Header;