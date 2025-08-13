import styled from "styled-components"
    
export const ButtonHeader = styled.button`
    background: linear-gradient(to left, ${props => props.theme.colors.primary}, #98caffff ) ; 
    padding: 10px 20px;
    border: none;
    outline: none;
    font-weight: 500;
    color: ${props => props.theme.colors.light};
    border-radius: 5px;


    &:hover{
        background: linear-gradient(to left, ${props => props.theme.colors.strongPrimary}, #98caffff ) ; 
        color: ${props => props.theme.colors.light};
    }
`