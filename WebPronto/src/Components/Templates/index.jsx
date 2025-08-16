import { Card, CardContent, Container, TemplatesButton, Title } from "./style"

import {SquareArrowOutUpRight } from "lucide-react"
import { Button } from "../button"
import  models from "../../data/allModels" 


export const Templates = () => {

    //const navigate = useNavigate()

    //templates ficam aqui por enquanto
    //depois serão puxados de uma API ou algo do tipo

    

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