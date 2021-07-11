import '../src/root.css'
import AboutOur from './components/aboutour'
import Banner from './components/banner'
import Header from './components/header'
import SectionPrincipal from './components/sectionPrincipal'
import Dark from './components/dark'

import { MenuProvider } from './context/menu'


function App() {

  return (
    <>
      <MenuProvider>
        <Header />
        <Banner />
        <SectionPrincipal />
        <AboutOur />
        <Dark />
      </MenuProvider>
    </>
  )
}

export default App;
