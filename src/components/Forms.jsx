import React, { useState } from 'react';

const Forms = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (selectedCategories) => {
    setSelectedCategories(selectedCategories);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar la lógica para enviar el formulario
    console.log('Formulario enviado');
  };

  return (
    <div className="flex flex-col items-center">
      <form className="max-w-sm mx-auto mb-4" onSubmit={handleSubmit}>
        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Buscar por provincia</label>
        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option>Sevilla</option>
          <option>Malaga</option>
          <option>Granada</option>
          <option>Cordoba</option>
          <option>Cadiz</option>
          <option>Jaen</option>
          <option>Huelva</option>
          <option>Almeria</option>
        </select>
        <CategoriesFilter categories={['Aventura', 'Cultura', 'Playa', 'Naturaleza']} onCategoryChange={handleCategoryChange} />
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded mt-4 mx-auto block">Enviar</button>
      </form>
    </div>
  );
};

const CategoriesFilter = ({ categories, onCategoryChange }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryClick = (category) => {
    const isSelected = selectedCategories.includes(category);
    if (isSelected) {
      setSelectedCategories(selectedCategories.filter(cat => cat !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
    onCategoryChange(selectedCategories);
  };

  return (
    <div>
      <h2>Categorías</h2>
      <div>
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => handleCategoryClick(category)}
            className={`mr-3 mb-3 px-3 py-1 border rounded-md ${selectedCategories.includes(category) ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            {category}
          </button>
        ))}
      </div>
      <p>Categorías seleccionadas: {selectedCategories.join(', ')}</p>
      {/* Aquí puedes usar 'selectedCategories' como filtro para tus elementos */}
      <hr />
    </div>
  );
};

export default Forms;


