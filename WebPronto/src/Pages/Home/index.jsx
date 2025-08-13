
import { Button } from "../../Components/button"
import { CTA } from "../../Components/CTA"
import { Footer } from "../../Components/Footer"
import { Header } from "../../Components/header"
import { HowItWorks } from "../../Components/HowItWorks"
import { Templates } from "../../Components/Templates"
import { Testimonials } from "../../Components/Testimonials"
import { Container, ContainerHome, GroupButton, GroupCards, HomeButton, HomeContent, MainContainer } from "./styles"

export const Home = () => {

    return(
        <div>
            <MainContainer>
                <Header ></Header>
                <Container id='Home'>
                    <ContainerHome>
                        <HomeContent>
                            <h2>Sites Prontos Para seu <span>Négocio Local</span></h2>
                            <p>Escolha seu modelo, envie os dados e receba seu site em até <span>10 dias</span></p>

                            <GroupButton>
                                <HomeButton>Ver Modelos Prontos</HomeButton>
                                <HomeButton>Como Funciona</HomeButton>
                            </GroupButton>

                            <GroupCards>
                                <div>
                                    <p>+10 <span>modelos prontos</span></p>
                                </div>
                                <div>
                                    <p>10 dias <span>para receber o site</span></p>
                                </div>
                                <div>
                                    <p>Suporte <span>Via WhatsApp</span></p>
                                </div>
                            </GroupCards>
                        </HomeContent>
                    </ContainerHome>


                    <Templates>
        
                    </Templates>

                    <HowItWorks />

                    <Testimonials />
                </Container>

                <CTA />

                <Footer />
            </MainContainer>

        </div>
    )
}