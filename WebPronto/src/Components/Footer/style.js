import styled from "styled-components"

export const FooterContainer = styled.footer`
    background: #1a1a1a;
    color: ${props => props.theme.colors.white};
    padding: 60px 20px 30px;
`

export const FooterContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 40px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 30px;
        text-align: center;
    }
`

export const FooterSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const Logo = styled.h3`
    font-size: 28px;
    font-weight: 700;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 8px;

    @media (max-width: 768px) {
        font-size: 24px;
    }
`

export const Description = styled.p`
    font-size: 16px;
    line-height: 1.6;
    color: #b3b3b3;
    max-width: 300px;

    @media (max-width: 768px) {
        max-width: none;
        font-size: 15px;
    }
`

export const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;

    @media (max-width: 768px) {
        align-items: center;
    }
`

export const ContactItem = styled.a`
    display: flex;
    align-items: center;
    gap: 8px;
    color: #b3b3b3;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.3s ease;

    &:hover {
        color: ${props => props.theme.colors.primary};
    }

    @media (max-width: 768px) {
        justify-content: center;
    }
`

export const LinksSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (max-width: 768px) {
        align-items: center;
    }
`

export const SectionTitle = styled.h4`
    font-size: 18px;
    font-weight: 600;
    color: ${props => props.theme.colors.white};
    margin-bottom: 8px;

    @media (max-width: 768px) {
        font-size: 16px;
    }
`

export const FooterLink = styled.a`
    color: #b3b3b3;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.3s ease;

    &:hover {
        color: ${props => props.theme.colors.primary};
    }
`

export const ContactSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (max-width: 768px) {
        align-items: center;
    }
`
