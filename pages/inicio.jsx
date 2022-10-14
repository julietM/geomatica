import Link from 'next/link'
import React from 'react'
import styles from '/styles/inicio.module.css'
import Image from 'next/image'


export default function inicio() {  
  return (
    <div className={styles.container}>
      <h1>Cuadrado</h1>
      <img className={styles.img1} src="/img/cuadro.jpg" width={320} height={250}></img>
       
      <a href='/nosotros'>Click Cuadrado</a>
      

     
          </div>
  )
}
