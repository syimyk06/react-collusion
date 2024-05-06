import { Button } from "./Button";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="text__box">
        <h3 className="third-title">NEW TREND</h3>
        <h1 className="first-title">COLLUSION</h1>
        <h2 className="second-title">
          An exclusive selection of this season's trends.
        </h2>
        <div className="button__box">
          <Button text="Discover"></Button>
          <Button text="Shop now"></Button>
        </div>
      </div>
    </section>
  );
};
