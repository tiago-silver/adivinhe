import style from "./style.module.css"
// Pode colocar um componente dentro de outro componente
import { Letter } from "../Letter"

// Cria tipagem 
export type LettersUsedProps = {
    value: string
    correct: boolean
}

type Props = {
    data: LettersUsedProps[]
}

export function LettersUsed({data}:Props) {
    return <div className={style.lettersUsed}>
        <h5>Letras usadas</h5>

        <div>
            {
                data.map(({value, correct}) => (

                    <Letter key={value} value={value} size="small" color={correct ? "correct" : "wrong"}/>
                ))
            }
           
            
        </div>
    </div>
}