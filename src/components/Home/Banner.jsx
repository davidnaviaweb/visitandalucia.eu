import PropTypes from 'prop-types';

const Banner = ({ src, text }) => {
    return (
        <div className="relative w-full overflow-hidden bg-center bg-cover h-96 rounded-xl" style={{ backgroundImage: 'url(' + src + ')' }}>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <h1 className="font-bold text-white text-8xl">{text}</h1>
            </div>
        </div>
    );
};

Banner.propTypes = {
    src: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default Banner;