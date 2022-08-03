import React from "react";
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Sobre from './components/sobre/Sobre'
import Experiencia from './components/experiencia/Experiencia'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Contatos from './components/contatos/Contatos'
import Footer from './components/footer/Footer'

const App = () =>{
    return (
        <>
            <Header/>

            <Nav/>

            <Sobre/>

            <Experiencia/>

            <Services/>

            <Portfolio/>

            <Contatos/>

            <Footer/>
        </>
    )
} 

export default App