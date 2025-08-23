import { Button } from "../button"
import { ButtonMenu, Container, GroupLogo, HeaderContainer, HeaderContent, NavHeader } from "./style"
import { Menu } from 'lucide-react'
import { useState } from "react"

export const Header = () =>{
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const ClickButtonMenu = () => {

        setIsMenuOpen(!isMenuOpen);
        console.log("Menu state:", isMenuOpen);

    }

    return(
        <>
            <HeaderContainer>
                <Container>
                    <HeaderContent>
                        <GroupLogo>
                            <h1>WebPronto</h1>
                            <p>Templates de sites</p>
                        </GroupLogo>
                        <NavHeader
                        $isMenuOpen={isMenuOpen}
                        >
                    
                            <a href="#Home">Inicio</a>
                            <a href="#Templates">Modelos</a>
                            <a href="#works">Como Funciona</a>
                            <a href="#testimonials">Depoimentos</a>
                            <a href="#cta"><Button>Fale Comigo</Button></a>
                        </NavHeader>
                        <ButtonMenu 
                        
                        type="button" 
                        onClick={ () => ClickButtonMenu()}> 
                        <Menu/>
                        </ButtonMenu>


                        
                    </HeaderContent>
                </Container>
            </HeaderContainer>
        </>
    )
}