"use client"
import NextAuth from 'next-auth';
import { signIn } from 'next-auth/react';
import styles from "@/app/styles/auth.module.css";
import { useState } from "react";
import background from "@/app/styles/authBackground.css";
import Head from "next/head"; 
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import Link from 'next/link';



const Page = () => {
    
    const router = useRouter();

    const [user, setUser] = useState({
        fname: "",
        lname:"",
        email: "",
        password: "",
    });

    const handleInput = async (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({
            ...user,
            [name]:value,
        });
        console.log(user);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const response = await fetch('../api/auth/register', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
        
        const data = await response.json();
        //const newUser = { email, password };
        if (response.ok) {
            toast.success(data.message);
            router.push('/auth/login');
            
        } else {
            toast.error(data.message);
        }
    };
    return (<>
        <section className={styles.authPage}>
            <div className={`${styles.container} ${styles.signupContainer}`}>
                <div className={styles.authCard} >
                    <h2>Signup</h2>
                    <form onSubmit={handleSubmit}>
                        <div className={`${styles.formInput} ${styles.inputField}`}>
                            <input type="text" name="fname" id="fname"  value={user.fname} onChange={handleInput} autoComplete="off" required></input>
                            <label htmlFor="fname">First name</label>
                        </div>
                        <div className={`${styles.formInput} ${styles.inputField}`}>
                            <input type="text" name="lname" id="lname"  value={user.lname} onChange={handleInput} autoComplete="off" required></input>
                            <label htmlFor="lname">Last name</label>
                        </div>
                        <div className={`${styles.formInput} ${styles.inputField}`}>
                            <input type="email" name="email" id="email"  value={user.email} onChange={handleInput} autoComplete="off" required></input>
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className={`${styles.formInput} ${styles.inputField}`}>
                            <input type="password" name="password" id="password"  value={user.password} onChange={handleInput} autoComplete="off" required></input>
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className={styles.formInput}>
                            <button className={styles.button} type="submit">Sign Up</button>
                        </div>
                    </form>
                    <Link href="login">Already have an account? Login now</Link >
                </div>
            </div>

        </section>
        </>);
};

export default Page;