import styles from '@/app/styles/leftNav.module.css';
const LeftNav = () => {
    return (<>
        <div className={styles.nav}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>Services</li>
                <li className={styles.navItem}>Wallet</li>
                <li className={styles.navItem}>Deposit</li>
                <li className={styles.navItem}>Withdraw</li>
            </ul>
        </div>
    </>);
}

export default LeftNav;