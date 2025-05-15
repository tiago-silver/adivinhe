import style from  "./style.module.css"

type Props = React.ComponentProps<"button"> & {
    title: string
}

export function Button({title}: Props){
    return <button className={style.button}>{title}</button>
}