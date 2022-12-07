import styles from '../styles/Login.module.css'

export default function Login() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <div className={styles.card}>
          <h2>Email</h2>
          <input type="text" className={styles.data}></input>
          <h2>Senha</h2>
          <input type="text" className={styles.data}></input>
          <a className={styles.button} href="login">Logar</a>
        </div>
      </main>

      <footer className={styles.footer}>
        Copyright 2022.
      </footer>
    </div>
  )
}
