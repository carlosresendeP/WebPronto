import styled from "styled-components"

export const Container = styled.section`
    width: 100%;
    margin-top: 80px;
    padding: 20px 20px;
    text-align: center;

    p {
        font-size: 18px;
        color: ${props => props.theme.colors.secondary};
        margin-bottom: 50px;
        font-weight: 400;
    }
`

export const Title = styled.h2`
    font-size: 48px;
    font-weight: 700;
    color: ${props => props.theme.colors.dark};
    margin-bottom: 16px;
    text-align: center;
`

export const StepsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;
    margin-bottom: 60px;
    position: relative;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 30px;
    }

    .arrow {
        position: absolute;
        top: 50%;
        right: -20px;
        transform: translateY(-50%);
        font-size: 24px;
        color: ${props => props.theme.colors.primary};
        font-weight: bold;

        @media (max-width: 768px) {
            display: none;
        }
    }
`

export const StepCard = styled.div`
    flex: 1;
    background: ${props => props.theme.colors.white};
    border-radius: 16px;
    padding: 40px 30px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    border: 1px solid ${props => props.theme.colors.light};
    position: relative;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    z-index: 1;

    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    }

    &:last-child .arrow {
        display: none;
    }
`

export const StepNumber = styled.div`
    width: 40px;
    height: 40px;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 18px;
    margin: 0 auto 20px;
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
`

export const StepIcon = styled.div`
    color: ${props => props.theme.colors.primary};
    margin: 20px auto 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StepContent = styled.div`
    text-align: center;
`

export const StepTitle = styled.h3`
    font-size: 24px;
    font-weight: 600;
    color: ${props => props.theme.colors.dark};
    margin-bottom: 16px;
`

export const StepDescription = styled.p`
    font-size: 16px;
    color: ${props => props.theme.colors.secondary};
    line-height: 1.6;
    margin: 0;
`

export const Guarantee = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.strongPrimary});
    color: ${props => props.theme.colors.white};
    padding: 16px 32px;
    border-radius: 50px;
    font-weight: 600;
    font-size: 18px;
    max-width: fit-content;
    margin: 0 auto;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`
