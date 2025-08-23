import styled from "styled-components";


export const MainContainer = styled.div`
    width: 100%;
  
    background-color: ${props => props.theme.colors.light};


`
export const Container = styled.div`
    width: 1280px;
    margin: 0 auto;
`
export const ImageView = styled.div`
    position: absolute;
    left: 0;
    width: 100%;
    height: 100vh;
    background: url('https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') no-repeat center center;
    background-size: cover;
    background-attachment: fixed;
    filter: brightness(0.5);

    z-index: 1;
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: rgba(38, 30, 65, 0.34);
        z-index: 1;
    }
`


export const ContainerHome = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
    
`

export const HomeContent = styled.div`
    position: absolute;
    z-index: 3;
    padding: 20px;
    max-width: 800px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 40px;

    @media (max-width: 768px) {
        margin-top: 20px;
        max-width: 100%;
    }

    h2{
        font-size: 58px;
        font-weight: 700;
        margin-bottom: 16px;
        color: ${props => props.theme.colors.light};
        text-shadow: 4px 4px 3px rgba(0, 0, 0, 0.11);

        span{
            background: linear-gradient(to right,
                 ${props => props.theme.colors.strongPrimary}, 
                 ${props => props.theme.colors.info});
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;

        }

        @media (max-width: 768px) {
            font-size: 40px;
        }

    }

    p{
        font-size: 15px;
        font-weight: 400;
        margin-bottom: 16px;
        color: ${props => props.theme.colors.light};

        span{
            color: ${props => props.theme.colors.info};
            font-weight: 700;
        }
    }
`
export const GroupButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
    }


`

export const HomeButton = styled.a`
    position: relative;
    background: linear-gradient(to left, 
        ${props => props.theme.colors.primary},
        ${props => props.theme.colors.strongPrimary});
    padding: 10px 20px;
    border: none;
    outline: none;
    font-weight: 500;
    color: ${props => props.theme.colors.light};
    border-radius: 5px;
    overflow: hidden;
    z-index: 1;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    font-weight: 600;
    text-decoration: none;
    font-size: 15px;
    
    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 0;
        background: linear-gradient(to left, 
            ${props => props.theme.colors.success},
            ${props => props.theme.colors.strongSuccess});
        transition: width 0.5s ease;
        border-radius: inherit;
        z-index: -1;
    }
    
    &:hover::before {
        width: 100%;
    }

    &:last-child {
        background: transparent;
        border: 1px solid ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.primary};
            
        &::before {
            border-radius: 2px;

            background: linear-gradient(to right, 
                ${props => props.theme.colors.success},
                ${props => props.theme.colors.strongSuccess});
        }
        &:hover{
            color: ${props => props.theme.colors.white};
            border: 1px solid ${props => props.theme.colors.strongSuccess};
        }
    }

    & > * {
        position: relative;
        z-index: 1;
    }

    @media (max-width: 768px) {
        width: 100%;
        text-align: center;
        padding: 12px 0;
        font-size: 13px;
    }
`

export const GroupCards = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
    margin-top: 40px;

    div{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column ;

        p{
            font-size: 14px;
            font-weight: 500;
            color: ${props => props.theme.colors.primary};
            text-align: center;
            font-size: 30px;
            font-weight: 700;
            display: flex;
            flex-direction: column;

            span{
                color: ${props => props.theme.colors.light};
                font-size: 14px;
                font-weight: 400;            
                margin-top: 8px;

            }


            @media (max-width: 768px) {
            font-size: 20px;
        }

        }
    }
`