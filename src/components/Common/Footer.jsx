const Footer = () => {
  return (
    <footer className="mt-12 bg-slate-200">
      <div className="container flex flex-wrap items-center justify-between py-4 mx-auto">
        <div className="flex items-center mb-4 font-medium md:mb-0">
          <a href="#" className="mr-4 hover:text-gray-900">Link 1</a>
          <a href="#" className="mr-4 hover:text-gray-900">Link 2</a>
          <a href="#" className="mr-4 hover:text-gray-900">Link 3</a>
          <a href="#" className="mr-4 hover:text-gray-900">Link 4</a>
        </div>
        <div className="flex items-center mb-4 font-medium md:mb-0">
          <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
            &copy; 2021 Visit Andalucía
            </span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
