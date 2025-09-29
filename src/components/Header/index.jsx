import styles from './Header.module.css'

export default function Header({ questaoAtual, }){
    // fazer uma função de timer aqui?
    let tempo = 0
    function timer(){
        tempo += 1
        return tempo
    }

    return(
        <header className={styles.header}>
            <h1>quiz legal</h1>
            <p>{questaoAtual}/10</p>
            <p>{timer()}</p>
        </header>
    )
    
}