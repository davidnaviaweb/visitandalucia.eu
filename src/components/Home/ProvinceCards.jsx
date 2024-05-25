import ProvinceCard from './ProvinceCard';
import PropTypes from 'prop-types';

const ProvinceCards = ({ provinces }) => {
    return (
        <>
            <div className="grid gap-2 sm:grid-cols-2 md:gap-4">
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