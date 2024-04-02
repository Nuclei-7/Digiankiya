import React from 'react';
import styles from '@/app/styles/services.module.css'


const services = ()=>{
    return(<>

    
        <h3>This is services p <div className={styles.services}>
      <h1>Our Services</h1>
      <div className={styles.service}>
        <h2>Service 1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet tortor eu urna dapibus, sit amet fringilla lacus gravida. Duis ut turpis id risus suscipit sodales.</p>
      </div>
      <div className={styles.service}>
        <h2>Service 2</h2>
        <p>Curabitur nec justo nec quam placerat pulvinar ut vel lectus. Vestibulum auctor felis vitae velit gravida feugiat. Vivamus id libero eget sapien tincidunt volutpat nec nec nulla.</p>
      </div>
      <div className={styles.service}>
        <h2>Service 3</h2>
        <p>Integer efficitur quam nec gravida condimentum. Aenean auctor urna in lectus pulvinar ultrices. Sed nec aliquam odio. Morbi auctor mi sed urna consectetur, id congue velit ultricies.</p>
      </div>
    </div>age </h3>

    </>)
}
export default services;