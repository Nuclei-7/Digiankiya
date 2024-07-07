import Image from "next/image";
import Link from "next/link";
import styles from "@/app/styles/nav.module.css";
import {Nav} from "./Nav";

export const Header = () => {
    return (
        <>
            <header>
                <div className={styles.main_header}>
                    <div className={styles.navbar_brand}>
                        <Link href="/">
                            <Image src="/images/digiLogo.png" alt={"bank logo"} width={20} height={20} />
                            <h2>Digiankiya Technologies</h2>
                        </Link>
                    </div>
                    <Nav/>
                </div>
            </header>
        </>
    );
};

export default Header;
