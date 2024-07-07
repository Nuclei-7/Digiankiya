// footer.js
'use client'
import React from 'react';
import styles from '@/app/styles/footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerTop}>
                    <div className={styles.column}>
                        <h3>About Us</h3>
                        <ul className={styles.navList}>
                            <li><a href="/about">Our Story</a></li>
                            <li><a href="/team">Team</a></li>
                            <li><a href="/careers">Careers</a></li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <h3>Support</h3>
                        <ul className={styles.navList}>
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="/faq">FAQ</a></li>
                            <li><a href="/support">Support Center</a></li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <h3>Legal</h3>
                        <ul className={styles.navList}>
                            <li><a href="/privacy">Privacy Policy</a></li>
                            <li><a href="/terms">Terms of Service</a></li>
                            <li><a href="/disclaimer">Disclaimer</a></li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <h3>Follow Us</h3>
                        <ul className={styles.socialList}>
                            <li><a href="https://www.facebook.com">Facebook</a></li>
                            <li><a href="https://www.twitter.com">Twitter</a></li>
                            <li><a href="https://www.instagram.com">Instagram</a></li>
                            <li><a href="https://www.linkedin.com">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <p>&copy; 2024 Digiankiya Technolgies. All rights reserved.</p>
                    <button onClick={() => window.scrollTo(0, 0)} className={styles.backToTop}>Back to Top</button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
