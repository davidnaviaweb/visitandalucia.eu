import PropTypes from 'prop-types';

function H2({ text, className }) {
    return (
        <h2 className={`mt-12 mb-6 text-4xl text-puertoRico-300 ${className}`}>{text}</h2>
    )
}

H2.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string
}

export default H2;