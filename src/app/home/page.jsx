import Head from "next/head";
import styles from '@/app/styles/home.module.css'

const Home = () => {
  return (
    <>
    <Head>
    </Head>

<div className={styles.home}>
      
      <main className={styles.main}>
        <h2>Our Services</h2>
        <p>We provide a range of services to meet your needs. Explore our services below:</p>
        <ul>
          <li>Service 1</li>
          <li>Service 2</li>
          <li>Service 3</li>
        </ul>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2024 Our Service Company. All rights reserved.</p>
      </footer>
    </div>

    </>
  );
};

export default Home;
