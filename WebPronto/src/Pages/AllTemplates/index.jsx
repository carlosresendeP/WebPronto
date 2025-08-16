import { ArrowLeft, Filter, Search, Grid, List, Star, Clock, Eye } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router"
import { CardModel } from "../../Components/CardModel/CardModel"
import { 
    Container, 
    Header,
    BackButton,
    HeaderContent,
    Title,
    Subtitle,
    StatsRow,
    StatCard,
    FilterSection,
    SearchContainer,
    SearchInput,
    FilterRow,
    FilterButtons,
    FilterButton,
    ViewToggle,
    ViewButton,
    ResultsInfo,
    TemplatesGrid
} from "./styles_new"
import { Footer } from "../../Components/Footer"

export const AllTemplates = () => {
    const [activeFilter, setActiveFilter] = useState('Todos')
    const [searchTerm, setSearchTerm] = useState('')
    const [viewMode, setViewMode] = useState('grid')

    const categories = [
        'Todos',
        'Beleza & Estética', 
        'Saúde',
        'Restaurantes',
        'Serviços',
        'E-commerce'
    ]

    // const stats = [
    //     { icon: <Eye size={20} />, number: "50+", label: "Templates Disponíveis" },
    //     { icon: <Star size={20} />, number: "4.9", label: "Avaliação Média" },
    //     { icon: <Clock size={20} />, number: "10", label: "Dias para Entrega" }
    // ]

    return(
        <Container>
            <Header>
                <BackButton as={Link} to="/">
                    <ArrowLeft size={18} />
                    Voltar para Home
                </BackButton>
                
                <HeaderContent>
                    <Title>Galeria de Templates Profissionais</Title>
                    <Subtitle>
                        Explore nossa coleção completa de templates cuidadosamente projetados 
                        para diferentes tipos de negócios. Cada modelo é 100% responsivo, 
                        otimizado para SEO e focado em conversão.
                    </Subtitle>

                    {/* <StatsRow>
                        {stats.map((stat, index) => (
                            <StatCard key={index}>
                                <div className="icon">{stat.icon}</div>
                                <div className="content">
                                    <span className="number">{stat.number}</span>
                                    <span className="label">{stat.label}</span>
                                </div>
                            </StatCard>
                        ))}
                    </StatsRow> */}
                </HeaderContent>

                <FilterSection>
                    <SearchContainer>
                        <Search size={20} />
                        <SearchInput 
                            type="text"
                            placeholder="Buscar templates por nome, categoria ou palavras-chave..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </SearchContainer>

                    <FilterRow>
                        <FilterButtons>
                            <Filter size={16} />
                            <span>Filtrar por categoria:</span>
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

                        <ViewToggle>
                            <ViewButton 
                                $active={viewMode === 'grid'}
                                onClick={() => setViewMode('grid')}
                                title="Visualização em grade"
                            >
                                <Grid size={16} />
                            </ViewButton>
                            <ViewButton 
                                $active={viewMode === 'list'}
                                onClick={() => setViewMode('list')}
                                title="Visualização em lista"
                            >
                                <List size={16} />
                            </ViewButton>
                        </ViewToggle>
                    </FilterRow>

                    <ResultsInfo>
                        {activeFilter !== 'Todos' 
                            ? `Exibindo templates da categoria "${activeFilter}"` 
                            : 'Exibindo todos os templates disponíveis'
                        }
                    </ResultsInfo>
                </FilterSection>
            </Header>

            <TemplatesGrid $viewMode={viewMode}>
                <CardModel 
                    activeFilter={activeFilter}
                    searchTerm={searchTerm}
                    viewMode={viewMode}
                />
            </TemplatesGrid>


            <Footer></Footer>
        </Container>
    )
}