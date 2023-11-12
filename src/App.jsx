import Awards from "./assets/components/Awards/index.jsx"
import Header from "./assets/components/Header/index.jsx"
import Interests from "./assets/components/Interests/index.jsx"
import Navigation from "./assets/components/Navigation/index.jsx"
import PageContent from "./assets/components/PageContent/index.jsx"
import Skills from "./assets/components/Skills/index.jsx"
import "./assets/css/styles.css"
import "./assets/img/profile.jpg"
import "./assets/js/scripts.js"
function App() {
  
  return (
 <div>
  <Header />
  {/* Navigation*/}
    <Navigation />
  {/* Page Content*/}
    <PageContent />
  {/* Skills*/}
    <Skills />
  {/* Interests*/}
    <Interests />
  {/* Awards*/}
  <Awards />
  {/* Bootstrap core JS*/}
  {/* Core theme JS*/}
</div>


  )
}

export default App
