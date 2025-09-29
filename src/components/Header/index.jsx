import styles from './Header.module.css'

export default function Header(){
    return(
        <header className={styles.header}>
            <h1>quiz legal</h1>
            <span>questao atual/10</span>
            <span>timer</span>
        </header>
    )
}