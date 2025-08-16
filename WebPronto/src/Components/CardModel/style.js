import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    position: relative;
`

export const Card = styled.div`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;  
    padding: 20px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 10px;
    }


    .CardContents{
        background-color: ${props => props.theme.colors.light};
        border-radius: 8px;
        text-align: start;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;

        
        img {
            width: 100%;
            max-height: 200px;
            object-fit: cover;
            border-radius: 4px;
        }


        .CardTexts{
            width: 100%;
            padding: 10px 20px;
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: center;
            gap: 10px;

            h3 {
                margin: 0;
                font-size: 18px;
                color: ${props => props.theme.colors.dark};
            }

            p {
                margin: 5px 0;
                color: ${props => props.theme.colors.secondary};
            }


            span{
                font-size: 14px;
                font-weight: 400;
                background-color: ${props => props.theme.colors.lightBlue};
                padding: 5px 10px;
                color: ${props => props.theme.colors.strongPrimary};
                border-radius: 50px;
                border: 1px solid ${props => props.theme.colors.primary};
            }

            button {
                width: 100%;
                margin-top: 10px;
                background: transparent;
                color: ${props => props.theme.colors.primary};
                border: none;
                padding: 10px 20px;
                border-radius: 4px;
                cursor: pointer;
                transition: background-color 0.3s;
                border: 1px solid ${props => props.theme.colors.primary};

                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;

                &:hover {
                    background-color: ${props => props.theme.colors.lightBlue};
                }
            }
        }
    }
`

export const EmptyState = styled.div`
    text-align: center;
    padding: 60px 20px;
    background: ${props => props.theme.colors.white};
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    border: 1px solid ${props => props.theme.colors.light};
    max-width: 500px;
    margin: 0 auto;

    h3 {
        font-size: 24px;
        color: ${props => props.theme.colors.dark};
        margin-bottom: 12px;
        font-weight: 600;

        @media (max-width: 480px) {
            font-size: 20px;
        }
    }

    p {
        font-size: 16px;
        color: ${props => props.theme.colors.secondary};
        margin: 0;
        line-height: 1.5;

        @media (max-width: 480px) {
            font-size: 14px;
        }
    }
`