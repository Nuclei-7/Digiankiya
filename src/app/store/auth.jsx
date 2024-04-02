"use client"

import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {

    const router = useRouter();
    const [token, setToken] = useState("");
    
    useEffect(() => {
        // Check if we are on the client side before using localStorage
        if (typeof window !== 'undefined') {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            // Set the token in the state if it exists in localStorage
            setToken(storedToken);
            }
            setTokenInLs();
        }
    }, []); 

   

    const [user, setUser] = useState('');
    const authorizationToken = `Bearer ${token}`;
    const isLoggedIn = !!token;

    const logoutUser = () => {
        setToken("");
        return localStorage.removeItem('token');
    }

    const setTokenInLs = async (token) => {
        if (token) {
            localStorage.setItem('token', `Bearer ${token}`);
            setToken(`Bearer ${token}`);
        }
    }

    const userAuthentication = async () => {
        console.log("Authentication Ran");
        const tk = localStorage.getItem('token');
        
        if (tk) {
            try {
                const response = await fetch('/api/auth/user', {
                    method: "GET",
                    headers: { 'Authorization': tk },
                },
                
                )
                if (response.ok) {
                    const data = await response.json();
                    setUser(data.account);
                    console.log(data.account);
                }
            } catch (err) {
                console.log(err);
            }
        }
        /* else {
            const currentURL = window.location.href;
                if (!(currentURL==='http://localhost/auth/login' || currentURL==='http://localhost/auth/signup')) {
                    router.push('/auth/login');
                }
            }
            */
    };
    useEffect(() => {
        userAuthentication();
    }, [token]);

    return (<AuthContext.Provider value={{ isLoggedIn, logoutUser, user, authorizationToken, setTokenInLs }}>
        {children}
    </AuthContext.Provider>
    );

};

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new ERROR("useAuth used outside of the provider");
    }
    return authContextValue;
}






