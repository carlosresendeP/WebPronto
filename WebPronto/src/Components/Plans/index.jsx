import { Button } from "../button"
import { Container, PlansContainer, PlansGrid, PlansCard, PlansTitle, PlanPrice, PlanFeatures, PlanFeature, PopularBadge } from "./style"
import { Check } from "lucide-react"

export const Plans = () => {
    const plans = [
        {
            id: 1,
            name: "Básico",
            price: "457",
            period: "única",
            description: "Perfeito para pequenos negócios",
            popular: false,
            features: [
                "Site responsivo",
                "Até 2 páginas incluídas",
                "Integração redes sociais",
                "Otimização básica SEO",
                "Suporte por email",
                "1 Manutenção gratuita"
            ]
        },
        {
            id: 2,
            name: "Profissional",
            price: "997",
            period: "única",
            description: "Ideal para empresas em crescimento",
            popular: true,
            features: [
                "Site responsivo",
                "Até 4 Páginas incluídas",
                "Formulário de contato",
                "SEO avançado",
                "Hospedagem por 1 ano",
                "Integração redes sociais",
                "Suporte prioritário",
                "Manutenção gratuita por 3 meses"
            ]
        },
        {
            id: 3,
            name: "Premium",
            price: "2197",
            period: "única",
            description: "Para empresas que querem o melhor",
            popular: false,
            features: [
                "Site responsivo",
                "Até 10 Páginas incluídas",
                "Formulário de contato",
                "SEO avançado",
                "Hospedagem por 2 anos",
                "Integração redes sociais",
                "Analytics avançado",
                "Suporte prioritário",
                "Manutenção gratuita por 6 meses",
                "Sistema de agendamento"
            ]
        }
    ]

    return (
        <PlansContainer id="plans">
            <Container>
                <PlansTitle>
                    Escolha o Plano Ideal
                    <span>Preços justos para sites profissionais</span>
                </PlansTitle>
                
                <PlansGrid>
                    {plans.map((plan) => (
                        <PlansCard key={plan.id} $popular={plan.popular}>
                            {plan.popular && <PopularBadge>Mais Popular</PopularBadge>}
                            
                            <h3>{plan.name}</h3>
                            <PlanPrice>
                                R$ {plan.price}
                                <span>pagamento {plan.period}</span>
                            </PlanPrice>
                            <p>{plan.description}</p>
                            
                            <PlanFeatures>
                                {plan.features.map((feature, index) => (
                                    <PlanFeature key={index}>
                                        <Check size={16} />
                                        {feature}
                                    </PlanFeature>
                                ))}
                            </PlanFeatures>
                            
                            <Button onClick={() => {
                                const ctaSection = document.getElementById('cta');
                                if (ctaSection) {
                                    ctaSection.scrollIntoView({ 
                                        behavior: 'smooth',
                                        block: 'center'
                                    });
                                }
                            }}>
                                Escolher Plano
                            </Button>
                        </PlansCard>
                    ))}
                </PlansGrid>
            </Container>
        </PlansContainer>
    )
}
