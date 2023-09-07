import Head from "next/head"
import { Navbar } from "../Navbar"
import styles from './MainLayout.module.css'
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ['latin'] })

export const MainLayout = ({ children }: {children: React.ReactNode}) => {
    return (
        <>
          <Head>
            <title>Home - Meli</title>
            <meta name="description" content="Home page" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Navbar />
          <main className={`${styles.main} ${inter.className}`}>
           { children }
          </main>
        </>
      )
}
