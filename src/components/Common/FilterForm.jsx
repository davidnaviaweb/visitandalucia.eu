import React, { useEffect, useState } from 'react';
import FaIcon from './FaIcon';
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
            <div id="provinceSelector" className="flex mb-8">
                <div className="flex flex-col grow">
                    <h2 className='mb-2'><label htmlFor="provinces">Buscar por provincia</label></h2>
                    {/* <p>Provincia seleccionada: {selectedProvince}</p> */}
                    <select id="provinces"
                        className='flex items-center p-2 bg-white rounded-md shadow-lg cursor-pointer text-puertoRico-600'
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

export default FilterForm;


