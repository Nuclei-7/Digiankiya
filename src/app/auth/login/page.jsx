"use client"

import styles from "@/app/styles/auth.module.css";
import background from "@/app/styles/authBackground.css";
import Head from "next/head";
import { useState } from "react";
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useAuth } from "@/app/store/auth";
import Link from "next/link";



const Page =  () => {
    
    const router = useRouter();
    const { setTokenInLs } = useAuth();
    
    const [user, setUser] = useState({
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
        
        const response = await fetch('/api/auth/login', {
            method: "POST",
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(user),
        });
        const data = await response.json();
        if (response.ok) {
            //localStorage.setItem("token", `Bearer ${data.token}`);
            setTokenInLs(data.token);
            toast.success(data.message);
            router.push('/home');
        }
        else {
            toast.error(data.message);
        }
    }
    const isLoggedIn = useAuth();
    console.log(isLoggedIn);
    if (isLoggedIn) {
        //router.push("/dashboard");
    }
        
    
    return (
        <>
        <Head>
            <title>Login - Apna Bank</title>
        </Head>
        <section className={styles.authPage}>
            <div className={styles.container}>
                <div className={styles.authCard}>
                    <h2 className={styles.title}>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className={`${styles.formInput} ${styles.inputField}`}>
                            <input type="email" name="email" id="email"  value={user.email} onChange={handleInput} autoComplete="off" required></input>
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className={`${styles.formInput} ${styles.inputField}`}>
                            <input type="password" name="password" id="password"  value={user.password} onChange={handleInput} autoComplete="off" required></input>
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className={styles.formInput}>
                            <button className={ styles.button} type="submit">Log in</button>
                        </div>
                    </form>
                    <Link href="signup">Don't have an account? Register now</Link >

                </div>
            </div>

        </section>
        </>);
};

export default Page;