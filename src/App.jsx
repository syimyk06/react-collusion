import "./App.css";
import { FASHION_WOMENS_INITIAL_DATA, FASHION_MENS_INITIAL_DATA } from "./Data.js";
import { Fashion } from "./Components/Fashion/Fashion.jsx";
import { Header } from "./Components/Header/Header.jsx";
import { CardList } from "./Components/CardList/CardList.jsx";
import { Hero } from "./Components/Hero/Hero.jsx";

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Fashion title={"WOMEN'S FASHION"} subTitle={"Shop our new arrivals from established brands"}>
        <CardList items={FASHION_WOMENS_INITIAL_DATA} />
      </Fashion>

      <Fashion title={"MEN'S FASHION"} subTitle={"Shop our new arrivals from established brands"}>
        <CardList items={FASHION_MENS_INITIAL_DATA} />
      </Fashion>
    </>
  );
};
