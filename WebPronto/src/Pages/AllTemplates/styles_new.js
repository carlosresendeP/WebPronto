import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    background: linear-gradient(135deg, 
        ${props => props.theme.colors.light} 0%, 
        rgba(255,255,255,0.95) 50%,
        ${props => props.theme.colors.white} 100%);
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 100%;
        background: url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23f8fafc" fill-opacity="0.4"><circle cx="30" cy="30" r="1"/></g></svg>') repeat;
        pointer-events: none;
        z-index: 0;
    }
`

export const Header = styled.header`
    background: ${props => props.theme.colors.white};
    backdrop-filter: blur(10px);
    padding: 30px 20px 50px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
    position: relative;
    z-index: 2;
    border-bottom: 1px solid ${props => props.theme.colors.light};

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, 
            ${props => props.theme.colors.primary}, 
            ${props => props.theme.colors.strongPrimary},
            ${props => props.theme.colors.info});
    }

    @media (max-width: 768px) {
        padding: 20px 20px 40px;
    }
`

export const BackButton = styled.button`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid ${props => props.theme.colors.light};
    color: ${props => props.theme.colors.secondary};
    font-size: 14px;
    cursor: pointer;
    margin-bottom: 30px;
    padding: 10px 16px;
    border-radius: 50px;
    transition: all 0.3s ease;
    text-decoration: none;
    font-weight: 500;
    backdrop-filter: blur(10px);

    &:hover {
        background: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.white};
        border-color: ${props => props.theme.colors.primary};
        transform: translateX(-4px);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 768px) {
        margin-bottom: 20px;
        font-size: 13px;
        padding: 8px 14px;
    }
`

export const HeaderContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 40px;

    @media (max-width: 768px) {
        margin-bottom: 30px;
    }
`

export const Title = styled.h1`
    font-size: 64px;
    font-weight: 800;
    background: linear-gradient(to right,
        ${props => props.theme.colors.strongPrimary}, 
        ${props => props.theme.colors.info});
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 20px;
    line-height: 1.1;
    letter-spacing: -1px;

    @media (max-width: 768px) {
        font-size: 48px;
        letter-spacing: -0.5px;
    }

    @media (max-width: 480px) {
        font-size: 36px;
        letter-spacing: 0;
    }
`

export const Subtitle = styled.p`
    font-size: 20px;
    color: ${props => props.theme.colors.secondary};
    line-height: 1.7;
    max-width: 700px;
    margin: 0 auto 40px;
    font-weight: 400;

    @media (max-width: 768px) {
        font-size: 18px;
        margin-bottom: 30px;
    }

    @media (max-width: 480px) {
        font-size: 16px;
    }
`

export const StatsRow = styled.div`
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-bottom: 40px;

    @media (max-width: 768px) {
        gap: 20px;
        margin-bottom: 30px;
    }

    @media (max-width: 480px) {
        flex-direction: column;
        align-items: center;
        gap: 16px;
    }
`

