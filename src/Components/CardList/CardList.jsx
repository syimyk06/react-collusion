import { Card } from "../Card/Card";
import './CardList.css'

export const CardList = ({ items }) => {
  return (
    <div className="card-list">
      {items.map((el) => (
        <Card img={el.img} brand={el.brand} desc={el.desc} price={el.price} totalPrice={el.totalPrice}/>
      ))}
    </div>
  );
};
