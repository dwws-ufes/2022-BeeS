import styles from '../styles/Login.module.css'
import Image from 'next/image'

export default function Login() {
  return (
    <div className={styles.container}>

      <header className={styles.header}>
        <a href="home"><Image src="/logo.png" alt="logo" width={75} height={75} /> </a>
        <a href="home">BeeS</a>
      </header>

      <main className={styles.main}>
        <div className={styles.card}>
          <h2>Nome</h2>
          <input type="text" className={styles.data}></input>

          <h2>Email</h2>
          <input type="text" className={styles.data}></input>

          <h2>Senha</h2>
          <input type="text" className={styles.data}></input>

          <div className={styles.button_logar}>
            <a href="your_home">Criar conta</a>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        Copyright 2022.
      </footer>
    </div>
  )
}
