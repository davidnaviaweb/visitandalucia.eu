import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-12 bg-slate-200 dark:bg-slate-900">
      <div className="container flex flex-wrap items-center justify-between py-4 mx-auto">
        <div className="flex items-center mb-4 font-medium md:mb-0">
          <Link to="/" className="mr-4">Link 1</Link>
          <Link to="/" className="mr-4">Link 2</Link>
          <Link to="/" className="mr-4">Link 3</Link>
          <Link to="/" className="mr-4">Link 4</Link>
        </div>
        <div className="flex items-center mb-4 font-medium md:mb-0">
          <span className="inline-flex justify-center mt-2 dark:text-puertoRico-400">
            &copy; 2021 Visit Andalucía
            </span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
