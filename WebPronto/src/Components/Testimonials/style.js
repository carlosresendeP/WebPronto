import styled from "styled-components"

export const Container = styled.section`
    width: 100%;
    margin-top: 80px auto;
    padding: 20px;
    text-align: center;
`

export const Title = styled.h2`
    font-size: 48px;
    font-weight: 700;
    color: ${props => props.theme.colors.dark};
    margin-bottom: 16px;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 36px;
    }
`

export const Subtitle = styled.p`
    font-size: 18px;
    color: ${props => props.theme.colors.secondary};
    margin-bottom: 60px;
    font-weight: 400;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 768px) {
        font-size: 16px;
        margin-bottom: 40px;
    }
`

export const TestimonialsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
    margin-bottom: 60px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 20px;
        margin-bottom: 40px;
    }

    @media (max-width: 400px) {
        grid-template-columns: 1fr;
        gap: 15px;
    }
`

export const TestimonialCard = styled.div`
    background: ${props => props.theme.colors.white};
    border-radius: 16px;
    padding: 30px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    border: 1px solid ${props => props.theme.colors.light};
    text-align: left;
    position: relative;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    }

    @media (max-width: 768px) {
        padding: 24px;
    }
`

export const Stars = styled.div`
    display: flex;
    gap: 4px;
    margin-bottom: 16px;
`

export const Quote = styled.div`
    font-size: 60px;
    color: ${props => props.theme.colors.primary};
    line-height: 1;
    margin-bottom: 16px;
    font-family: Georgia, serif;
    opacity: 0.3;
    position: absolute;
    top: 20px;
    right: 30px;

    @media (max-width: 768px) {
        font-size: 40px;
        top: 15px;
        right: 20px;
    }
`

export const TestimonialText = styled.p`
    font-size: 16px;
    line-height: 1.6;
    color: ${props => props.theme.colors.dark};
    margin-bottom: 24px;
    font-style: italic;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
        font-size: 15px;
        margin-bottom: 20px;
    }
`

export const ClientInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`

export const ClientAvatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid ${props => props.theme.colors.light};

    @media (max-width: 768px) {
        width: 40px;
        height: 40px;
    }
`

export const ClientDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const ClientName = styled.h4`
    font-size: 16px;
    font-weight: 600;
    color: ${props => props.theme.colors.dark};
    margin-bottom: 2px;

    @media (max-width: 768px) {
        font-size: 15px;
    }
`

export const ClientBusiness = styled.span`
    font-size: 14px;
    color: ${props => props.theme.colors.primary};
    font-weight: 500;

    @media (max-width: 768px) {
        font-size: 13px;
    }
`

export const RatingBadge = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    background: linear-gradient(135deg, ${props => props.theme.colors.success}, ${props => props.theme.colors.strongSuccess});
    color: ${props => props.theme.colors.white};
    padding: 16px 32px;
    border-radius: 50px;
    font-weight: 600;
    font-size: 16px;
    max-width: fit-content;
    margin: 0 auto;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);

    .stars {
        display: flex;
        gap: 4px;
    }

    @media (max-width: 768px) {
        font-size: 14px;
        padding: 12px 24px;
        gap: 8px;
    }
`
