import "./LookBook.css";

export const LookBook = () => {
  const getForm = (e) => {
    console.log(e.target);
  };

  return (
    <section className="lookbook">
      <form onSubmit={getForm}>
        <input type="text" placeholder="name"/>
        <input type="email" placeholder="email"/>
        <input type="password" placeholder="name"/>

        <button>Save</button>
      </form>
    </section>
  );
};
