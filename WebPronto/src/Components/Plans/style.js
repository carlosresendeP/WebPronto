import styled from "styled-components";

export const PlansContainer = styled.section`
    width: 100%;
    padding: 80px 0;
    background: linear-gradient(135deg, 
        ${props => props.theme.colors.light} 0%, 
        #f8f9fa 100%);
`

export const Container = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 20px;
    
    @media (max-width: 768px) {
        padding: 0 16px;
    }
`

export const PlansTitle = styled.div`
    text-align: center;
    margin-bottom: 60px;
    
    font-size: 42px;
    font-weight: 700;
    color: ${props => props.theme.colors.dark};
    margin-bottom: 16px;
    
    span {
        display: block;
        font-size: 18px;
        font-weight: 400;
        color: ${props => props.theme.colors.secondary};
        margin-top: 12px;
    }
    
    @media (max-width: 768px) {
        font-size: 32px;
        margin-bottom: 40px;
        
        span {
            font-size: 16px;
        }
    }
`

export const PlansGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px;
    
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 20px;
    }
`

export const PlansCard = styled.div`
    background: ${props => props.theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 12px;
    padding: 40px 30px;
    box-shadow: ${props => props.$popular
        ? '0 20px 40px rgba(0, 0, 0, 0.15)'
        : '0 10px 30px rgba(0, 0, 0, 0.1)'};
    border: ${props => props.$popular
        ? `3px solid ${props.theme.colors.primary}`
        : '1px solid #e9ecef'};
    position: relative;
    transition: all 0.3s ease;
    transform: ${props => props.$popular ? 'scale(1.05)' : 'scale(1)'};
    
    &:hover {
        transform: ${props => props.$popular ? 'scale(1.07)' : 'scale(1.02)'};
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    }
    
    h3 {
        font-size: 24px;
        font-weight: 700;
        color: ${props => props.theme.colors.dark};
        margin-bottom: 12px;
        text-align: center;
    }
    
    p {
        font-size: 14px;
        color: ${props => props.theme.colors.secondary};
        text-align: center;
        margin-bottom: 30px;
    }
    
    button {
        width: 100%;
        margin-top: 30px;
        background: ${props => props.$popular
        ? `linear-gradient(135deg, ${props.theme.colors.primary}, ${props.theme.colors.strongPrimary})`
        : `linear-gradient(135deg, ${props.theme.colors.secondary}, ${props.theme.colors.dark})`};
        
        &:hover {
            background: ${props => props.$popular
        ? `linear-gradient(135deg, ${props.theme.colors.strongPrimary}, ${props.theme.colors.primary})`
        : `linear-gradient(135deg, ${props.theme.colors.primary}, ${props.theme.colors.strongPrimary})`};
        }
    }
    
    @media (max-width: 768px) {
        padding: 30px 20px;
        transform: scale(1) !important;
        
        &:hover {
            transform: scale(1.02) !important;
        }
    }
`

export const PopularBadge = styled.div`
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.strongPrimary});
    color: ${props => props.theme.colors.white};
    padding: 8px 20px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
`

export const PlanPrice = styled.div`
    text-align: center;
    margin-bottom: 20px;
    
    font-size: 48px;
    font-weight: 700;
    color: ${props => props.theme.colors.primary};
    
    span {
        display: block;
        font-size: 14px;
        font-weight: 400;
        color: ${props => props.theme.colors.secondary};
        margin-top: 4px;
    }
    
    @media (max-width: 768px) {
        font-size: 40px;
    }
`

export const PlanFeatures = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`

export const PlanFeature = styled.li`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 0;
    font-size: 14px;
    color: ${props => props.theme.colors.dark};
    
    svg {
        color: ${props => props.theme.colors.success};
        flex-shrink: 0;
    }
`
