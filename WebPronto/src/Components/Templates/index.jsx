import { Card, Container, TemplatesButton, TemplatesGrid, Title } from "./style"

import {SquareArrowOutUpRight } from "lucide-react"
import { Button } from "../button"
import { CardModel } from "../CardModel/CardModel"



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
                    <TemplatesGrid >
                        <CardModel limit={3} />
                    </TemplatesGrid>
                 </Card>
 
                <TemplatesButton to="/templates">
                    Ver Mais Modelos
                </TemplatesButton>

            </Container>
        </div>
    )
}