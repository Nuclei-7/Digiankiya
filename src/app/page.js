import Head from "next/head";
import Image from "next/image";
import styles from '@/app/styles/home.module.css'
 import Footer from '@/app/components/footer.js';



const Home = () => {
  return (
    <>
    <Head>
    </Head>
         <div className={styles.home}>

           
      
      <main className={styles.main}>
        <h2>Welcome to Digiankiya</h2>
        
      </main>
     
    </div>
 <Footer />
   

    </>
  );
};

export default Home;
 
