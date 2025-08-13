import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    background: ${props => props.theme.colors.light};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
`

export const Container = styled.header`
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 20px;
    
`

export const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    position: relative;

    h1{
        font-size: 24px;
        color: ${props => props.theme.colors.light};
        background: linear-gradient(to left, ${props => props.theme.colors.primary}, #79baffff ) ; 
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }



`
export const GroupLogo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;

    p {
        font-size: 12px;
        color: ${props => props.theme.colors.secondary};
        margin-top: 0px;
    }
`




export const NavHeader = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;



    a {
        color: ${props => props.theme.colors.secondary};
        opacity: 0.8;
        text-decoration: none;
        font-size: 16px;
        font-weight: 500;

        &:hover {
            color: ${props => props.theme.colors.primary};
            opacity: 1;
        }
    }

    @media (max-width: 768px) {
        display: none;
        //validação para abrir o menu responsivo
        display: ${props => props.isMenuOpen ? 'flex' : 'none'};
        flex-direction: column;
        justify-content: start;
        align-items: center;
        position: absolute;
        width: 100%;
        top: 60px;
        left: 50%;
        transform: translateX(-50%);
        padding:  20px ;
        background-color: ${props => props.theme.colors.light};
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

`
export const ButtonMenu = styled.button`
    display: none;
    
    border: 2px solid ${props => props.theme.colors.info};

    align-items: center;
    justify-content: center;
    background: transparent;
    color: ${props => props.theme.colors.secondary};
    font-weight: 500;
    padding: 5px;
    border-radius: 5px;
    transition: all 0.3s ease;

    &:hover {
        background: ${props => props.theme.colors.info};
        color: ${props => props.theme.colors.light};
    }

    &:active{
        transform: scale(0.95);
    }

    @media (max-width: 768px) {
        display: flex; 
    }
`
