
import logo from "../../assets/logo.png"
import style from "./style.module.css"
import restart from "../../assets/restart.svg"

type Props = {
    current: number
    max: number
    onRestart: () => void
}
export function Header({current, max, onRestart}:Props){
    return <div className={style.container}>
            <img src={logo} alt="Logo" />

            <header> 
                <span>
                    <strong> {current}</strong> de {max} tentativas
                </span>



                <button type="button" onClick={onRestart}>
                    <img src={restart} alt="Botão de restart" />
                </button>
            </header>
        </div>
    
}