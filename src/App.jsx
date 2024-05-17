import "./App.css";
import {
  FASHION_WOMENS_INITIAL_DATA,
  FASHION_MENS_INITIAL_DATA,
} from "./Data.js";
import { Fashion } from "./Components/Fashion/Fashion.jsx";
import { Header } from "./Components/Header/Header.jsx";
import { CardList } from "./Components/CardList/CardList.jsx";
import { Hero } from "./Components/Hero/Hero.jsx";
import { Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={
            <>
              <Hero />
              <Fashion
                title={"WOMEN'S FASHION"}
                subTitle={"Shop our new arrivals from established brands"}
              >
                <CardList items={FASHION_WOMENS_INITIAL_DATA} />
              </Fashion>

              <Fashion
                title={"MEN'S FASHION"}
                subTitle={"Shop our new arrivals from established brands"}
              >
                <CardList items={FASHION_MENS_INITIAL_DATA} />
              </Fashion>
            </>
          }
         />
         <Route path="/shop" element={<h1>Shop page</h1>}/>
         <Route path="/lookbook" element={<h1>Lookbook page</h1>}/>
         <Route path="/features" element={<h1>Features page</h1>}/>
         <Route path="/pages" element={<h1>Pages</h1>}/>
         <Route path="/blog" element={<h1>Blog page</h1>}/>
      </Routes>
    </>
  );
};

{
  /* <Fashion
          title={"WOMEN'S FASHION"}
          subTitle={"Shop our new arrivals from established brands"}
        >
          <CardList items={FASHION_WOMENS_INITIAL_DATA} />
        </Fashion>

        <Fashion
          title={"MEN'S FASHION"}
          subTitle={"Shop our new arrivals from established brands"}
        >
          <CardList items={FASHION_MENS_INITIAL_DATA} />
        </Fashion> */
}
