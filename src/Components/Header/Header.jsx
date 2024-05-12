import searcIcon from '../../assets/icons/Search.svg'
import favoriteIcon from '../../assets/icons/Heart.svg'
import cartIcon from '../../assets/icons/Cart.svg'
import "./Header.css"

export const Header = () => {
  return (
    <header className="header" id="header">
      <div className="container">
        <a href="#" className="header__logo">
          YOUR LOGO
        </a>
        <nav className="header__menu">
          <a href="#" className="header__link">
            HOME
          </a>
          <a href="#" className="header__link">
            SHOP
          </a>
          <a href="#" className="header__link">
            LOOKBOOK
          </a>
          <a href="#" className="header__link">
            FEATURES
          </a>
          <a href="#" className="header__link">
            PAGES
          </a>
          <a href="#" className="header__link">
            BLOG
          </a>
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
