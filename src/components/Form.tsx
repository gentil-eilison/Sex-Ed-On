import Input from './Input'
import styles from './Form.module.scss'

type FormData = {
    children?: any 
    method: string 
    action: string 
}

const Form = (props: FormData) => {
    return (
        <form method={props.method} action={props.action}>
            {props.children ? (props.children): (
                <>
                    <Input type='email' required placeholder='nome@exemplo.com'>Email</Input>
                    <Input type="password" required>Senha</Input>
                    <button type="submit" className={styles.fbutton}>Aprender</button>
                </>
            )}
        </form>
    )
}

export default Form