import { Link } from 'react-router-dom';
import Navbar from './Navbar';

import logo from '../../assets/images/logo-andalucia.png';

const Header = () => {
  return (
    <header>
      <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
        <Link className="flex items-center mb-4 font-medium title-font md:mb-0" to='/'>
          <img className="size-12" src={logo} alt="Visit Andalucía" />
          <h1 className="ml-3 text-3xl logo">visitandalucia.eu</h1>
        </Link>
        <Navbar />
      </div>
    </header>
  );
};
export default Header;
