import './Card.css'

export const Card = ({ img, brand, desc, price, totalPrice}) => {
  return (
    <div className="card">
      <img src={img} alt="card-img" />
      <p className="card__brand">{brand}</p>
      <p className="card__desc">{desc}</p>
      <span>
        <span className="card__price">${price}</span>
        <span className="card__total-price">${totalPrice}</span>
      </span>
    </div>
  );
};
