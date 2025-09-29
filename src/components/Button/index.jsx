import styles from './Button.module.css'

// botaozinho simples, voce passa pra ele o que ele executa ao clickar e o que tem q ter escrito nele
export default function Button({ onClick, value }) {
    return(
        <button onClick={onClick}>
            {value}
        </button>
    )
}