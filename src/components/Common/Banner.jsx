import PropTypes from 'prop-types';
import H1 from './H1';

const Banner = ({ src, text }) => {
    return (
        <div className="relative h-64 overflow-hidden bg-center bg-cover shadow-xl md:h-96 rounded-xl" style={{ backgroundImage: 'url(' + src + ')' }}>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <H1 className="font-bold text-white text-8xl" text={text} />
            </div>
        </div>
    );
};

Banner.propTypes = {
    src: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default Banner;