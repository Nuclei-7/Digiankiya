"use client"

import Link from "next/link";
import styles from "@/app/styles/nav.module.css";
import  {useAuth}  from "@/app/store/auth";
import { useEffect } from "react";

export const Nav = () => {

    const { isLoggedIn } = useAuth();
    useEffect(() => {
        const navList = document.getElementById("navList"); 
    });
    const handleNavToggle = () => {
        if (navList.style.display == "flex") {
            navList.style.display = "none";
            
        
        }
        else {
            navList.style.display = "flex";
        }
    }
    return (<>
        <nav>
            <div className={styles.navItems}>
                <ul className={`${styles.navList}`} id="navList">
                    {isLoggedIn ? (<>
                        <li className={styles.navItem}>
                            <Link href="/">Home</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/services">Services</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/contact">Contact</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/about">About</Link>
                        </li>
                        <li className={styles.navItem}>
                        <Link href="/auth/logout">Logout</Link>
                        </li>
                    </>)
                        : (<>
                        <li className={styles.navItem}>
                            <Link href="/">Home</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/services">Services</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/contact">Contact</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/about">About</Link>
                        </li>
                        <li className={styles.navItem}>
                        <Link href="/auth/login">Client Login</Link>
                        </li>
                         <li className={styles.navItem}>
                        <Link href="#">Admin Login</Link>
                        </li>
                        
                        </>) 
                    }
                </ul>
        
                    <div className={styles.toggleNav} id="navToggle" onClick={handleNavToggle}>
                        <img src="/3dot.png" width="30px" height="30px"/>
                    </div>
            </div>
        </nav>
    </>);
};

export default Nav;