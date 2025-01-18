 
import './App.css'
import Header from './components/Header/Header'
import HomeSection from './components/HomeSection/HomeSection'
import BeneficiosSection from './components/BeneficiosSection/BeneficiosSection'
import PlanosSection from './components/PlanosSection/PlanosSection'
import SobreSection from './components/SobreSection/SobreSection'
import DepoimentosSection from './components/DepoimentosSection/DepoimentosSection'
import ContatoSection from './components/ContatoSection/ContatoSection'
import Footer from './components/Footer/Footer'

function App() { 

  return (
    <>
    <Header/>
     <main>
      <HomeSection/>
      <BeneficiosSection/>
      <PlanosSection/>
      <SobreSection/>
      <DepoimentosSection/>
      <ContatoSection/>
     </main>
     <Footer/>
    </>
  )
}

export default App
