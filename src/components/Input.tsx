import styles from './Input.module.scss'

type InputData = {
    type: string 
    required?: boolean
    value?: string 
    placeholder?: string
    children: string
}

const Input = (props: InputData) => {
    return (
        <div className={styles.fgroup}>
            <label htmlFor={props.children.toLowerCase()}>{props.children}</label>
            <input 
                type={props.type} 
                placeholder={props.placeholder} 
                value={props?.value}
                required={props?.required}
                />
        </div>
    )
}

export default Input