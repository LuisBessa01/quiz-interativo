import styles from './QuestionCard.module.css'
import Button from '../Button/index'


// cria um cartao para a questao
// recebe um objeto e uma função para quando uma resposta for clickada
export default function QuestionCard({ questao, onClick }){

    return(
        <>
        <h2>{questao.question}</h2>
        <Button onClick={onClick} value={questao.options[0]}></Button>
        <Button onClick={onClick} value={questao.options[1]}></Button>
        <Button onClick={onClick} value={questao.options[2]}></Button>
        <Button onClick={onClick} value={questao.options[3]}></Button>
        </>
    )
}