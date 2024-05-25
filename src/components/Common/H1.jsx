import { PropTypes } from 'prop-types';

const H1 = ({ text, className }) => {
    return (
        <h1 className={`text-center size-xl drop-shadow-xl my-12 text-puertoRico-300 ${className}`}>{text}</h1>
    )
}

H1.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
};

export default H1;