import '../src/root.css'
import AboutOur from './components/aboutour'
import Header from './components/header'
import SectionPrincipal from './components/sectionPrincipal'
import Dark from './components/dark'
import Banner from './components/banner'
import { MenuProvider } from './context/menu'



function App() {

  return (
    <>
      <MenuProvider>
        <div className="grid-to-desk-d">
          <div className="first-container-desk-d">
            <Header />
            <Banner />
          </div>
          <SectionPrincipal />
        </div>
        <AboutOur />
        <Dark />
      </MenuProvider>
    </>
  )
}

export default App;
