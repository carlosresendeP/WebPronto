import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

`

export const TemplatesContent = styled.div`
    width: 100%;
    max-width: 1280px;

    header{
        margin-bottom: 20px;
        padding: 20px;

        h2 {
            font-size: 32px;
            color: ${props => props.theme.colors.dark};
        }

        span {
            font-size: 16px;
            color: ${props => props.theme.colors.secondary};
            display: block;
            margin-top: 10px;
        }
    }

    div{

        width: 100%;
    }
`

export const Title = styled.h1`
    color: ${props => props.theme.colors.light};
`