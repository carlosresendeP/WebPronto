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

export const FilterSection = styled.div`
    width: 100%;
    margin: 30px 0 40px 0;
    
    @media (max-width: 768px) {
        margin: 20px 0 30px 0;
    }
`

export const FilterRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    
    @media (max-width: 768px) {
        gap: 12px;
    }
`

export const FilterButtons = styled.div`
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    justify-content: center;
    
    @media (max-width: 768px) {
        gap: 8px;
    }
`

export const FilterButton = styled.button`
    padding: 10px 20px;
    border: 2px solid ${props => props.$active ? props.theme.colors.primary : '#e9ecef'};
    background: ${props => props.$active ? props.theme.colors.primary : 'transparent'};
    color: ${props => props.$active ? props.theme.colors.white : props.theme.colors.secondary};
    border-radius: 25px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    white-space: nowrap;
    
    &:hover {
        border-color: ${props => props.theme.colors.primary};
        background: ${props => props.$active ? props.theme.colors.strongPrimary : props.theme.colors.primary};
        color: ${props => props.theme.colors.white};
        transform: translateY(-2px);
    }
    
    @media (max-width: 768px) {
        padding: 8px 16px;
        font-size: 12px;
    }
`
