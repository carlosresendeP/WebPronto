import { Link } from "react-router";
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: auto;
    padding: 20px;

    @media (max-width: 768px) {
        padding: 00px;
    }

`
export const TemplatesButton = styled(Link)`
    background-color: ${props => props.theme.colors.primary};
    padding: 10px 20px;
    border: none;
    outline: none;
    font-weight: 500;
    color: ${props => props.theme.colors.light};
    border-radius: 5px;
    text-decoration: none;
    text-align: center;
    width: 50%;
    margin-top: 20px;
    transition: all 0.3s, color 0.3s;


    &:hover{
        background-color: ${props => props.theme.colors.strongSuccess}; 
        color: ${props => props.theme.colors.light};
        transform: translateY(-2px);
    }
`


export const Title = styled.h2`
    font-size: 40px;
    color: ${props => props.theme.colors.dark};
    text-align: center;
    span{
        font-size: 16px;
        color: ${props => props.theme.colors.secondary};
        display: block;
        margin-top: 10px;
        font-weight: 500;
    }
`

export const Card = styled.div`

`



export const TemplatesGrid = styled.section`

`
