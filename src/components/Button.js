import classNames from "classnames"

function Button ({text, variant = 'default'}){
    return(
        <button className={classNames({
            "m-10 p-2 rounded": true,
            "bg-yellow-500": variant === 'warning',
            "bg-red-600": variant === 'danger',
            "bg-lime-600": variant === 'success'
        })}>{text} / {variant}</button>
    )
}

export default Button