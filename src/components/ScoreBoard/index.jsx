import styles from './ScoreBoard.module.css'

export default function ScoreBoard() {

    return (
        <>
            <div   className={styles.cabeçalho}>
                <h1>Resultados</h1>
                <div className={styles.realtorio_container}>
                    <p>pontuação final: questoes acertadaos</p>
                    <p>menor tempo: menor tempo lol</p>
                    <p>Acertos: porcentagem</p>
                </div>
            </div>

            <div className={styles.questoes}>

            </div>
        </>
    )
}