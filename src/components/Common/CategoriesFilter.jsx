import { useState } from "react";
import FaIcon from "./FaIcon";

const CategoriesFilter = ({ categories, onCategoryChange }) => {
    const [selectedCategories, setSelectedCategories] = useState(["TIPRECAREANATURAL"]);

    const handleCategoryClick = (event) => {
        const value = event.target.value;
        let newCategories = value
        setSelectedCategories(newCategories);
        onCategoryChange(newCategories);
    };

    return (
        <div id="categorySelector" className='flex flex-col'>
            <h2 className='mb-2'>Categorías</h2>
            {/* <p>Categorías seleccionadas: {selectedCategories.join(', ')}</p> */}
            <div className='flex flex-wrap justify-start'>
                {categories.map((category, index) => (
                    <div key={index}>
                        <label htmlFor={`category-${category.code}`}>
                            <div className={`flex items-center text-ellipsis p-2 mb-2 mr-2 rounded-md shadow-lg cursor-pointer ${selectedCategories.includes(category.code) ? 'text-white bg-puertoRico-600' : 'bg-white text-puertoRico-600'}`}>
                                <FaIcon resourceTypeCode={category.code} className={'text-xl'} />
                                <p className='ml-2 text-sm'>{category.name}</p>
                            </div>
                        </label>
                        <input type="checkbox" key={index}
                            id={`category-${category.code}`}
                            value={category.code}
                            onChange={handleCategoryClick}
                            className='hidden'
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoriesFilter;