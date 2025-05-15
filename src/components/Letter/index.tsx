import style from "./style.module.css"
type Props = {
    value?: string
}
export function Letter({value}:Props){

    return (
        <div className={style.letter}>
            <span>{value}</span>
        </div>
    )

}