export const StatCard = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    padding: 16px 24px;
    border-radius: 16px;
    border: 1px solid ${props => props.theme.colors.light};
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
    }

    .icon {
        color: ${props => props.theme.colors.primary};
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        background: linear-gradient(135deg, 
            ${props => props.theme.colors.primary}15, 
            ${props => props.theme.colors.strongPrimary}15);
        border-radius: 12px;
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .number {
        font-size: 24px;
        font-weight: 700;
        color: ${props => props.theme.colors.dark};
        line-height: 1;
    }

    .label {
        font-size: 12px;
        color: ${props => props.theme.colors.secondary};
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    @media (max-width: 768px) {
        padding: 12px 18px;
        gap: 10px;

        .icon {
            width: 35px;
            height: 35px;
        }

        .number {
            font-size: 20px;
        }

        .label {
            font-size: 11px;
        }
    }
`

export const FilterSection = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media (max-width: 768px) {
        gap: 20px;
    }
`

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    border: 2px solid ${props => props.theme.colors.light};
    border-radius: 16px;
    padding: 16px 20px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    transition: all 0.3s ease;

    &:focus-within {
        border-color: ${props => props.theme.colors.primary};
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        transform: translateY(-2px);
    }

    svg {
        color: ${props => props.theme.colors.secondary};
        flex-shrink: 0;
    }

    @media (max-width: 768px) {
        max-width: 100%;
        padding: 14px 18px;
    }
`

export const SearchInput = styled.input`
    flex: 1;
    border: none;
    outline: none;
    font-size: 16px;
    color: ${props => props.theme.colors.dark};
    background: transparent;
    font-weight: 500;

    &::placeholder {
        color: ${props => props.theme.colors.secondary};
        font-weight: 400;
    }

    @media (max-width: 480px) {
        font-size: 15px;
    }
`

export const FilterRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    @media (max-width: 968px) {
        flex-direction: column;
        gap: 16px;
    }
`

export const FilterButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    flex-wrap: wrap;

    span {
        font-size: 14px;
        color: ${props => props.theme.colors.secondary};
        font-weight: 600;
        white-space: nowrap;
    }

    svg {
        color: ${props => props.theme.colors.secondary};
    }

    @media (max-width: 768px) {
        gap: 8px;
        
        span {
            font-size: 13px;
        }
    }

    @media (max-width: 480px) {
        span {
            display: none;
        }
        svg {
            display: none;
        }
    }
`

export const FilterButton = styled.button`
    padding: 10px 18px;
    border: 2px solid ${props => props.$active ? props.theme.colors.primary : 'transparent'};
    background: ${props => props.$active
        ? `linear-gradient(135deg, ${props.theme.colors.primary}, ${props.theme.colors.strongPrimary})`
        : 'rgba(255, 255, 255, 0.8)'};
    color: ${props => props.$active ? props.theme.colors.white : props.theme.colors.secondary};
    border-radius: 50px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    white-space: nowrap;

    &:hover {
        background: ${props => props.$active
        ? `linear-gradient(135deg, ${props.theme.colors.strongPrimary}, ${props.theme.colors.primary})`
        : `linear-gradient(135deg, ${props.theme.colors.primary}20, ${props.theme.colors.strongPrimary}20)`};
        border-color: ${props => props.theme.colors.primary};
        color: ${props => props.$active ? props.theme.colors.white : props.theme.colors.primary};
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 480px) {
        padding: 8px 14px;
        font-size: 13px;
    }
`

export const ViewToggle = styled.div`
    display: flex;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    border: 1px solid ${props => props.theme.colors.light};
    border-radius: 12px;
    padding: 4px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`

export const ViewButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border: none;
    background: ${props => props.$active ? props.theme.colors.primary : 'transparent'};
    color: ${props => props.$active ? props.theme.colors.white : props.theme.colors.secondary};
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background: ${props => props.$active ? props.theme.colors.strongPrimary : props.theme.colors.light};
        color: ${props => props.$active ? props.theme.colors.white : props.theme.colors.primary};
    }

    @media (max-width: 480px) {
        width: 36px;
        height: 36px;
    }
`

export const ResultsInfo = styled.div`
    text-align: center;
    font-size: 14px;
    color: ${props => props.theme.colors.secondary};
    font-weight: 500;
    padding: 12px 20px;
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(10px);
    border-radius: 50px;
    border: 1px solid ${props => props.theme.colors.light};
    max-width: fit-content;
    margin: 0 auto;

    @media (max-width: 480px) {
        font-size: 13px;
        padding: 10px 16px;
    }
`

export const TemplatesGrid = styled.section`
    max-width: 1200px;
    margin: 0 auto;
    padding: 60px 20px 100px;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
        padding: 40px 20px 80px;
    }

    @media (max-width: 480px) {
        padding: 30px 15px 60px;
    }
`
