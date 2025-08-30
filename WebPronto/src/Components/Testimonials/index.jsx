import { Star } from "lucide-react"
import { 
    Container, 
    Title, 
    Subtitle,
    TestimonialsGrid, 
    TestimonialCard, 
    Stars,
    Quote,
    TestimonialText,
    ClientInfo,
    ClientAvatar,
    ClientDetails,
    ClientName,
    ClientBusiness,
    RatingBadge
} from "./style"

export const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            rating: 5,
            text: "Meu site ficou incrível! Em 5 dias estava online e já comecei a receber pedidos pelo WhatsApp. Recomendo muito o WebPronto!",
            clientName: "Maria",
            business: "Pizzaria Dona Maria",
            avatar: "https://images.unsplash.com/photo-1592621385612-4d7129426394?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXVsaGVyfGVufDB8fDB8fHww"
        },
        {
            id: 2,
            rating: 5,
            text: "Profissionalismo total! O site transmite confiança aos meus pacientes e facilitou muito o agendamento de consultas.",
            clientName: "Carlos Mendes",
            business: "Consultório Dr. Carlos",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face&auto=format"
        },
        {
            id: 3,
            rating: 5,
            text: "O design ficou exatamente como eu sonhava! Elegante, feminino e muito fácil para minhas clientes navegarem.",
            clientName: "Ana Costa",
            business: "Salão Bella Vista",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face&auto=format"
        }
    ]

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <Star 
                key={index} 
                size={16} 
                fill={index < rating ? "#FFD700" : "none"} 
                color={index < rating ? "#FFD700" : "#E5E7EB"} 
            />
        ))
    }

    return (
        <Container id="testimonials">
            <Title>O que nossos clientes dizem</Title>
            <Subtitle>Histórias reais de empreendedores que transformaram seus negócios</Subtitle>
            
            <TestimonialsGrid>
                {testimonials.map((testimonial) => (
                    <TestimonialCard key={testimonial.id}>
                        <Stars>
                            {renderStars(testimonial.rating)}
                        </Stars>
                        
                        <Quote>"</Quote>
                        
                        <TestimonialText>
                            {testimonial.text}
                        </TestimonialText>

                        <ClientInfo>
                            <ClientAvatar 
                                src={testimonial.avatar} 
                                alt={testimonial.clientName}
                            />
                            <ClientDetails>
                                <ClientName>{testimonial.clientName}</ClientName>
                                <ClientBusiness>{testimonial.business}</ClientBusiness>
                            </ClientDetails>
                        </ClientInfo>
                    </TestimonialCard>
                ))}
            </TestimonialsGrid>

            {/* <RatingBadge>
                <div className="stars">
                    {renderStars(5)}
                </div>
                <span>4.9/5 baseado em 200+ avaliações</span>
            </RatingBadge> */}
        </Container>
    )
}
