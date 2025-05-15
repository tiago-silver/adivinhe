import style from "./style.module.css"
import iconTip from "../../assets/tip.svg"

type Props = {
    tip : string
}
export function Tip({tip}:Props) {
    return <div className={style.tip}>
        <img src={iconTip} alt="Ícone de dica" />

        <div>
            <h3>Dica</h3>
            <p>{tip}</p>
        </div>

    </div>
}