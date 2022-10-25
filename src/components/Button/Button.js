import s from './button.module.css'

export const Button = ({onClick}) => {
    return (
        <button className={s.button} type='button' onClick={onClick}>Load more</button>

    )
}

export default Button

