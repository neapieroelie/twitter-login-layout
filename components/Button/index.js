import styles from './Button.module.css'

export default function Button({
    title="default",
    color,
    textColor,
    borderColor,

}) {
    return(
        <button className={styles.button} style={{backgroundColor: color, color: textColor, border: borderColor}}>{title}</button>
    )
}