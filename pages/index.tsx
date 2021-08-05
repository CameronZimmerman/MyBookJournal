import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Book Journal</title>
        <meta name="an online journal for books you've been reading!" content="made with Next.js" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap" rel="stylesheet"></link>
      </Head>

      <main className={styles.main}>
        <h3 className={styles.heading}>Welcome</h3>
        <p className={styles.subHeading}>Login Or Signup to use My Book Journal</p>
        <div className={`${styles.login} fadeInUp animated`}>
          <section className={styles.formLeft}/>
          <section className={styles.formRight}>
            <div className={styles.inputContainer}>
              <label htmlFor="email">Email</label>
              <input type="text" />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="email">Password</label>
              <input type="password"/>
            </div>
            <button>Login</button>
            <hr></hr>
            <div className={styles.inputContainer}>
              <label htmlFor="email">Email</label>
              <input type="text" />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="email">Password</label>
              <input type="password"/>
            </div>
            <button>Sign Up</button>
            <div className={styles.loginText}>
              <p>
                My Book Journal is an online record keeper for the books you have read. Keep track of statistics and reviews for your favorite books and authors!
              </p>
            </div>
          </section>

        </div>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}

Home.requireAuth = false
