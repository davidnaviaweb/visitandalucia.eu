import { Link } from 'react-router-dom';
import Navbar from './Navbar';

import logo from '../../assets/images/logo-andalucia.png';

const Header = () => {
  return (
    <header className="body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link className="flex title-font font-medium items-center mb-4 md:mb-0" to='/'>
          <img className="size-12" src={logo} alt="Visit Andalucía" />
          <h1 className="ml-3 text-3xl logo">visitandalucia.eu</h1>
        </Link>
        <Navbar />
      </div>
    </header>
  );
};
export default Header;
