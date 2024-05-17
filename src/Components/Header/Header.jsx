import searcIcon from '../../assets/icons/Search.svg'
import favoriteIcon from '../../assets/icons/Heart.svg'
import cartIcon from '../../assets/icons/Cart.svg'
import "./Header.css"
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="header" id="header">
      <div className="container">
        <a href="#" className="header__logo">
          YOUR LOGO
        </a>
        <nav className="header__menu">
          <Link to="/" className="header__link">
            HOME
          </Link>
          <Link to="/shop" className="header__link">
            SHOP
          </Link>
          <Link to="/lookbook" className="header__link">
            LOOKBOOK
          </Link>
          <Link to="/features" className="header__link">
            FEATURES
          </Link>
          <Link to="/pages" className="header__link">
            PAGES
          </Link>
          <Link to="/blog" className="header__link">
            BLOG
          </Link>
        </nav>
        <div className="header__actions">
          <a href="#" className="icon__link">
            <img src={searcIcon} alt="search"/>
          </a>
          <a href="#" className="icon__link">
            <img src={favoriteIcon} alt="search"/>
          </a>
          <a href="#" className="icon__link">
            <img src={cartIcon} alt="search"/>
          </a>
        </div>
      </div>
    </header>
  );
};
