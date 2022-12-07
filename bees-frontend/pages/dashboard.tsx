import Head from 'next/head'
import Image from 'next/image'
import { Button } from 'react-bootstrap'
import styles from '../styles/Home.module.css'

export default function HomeLogado() {
  return (
    <div className={styles.container}>

      <header className={styles.header}>
        <a href=""><Image src="/logo.png" alt="logo" width={75} height={75} /> </a>
        <a href="">BeeS</a>
        <a className={styles.button} href="dashboard">Dashboard</a>
        <a className={styles.button} href="login">Deslogar</a>
      </header>

      <body>
      <Image src="/Beehive.svg" alt="beehive" width={75} height={75} />
      </body>

      <footer className={styles.footer}>
        Copyright 2022.
      </footer>
    </div>
  )
}
