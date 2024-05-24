import React from 'react';
import './LookBook.css';
import { Timer } from '../Timer/Timer';

export const LookBook = () => {
  const getForm1 = (event) => {
    event.preventDefault();

    const domData = new FormData(event.target);

    const objectData = Object.fromEntries(domData.entries());

    console.log(objectData);
  };

  const getForm2 = (event) => {
    event.preventDefault();

    const domData = event.target;

    console.log({name: domData.name.value, email: domData.email.value, password: domData.password.value});
  };

  return (
    <section className="lookbook">
      <form onSubmit={getForm2} className="form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Name" className="form-input"/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Email" className="form-input"/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Password" className="form-input"/>
        </div>
        <button type="submit" className="form-button">Save</button>
      </form>
      <Timer/>
    </section>
  );
};
