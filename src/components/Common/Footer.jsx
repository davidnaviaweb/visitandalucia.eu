import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mx-2 mt-12 bg-slate-200 dark:bg-slate-900">
      <div className="container flex flex-col flex-wrap items-center justify-between py-4 mx-auto sm:flex-row">
        <div className="flex flex-col items-center font-medium sm:flex-row">
          <Link to="/" className="mr-4">Aviso legal</Link><span className="hidden sm:block">|</span>
          <Link to="/" className="ml-4 mr-4">Política de privacidad</Link><span className="hidden sm:block">|</span>
          <Link to="/" className="ml-4 mr-4">Contacto</Link>
        </div>
        <div className="flex items-center font-medium">
          <span className="inline-flex justify-center mt-4 sm:mt-0 dark:text-puertoRico-400">
            &copy; 2024 Visit Andalucía
          </span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
