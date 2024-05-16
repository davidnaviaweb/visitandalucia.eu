import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-12 bg-slate-200 dark:bg-slate-900">
      <div className="container flex flex-wrap items-center justify-between py-4 mx-auto">
        <div className="flex items-center mb-4 font-medium md:mb-0" >
          <Link to="/" className="mr-4">Aviso legal</Link>|
          <Link to="/" className="ml-4 mr-4">Política de privacidad</Link>|
          <Link to="/" className="ml-4 mr-4">Contacto</Link>|
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
