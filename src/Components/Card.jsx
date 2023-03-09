import React from 'react'
import styles from "./Card.module.css";

export function Card({user}) {
    const className = `${styles.card}  ${styles.h1}`
  return (
    <div className={className}> 
        <h1>Hello {user.name} 👋🏻</h1>
        <h4 className={styles.h4}>Now we know your favorite animal is {user.favoriteAnimal} and your favorite color is {user.favoriteColor}</h4>
    </div>
  )
}
