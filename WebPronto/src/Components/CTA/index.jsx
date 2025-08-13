import { Clock, CheckCircle, MessageCircle } from "lucide-react"
import { 
    Container, 
    CTAContent,
    Title, 
    Subtitle,
    FeaturesRow,
    Feature,
    FeatureIcon,
    FeatureText,
    CTAButton,
    Guarantee
} from "./style"

export const CTA = () => {
    return (
        <Container id="cta">
            <CTAContent>
                <Title>Quer ver seu site pronto ainda hoje?</Title>
                <Subtitle>
                    Não perca mais tempo sem presença digital. Vamos conversar pelo 
                    WhatsApp e começar agora mesmo!
                </Subtitle>
                
                <FeaturesRow>
                    <Feature>
                        <FeatureIcon>
                            <Clock size={20} />
                        </FeatureIcon>
                        <FeatureText>Entrega em <span className="highlight">10 dias</span></FeatureText>
                    </Feature>
                    
                    <Feature>
                        <FeatureIcon>
                            <CheckCircle size={20} />
                        </FeatureIcon>
                        <FeatureText>100% <span className="highlight">Responsivo</span></FeatureText>
                    </Feature>
                    
                    <Feature>
                        <FeatureIcon>
                            <MessageCircle size={20} />
                        </FeatureIcon>
                        <FeatureText>Suporte via <span className="highlight">WhatsApp</span></FeatureText>
                    </Feature>
                </FeaturesRow>

                <CTAButton href="https://wa.me/5532998283189" target="_blank">
                    <MessageCircle size={20} />
                    Fale comigo no WhatsApp
                </CTAButton>

                <Guarantee>
                    Resposta garantida em até 2 horas • Sem compromisso
                </Guarantee>
            </CTAContent>
        </Container>
    )
}
