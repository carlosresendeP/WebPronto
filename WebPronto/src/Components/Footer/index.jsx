import { MessageCircle, Mail, MapPin, Phone } from "lucide-react"
import { 
    FooterContainer,
    FooterContent,
    FooterSection,
    Logo,
    Description,
    ContactInfo,
    ContactItem,
    LinksSection,
    SectionTitle,
    FooterLink,
    ContactSection
} from "./style"

export const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterSection>
                    <Logo>WebPronto</Logo>
                    <Description>
                        Criamos sites profissionais para negócios locais de forma 
                        rápida e acessível. Sua presença digital em até 10 dias!
                    </Description>
                    <ContactInfo>
                        <ContactItem href="tel:+5511999999999">
                            <Phone size={16} />
                            (32) 99828-3189
                        </ContactItem>
                    </ContactInfo>
                </FooterSection>

                <LinksSection>
                    <SectionTitle>Links Rápidos</SectionTitle>
                    <FooterLink href="#Home">Home</FooterLink>
                    <FooterLink href="#Templates">Modelos</FooterLink>
                    <FooterLink href="#works">Como Funciona</FooterLink>
                </LinksSection>

                <ContactSection>
                    <SectionTitle>Contato</SectionTitle>
                    <ContactInfo>
                        <ContactItem href="https://wa.me/5532998283189" target="_blank">
                            <MessageCircle size={16} />
                            WhatsApp


                        </ContactItem>
                        <ContactItem href="mailto:dev.carlosresende@hotmail.com">
                            <Mail size={16} />
                            dev.carlosresende@hotmail.com
                        </ContactItem>
                        <ContactItem>
                            <MapPin size={16} />
                            Juiz de Fora - MG
                        </ContactItem>
                    </ContactInfo>
                </ContactSection>
            </FooterContent>
        </FooterContainer>
    )
}
