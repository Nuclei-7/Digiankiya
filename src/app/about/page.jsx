import styles from '@/app/styles/about.module.css'
import Footer from '@/app/components/footer.js';



const About = ()=>{
    return(<>

    
     <div className={styles.about}>
      <h1>About Us</h1>
      <p>Welcome to our website! We are a dedicated team passionate about creating innovative solutions.</p>
      <p>Our mission is to provide value to our customers by delivering high-quality products and services.</p>
      <p>With years of experience and expertise in the industry, we aim to exceed expectations and build long-lasting relationships with our clients.</p>
      <p>Feel free to explore our website and learn more about what we have to offer.</p>
      <p>Founder : Digiankiya Technologies</p>
    </div>

    <Footer/>
    

    </>)
}
export default About;