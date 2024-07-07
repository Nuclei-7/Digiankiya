
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import ToastContainer from './components/ToastContainer';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';
import { AuthProvider } from './store/auth';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Digiankiya',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <AuthProvider>

    <html lang="en">
      <head>
        
        <link rel="icon" href="/bank-building.png"/>
      </head>
      <body className={inter.className}>
        <Header />
        <ToastContainer />
        {children}</body>
    </html>
    </AuthProvider>
  )
}