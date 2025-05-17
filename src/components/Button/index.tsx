import style from  "./style.module.css"

type Props = React.ComponentProps<"button"> & {
    title: string
    onClick: () => void
}



export function Button({title, onClick}: Props){
    return <button className={style.button} onClick={onClick}>{title}</button>
}