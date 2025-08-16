import { SquareArrowOutUpRight } from "lucide-react"
import { useMemo } from "react"
import models from "../../data/allModels"
import { Button } from "../button"
import { Card, Container, EmptyState } from "./style"

export const CardModel = ({ activeFilter, searchTerm, viewMode }) => {

    console.log(activeFilter, searchTerm, viewMode)

    // Filtrar modelos baseado no filtro ativo e termo de busca
    const filteredModels = useMemo(() => {
        let filtered = models;

        // Filtro por categoria
        if (activeFilter && activeFilter !== 'Todos') {
            filtered = filtered.filter(model => 
                model.category === activeFilter
            );
        }

        // Filtro por termo de busca
        if (searchTerm && searchTerm.trim() !== '') {
            const searchLower = searchTerm.toLowerCase();
            filtered = filtered.filter(model =>
                model.name.toLowerCase().includes(searchLower) ||
                model.category.toLowerCase().includes(searchLower) ||
                (model.description && model.description.toLowerCase().includes(searchLower))
            );
        }

        return filtered;
    }, [activeFilter, searchTerm]);

    // Exibir mensagem quando não há resultados
    if (filteredModels.length === 0) {
        return (
            <Container>
                <EmptyState>
                    <h3>Nenhum modelo encontrado</h3>
                    <p>
                        {searchTerm 
                            ? `Não encontramos modelos para "${searchTerm}". Tente outro termo de busca.`
                            : `Não há modelos disponíveis para a categoria "${activeFilter}".`
                        }
                    </p>
                </EmptyState>
            </Container>
        );
    }

    return (
        <Container>
            <Card $viewMode={viewMode}>
                {filteredModels.map((model) => (
                <div className="CardContents" 
                key={model.id}
                >
                    <img src={model.image} alt={model.name} />
                    <div className="CardTexts">
                        <span>{model.category}</span>
                        <h3>{model.name}</h3>
                        <p>{model.description}</p>
                        <Button>Ver Modelo <SquareArrowOutUpRight /></Button>
                    </div>
                </div>
                ))}
            </Card>
        </Container>
    )
}