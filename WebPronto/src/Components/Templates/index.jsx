import { Card, Container, TemplatesButton, TemplatesGrid, Title, FilterSection, FilterRow, FilterButtons, FilterButton } from "./style"
import { useState } from "react"
import {SquareArrowOutUpRight } from "lucide-react"
import { Button } from "../button"
import { CardModel } from "../CardModel/CardModel"

export const Templates = () => {
    const [activeFilter, setActiveFilter] = useState('Todos')

    const categories = [
        'Todos',
        'Beleza & Estética', 
        'Saúde',
        'Restaurantes',
        'Serviços',
        'E-commerce'
    ]

    return(
        <div>
            <Container id="Templates">
                 <Title>Modelos Disponíveis
                    <span>Escolha o modelo que melhor se adapta ao seu tipo de negócio</span>
                 </Title>

                 <FilterSection>
                    <FilterRow>
                        <FilterButtons>
                            {categories.map((category) => (
                                <FilterButton
                                    key={category}
                                    $active={activeFilter === category}
                                    onClick={() => setActiveFilter(category)}
                                >
                                    {category}
                                </FilterButton>
                            ))}
                        </FilterButtons>
                    </FilterRow>
                </FilterSection>

                 <Card>
                    <TemplatesGrid >
                        <CardModel 
                            limit={3} 
                            activeFilter={activeFilter}
                        />
                    </TemplatesGrid>
                 </Card>
 
                <TemplatesButton to="/templates">
                    Ver Mais Modelos
                </TemplatesButton>

            </Container>
        </div>
    )
}