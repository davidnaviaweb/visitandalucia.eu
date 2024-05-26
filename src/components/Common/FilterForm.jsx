import { useState } from 'react';
import PropTypes from 'prop-types';
import CategoriesFilter from './CategoriesFilter';

const FilterForm = ({ provinces, resourceTypes, onFormChange }) => {
    const [selectedProvince, setSelectedProvince] = useState(0);
    const [selectedCategory, setselectedCategory] = useState(["TIPRECAREANATURAL"]);

    let province = selectedProvince;
    let category = [];

    const handleProvinceChange = (event) => {
        const value = Number.parseInt(event.target.value);
        province = value
        setSelectedProvince(province);
        handleChanges(province, selectedCategory);
    }
    const handleCategoryChange = (selectedcategory) => {
        category = selectedcategory;
        setselectedCategory(category);
        handleChanges(selectedProvince, category);
    };

    const handleChanges = (province, category) => {
        const formData = {
            province,
            category
        };
        onFormChange(formData)
    };

    return (
        <form className="flex flex-col basis-1/3">
            <div id="provinceSelector" className="flex mb-4 lg:mb-6">
                <div className="flex flex-col items-center justify-center lg:items-start grow">
                    <h2 className='flex items-center mb-2 lg:items-start'>
                        <label htmlFor="provinces">Provincias</label>
                    </h2>
                    {/* <p>Provincia seleccionada: {selectedProvince}</p> */}
                    <select id="provinces"
                        className='flex items-center p-2 text-xs bg-white rounded-md shadow-lg cursor-pointer dark:bg-slate-950 dark:text-white text-puertoRico-600 lg:text-sm'
                        onChange={handleProvinceChange}>
                        <option value="0" key="0">Elige una provincia</option>
                        {provinces.map((province, index) => (
                            <option value={province.id} key={index}>{province.name}</option>
                        ))}
                    </select>
                </div>
            </div>
            <CategoriesFilter categories={resourceTypes} onCategoryChange={handleCategoryChange} />
        </form>

    );
};

FilterForm.propTypes = {
    provinces: PropTypes.array.isRequired,
    resourceTypes: PropTypes.array.isRequired,
    onFormChange: PropTypes.func.isRequired
};


export default FilterForm;


