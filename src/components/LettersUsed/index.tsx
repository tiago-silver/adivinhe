import style from "./style.module.css"
// Pode colocar um componente dentro de outro componente
import { Letter } from "../Letter"
export function LettersUsed() {
    return <div className={style.lettersUsed}>
        <h5>Letras usadas</h5>

        <div>
            <Letter value="z" size="small" color="correct"/>
            <Letter value="X" size="small" color="wrong"/>
            <Letter value="X" size="small" color="wrong"/>
        </div>
    </div>
}