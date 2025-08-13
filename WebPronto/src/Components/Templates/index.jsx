import { Card, CardContent, Container, TemplatesButton, Title } from "./style"
import salao from "../../assets/img/salao.png"
import Pizzaria from "../../assets/img/pizzaria.png"
import Academia from "../../assets/img/academia.png"
import arquitetura from "../../assets/img/arquitetura.png"
import {SquareArrowOutUpRight } from "lucide-react"
import { Button } from "../button"


export const Templates = () => {

    //const navigate = useNavigate()



    //templates ficam aqui por enquanto
    //depois serão puxados de uma API ou algo do tipo

    const models = [
        {
            id: 1,
            category: 'Beleza & Estética',
            name: "Template 1",
            description: "Descrição do Template 1",
            image: salao,
        },
        {
            id: 2,
            category: 'Academias',
            name: "Template 2",
            description: "Descrição do Template 2",
            image: Academia
        },
        {
            id: 3,
            category: 'Restaurantes',
            name: "Template 3",
            description: "Descrição do Template 3",
            image: Pizzaria
        },
        {

            id: 4,
            category: 'Serviços',
            name: "Template 4",
            description: "Descrição do Template 4",
            image: arquitetura
        },
    ]

    return(
        <div>
            <Container id="Templates">
                 <Title>Modelos Disponíveis
                    <span>Escolha o modelo que melhor se adapta ao seu tipo de negócio</span>
                 </Title>

                 <Card>
                    <CardContent>
                        {models.map((model) => (
                            <div className="CardContents" key={model.id}>
                                <img src={model.image} alt={model.name} />
                                <div className="CardTexts">
                                    <span>{model.category}</span>
                                    <h3>{model.name}</h3>
                                    <p>{model.description}</p>
                                    <Button >Ver Modelo <SquareArrowOutUpRight /></Button>
                                </div>
                            </div>
                        ))}

                    </CardContent>
                 </Card>
 
                <TemplatesButton to="/templates">
                    Ver Mais Modelos
                </TemplatesButton>

                 
            </Container>
        </div>
    )
}