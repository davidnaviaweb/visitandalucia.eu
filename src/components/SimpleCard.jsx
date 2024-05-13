const SimpleCard = (item) => {
  console.log(item);
  return (
    <article className="border-2 border-blue-200 rounded-md p-4 flex items-center bg-blue-50 dark:bg-slate-800">
      <div className="w-24 h-24 rounded-full overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={item.image}
          alt={item.name}
        />
      </div>
      <div className="ml-4">
        <h2 className="text-2xl font-extrabold text-blue-800">{item.name}</h2>
        <h3 className="text-lg font-semibold text-blue-600">
          {item.territories[0].name}
        </h3>
        <h3 className="text-lg font-semibold text-blue-600">
          Clase: {item.resource_type.name}
        </h3>
      </div>
    </article>
  );
};

export default SimpleCard;
