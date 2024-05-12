import './Fashion.css'

export const Fashion = ({ children, title, subTitle }) => {
  return (
    <section className="section__fashion container">
      <h2 className="fashion__title">{title}</h2>
      <p className="fashion__subtitle">{subTitle}</p>
      {children}
    </section>
  );
};
