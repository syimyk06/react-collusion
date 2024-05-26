import { Card } from "../Card/Card";
import './CardList.css'

export const CardList = ({ category }) => {
  const getWeatherForecast = async () => {
    const resp = await axios(
      `https://api.openweathermap.org/data/2.5/forecast?q=${"Bishkek"}&appid=6c9081e4fb8cf6d47223ed7f7dfca4c0&units=metric`
    );
  }

  return (
    <div className="card-list">
      {items.map((el) => (
        <Card img={el.img} brand={el.brand} desc={el.desc} price={el.price} totalPrice={el.totalPrice}/>
      ))}
    </div>
  );
};
