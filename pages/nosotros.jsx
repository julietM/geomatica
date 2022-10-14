import Link from 'next/link'
import React from 'react'
import styles from '/styles/inicio.module.css'
import Image from 'next/image'

export default function inicio() {
  return (
    <div className={styles.container}>
      <h1>Circulo</h1>
      <img className={styles.img1} src="/img/circulo.png" width={320} height={250}></img>
       
      <a href='/inicio'>Click Circulo</a>
      

     
          </div>
  )
}
