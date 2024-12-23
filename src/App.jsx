import "./App.scss"
import HeaderOne from './Components/Header/HeaderOne/HeaderOne'
import HeaderTwo from './Components/Header/HeaderTwo/HeaderTwo'
import SectionOne from './Components/Main/SectionOne/SectionOne'
import SectionTwo from './Components/Main/SectionTwo/SectionTwo'
import SectionThree from './Components/Main/sectionThree/SectionThree'
import SectionFour from './Components/Main/SectionFour/SectionFour'
import SectionFive from './Components/Main/SectionFive/SectionFive'
import SectionSex from './Components/Main/SectionSix/SectionSix'
import SectionSeven from './Components/Main/SectionSeven/SectionSeven'
import SectionEight from './Components/Main/SectionEight/SectionEight'
import SectionNine from './Components/Main/SectionNine/SectionNine'
import FooterOne from './Components/Footer/FooterOne/FooterOne'
import FooterTwo from './Components/Footer/FooterTwo/FooterTwo'

const App = () => {
  return (
    <>
    <header>
      <HeaderOne/>
      <HeaderTwo/>
    </header>

    <main>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
      <SectionSex/>
      <SectionSeven/>
      <SectionEight/>
      <SectionNine/>
    </main>

    <footer>
      <FooterOne/>  
      <FooterTwo/>    
    </footer>
    </>
  )
}

export default App
