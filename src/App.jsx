import "./App.css";
import { Fashion } from "./Components/Fashion/Fashion.jsx";
import { Header } from "./Components/Header/Header.jsx";
import { CardList } from "./Components/CardList/CardList.jsx";
import { Hero } from "./Components/Hero/Hero.jsx";
import { Routes, Route } from "react-router-dom";
import { LookBook } from "./Components/LookBook/LookBook.jsx";

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/react-collusion" element={
            <>
              <Hero />
              <Fashion
                title={"WOMEN'S FASHION"}
                subTitle={"Shop our new arrivals from established brands"}
              >
                <CardList category={"women's clothing"} />
              </Fashion>

              <Fashion
                title={"MEN'S FASHION"}
                subTitle={"Shop our new arrivals from established brands"}
              >
                <CardList category={"men's clothing"} />
              </Fashion>
            </>
          }
         />
         <Route path="/shop" element={<h1>Shop page</h1>}/>
         <Route path="/lookbook" element={<LookBook/>}/>
         <Route path="/features" element={<h1>Features page</h1>}/>
         <Route path="/pages" element={<h1>Pages</h1>}/>
         <Route path="/blog" element={<h1>Blog page</h1>}/>
      </Routes>
    </>
  );
};