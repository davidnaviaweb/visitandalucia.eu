import ProvinceCard from './ProvinceCard';
import PropTypes from 'prop-types';

const ProvinceCards = ({ provinces }) => {
    return (
        <>
            <div className="grid grid-cols-2 gap-4 mt-4">
                {provinces.map((province, index) => (
                    <ProvinceCard {...province} key={index} />
                ))}
            </div>
        </>
    );
};

ProvinceCards.propTypes = {
    provinces: PropTypes.array.isRequired,
};

export default ProvinceCards;