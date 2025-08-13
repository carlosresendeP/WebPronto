import { Search, Send, Zap } from "lucide-react"
import { 
    Container, 
    Title, 
    StepsContainer, 
    StepCard, 
    StepNumber, 
    StepIcon, 
    StepContent, 
    StepTitle, 
    StepDescription,
    Guarantee
} from "./style"

export const HowItWorks = () => {
    const steps = [
        {
            id: 1,
            icon: <Search size={40} />,
            title: "Escolha um modelo",
            description: "Navegue pela nossa galeria e selecione o template que mais combina com seu negócio."
        },
        {
            id: 2,
            icon: <Send size={40} />,
            title: "Envie seus dados",
            description: "Forneça o nome da empresa, logo, cores desejadas e conteúdo através do WhatsApp."
        },
        {
            id: 3,
            icon: <Zap size={40} />,
            title: "Receba seu site",
            description: "Em até 3 dias úteis, você recebe seu site personalizado e pronto para usar."
        }
    ]

    return (
        <Container id="works">
            <Title>Como Funciona</Title>
            <p>Processo simples e rápido para ter seu site profissional online</p>
            
            <StepsContainer>
                {steps.map((step, index) => (
                    <StepCard key={step.id}>
                        <StepNumber>{step.id}</StepNumber>
                        <StepIcon>{step.icon}</StepIcon>
                        <StepContent>
                            <StepTitle>{step.title}</StepTitle>
                            <StepDescription>{step.description}</StepDescription>
                        </StepContent>
                        {index < steps.length - 1 && <div className="arrow">→</div>}
                    </StepCard>
                ))}
            </StepsContainer>

            <Guarantee>
                <Zap size={20} />
                Entrega garantida em até 3 dias úteis!
            </Guarantee>
        </Container>
    )
}
