import { ButtonHeader } from "./style"

export const Button = ({ children, ...rest }) =>{
    
    return(
        <>
            <ButtonHeader type="button" {...rest}>{children}</ButtonHeader>
        </>

    )
}