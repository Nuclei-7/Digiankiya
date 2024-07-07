import React from 'react';
import Head from 'next/head';
import styles from '@/app/styles/services.module.css';
import Footer from '@/app/components/footer.js';



const services = [
  {
    id: 1,
    title: 'Record Management System',
    description: 'A comprehensive system that analyzes, categorizes, and manages enterprise content, ensuring secure storage and easy retrieval of important records.'
  },
  {
    id: 2,
    title: 'Housing Society Management Software',
    description: 'Software designed to streamline and simplify the operations of residential complexes or housing societies, improving overall management efficiency.'
  },
  {
    id: 3,
    title: 'Facility Management Software',
    description: 'An integrated solution to manage and maintain facilities, enhancing operational efficiency and ensuring optimal use of resources.'
  },
  {
    id: 4,
    title: 'Clinic Management Software',
    description: 'A system to streamline clinic operations, manage patient records, appointments, and ensure smooth administrative processes in healthcare facilities.'
  },
  {
    id: 5,
    title: 'Appointment Management Software Development Services',
    description: 'Custom software solutions to efficiently manage and schedule appointments, improving service delivery and customer satisfaction.'
  },
  {
    id: 6,
    title: 'Expense Management Software',
    description: 'A solution to automate and streamline expense tracking and reporting, enhancing financial control and reducing administrative burden.'
  },
  {
    id: 7,
    title: 'Hotel Software Development Services',
    description: 'Custom software solutions tailored for the hospitality industry to manage bookings, operations, and enhance guest experiences.'
  },
  {
    id: 8,
    title: 'Task Management Software Development Services',
    description: 'Developing software solutions to organize, assign, and track tasks, improving team collaboration and productivity.'
  },
  {
    id: 9,
    title: 'E-Learning Management Software Services',
    description: 'Providing software solutions for online learning, including course management, content delivery, and tracking learner progress.'
  },
  {
    id: 10,
    title: 'Payroll Software Development Services',
    description: 'Custom payroll solutions to automate salary calculations, tax deductions, and ensure compliance with regulatory standards.'
  },
  {
    id: 11,
    title: 'Web-based Online Exam Software',
    description: 'A robust platform for conducting online exams, featuring secure assessment environments and comprehensive reporting tools.'
  },
  {
    id: 12,
    title: 'Warehouse Management Software Services',
    description: 'Software solutions to optimize warehouse operations, manage inventory, and improve supply chain efficiency.'
  },
];


export default function Services() {
  return (
    <>
      <Head>
        <title>Our Services - Auruma Gold Pay</title>
        <meta name="description" content="Learn about the services we offer at Auruma Gold Pay." />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Our Services</h1>
        <div className={styles.services}>
          {services.map(service => (
            <div key={service.id} className={styles.serviceCard}>
              <h2 className={styles.serviceTitle}>{service.title}</h2>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div> 

      <Footer/>
    </>

    
  );
}