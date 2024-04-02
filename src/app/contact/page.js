import React from 'react';
import styles from '@/app/styles/contact.module.css'



const  contact = ()=>{
    return(<>

    
        <div className={styles.contact}>
      <h1>Contact Us</h1>
      <p>If you have any questions or inquiries, feel free to contact us using the form below:</p>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5"></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>Send Message</button>
      </form>
    </div>

    </>)
}
export default contact;