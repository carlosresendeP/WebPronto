import styled from "styled-components"

export const Container = styled.section`
    width: 100%;
    background: linear-gradient(135deg, 
        ${props => props.theme.colors.primary}, 
        ${props => props.theme.colors.strongPrimary});
    padding: 80px 20px;
    text-align: center;
    margin-top: 80px;

    @media (max-width: 768px) {
        padding: 60px 20px;
        margin-top: 60px;
    }
`

export const CTAContent = styled.div`
    max-width: 800px;
    margin: 0 auto;
`

export const Title = styled.h2`
    font-size: 48px;
    font-weight: 700;
    color: ${props => props.theme.colors.white};
    margin-bottom: 16px;
    line-height: 1.2;

    @media (max-width: 768px) {
        font-size: 36px;
    }

    @media (max-width: 480px) {
        font-size: 28px;
    }
`

export const Subtitle = styled.p`
    font-size: 20px;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 40px;
    line-height: 1.6;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 768px) {
        font-size: 18px;
        margin-bottom: 30px;
    }

    @media (max-width: 480px) {
        font-size: 16px;
    }
`

export const FeaturesRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    margin-bottom: 40px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 20px;
        margin-bottom: 30px;
    }

    @media (max-width: 480px) {
        gap: 16px;
    }
`

export const Feature = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${props => props.theme.colors.white};
`

export const FeatureIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const FeatureText = styled.span`
    font-size: 16px;
    font-weight: 500;

    @media (max-width: 480px) {
        font-size: 15px;
    }
`

export const CTAButton = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.primary};
    padding: 16px 32px;
    border-radius: 50px;
    font-size: 18px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    margin-bottom: 24px;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 25px rgba(0, 0, 0, 0.2);
        background: ${props => props.theme.colors.strongSuccess};
        color: ${props => props.theme.colors.light};
    }

    @media (max-width: 768px) {
        font-size: 16px;
        padding: 14px 28px;
    }

    @media (max-width: 480px) {
        font-size: 15px;
        padding: 12px 24px;
        gap: 8px;
    }
`

export const Guarantee = styled.p`
    font-size: 14px;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 400;

    @media (max-width: 480px) {
        font-size: 13px;
    }
`
