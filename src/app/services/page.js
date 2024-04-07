import React from 'react';
import styles from '@/app/styles/services.module.css';

const Services = () => {
  return (
    <>
      <div className={styles.services}>
        <h1>Our Services</h1>
        <div className={styles.service}>
          <h2>Spurious Hit</h2>
          <p>An Educational Tech blogging Website: <a href="http://www.spurioushit.com">Click Here</a></p>
        </div>
        <div className={styles.service}>
          <h2>Aurum Gold pay</h2>
          <p>A Payment Application with Gold: <a href="https://gold-pay-web-urg8.vercel.app/">Click Here</a></p>
        </div>
        <div className={styles.service}>
          <h2>Yo Pal !</h2>
          <p>A Social Media Application: <a href="http://yo-pal.in">Click Here</a></p>
        </div>
      </div>
    </>
  );
};

export default Services;
