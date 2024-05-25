import { Link } from 'react-router-dom';
import Navbar from './Navbar';

import logo from '../../assets/images/logo-andalucia.png';

const Header = () => {
  return (
    <header>
      <div className="container flex items-center justify-between py-5 mx-auto">
        <Link className="flex items-start ml-2 font-medium sm:items-center title-font" to='/'>
          <img className="size-8 sm:size-10 md:size-12" src={logo} alt="Visit Andalucía" />
          <h1 className="ml-3 text-lg sm:text-xl md:text-2xl logo">visitandalucia.eu</h1>
        </Link>
        <Navbar />
      </div>
    </header>
  );
};
export default Header;
