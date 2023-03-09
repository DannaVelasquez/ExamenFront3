import { useState } from "react";
import { Card } from "./Card";
import styles from "./Form.module.css";

export function Form() {
  const className = `${styles.form} ${styles.h1}`;
  const [user, setUser] = useState({
    name: "",
    favoriteAnimal: "",
    favoriteColor: "",
  });

  const [show, setShow] = useState(false);

  //Validations
  function validateName(user) {
    const newName = user.name.trim();
    if (newName.length >= 3) {
      return true;
    } else {
      return false;
    }
  }

  function validateAnimal(user) {
    if (user.favoriteAnimal.length > 6) {
      return true;
    } else {
      return false;
    }
  }

  //Submit
  function handleSubmit(e) {
    e.preventDefault();
    if (!user.name | !user.favoriteAnimal | !user.favoriteColor) {
      alert("Check your information");
    } else {
      const isNameValid = validateName(user);
      const isAnimalValid = validateAnimal(user);

      if (!isNameValid) {
        alert("Check name field, please!");
      }
      if (!isAnimalValid) {
        alert("Check animal field, please");
      } else {
        setShow(true);
      }
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={className}>
        <h1>😊 Hello 👋🏻</h1>
        <h3>We want to know something about you!</h3>
        <label>Enter your name: </label>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <br />
        <label>Enter your favorite animal: </label>
        <input
          type="text"
          placeholder="Favorite animal"
          onChange={(e) => setUser({ ...user, favoriteAnimal: e.target.value })}
        />
        <br />
        <label>Enter your favorite color: </label>
        <input
          type="text"
          placeholder="Favorite color"
          onChange={(e) => setUser({ ...user, favoriteColor: e.target.value })}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <hr />
      {show ? <Card user={user} /> : null}
    </>
  );
}
