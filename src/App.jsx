import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBarLayoutContainer from "./components/layout/navbar/NavBarLayoutContainer";
import ContextDentistsProvider from './context/ContextUsers'
import FrontPageContainer from "./components/pages/FrontPage/FrontPageContainer";
import AboutMeContainer from "./components/pages/AboutMe/AboutMeContainer";
import SkillsContainer from "./components/pages/Skills/SkillsContainer";
import CatalogueContainer from "./components/pages/Catalogue/CatalogueContainer";
import ContactContainer from "./components/pages/Contact/ContactContainer";
import ExperienceContainer from "./components/pages/Experience/ExperienceContainer";
function App() {
  return (
    <BrowserRouter>
      <ContextDentistsProvider>
        <Routes>
          <Route element={<NavBarLayoutContainer/>}>
            <Route path="/" element={<FrontPageContainer/>} />
            <Route path="/aboutMe" element={<AboutMeContainer/>} />
            <Route path="/experience" element={<ExperienceContainer/>} />
            <Route path="/skills" element={<SkillsContainer/>} />
            <Route path="/catalogue" element={<CatalogueContainer />} />
            <Route path="/contact" element={<ContactContainer />} />
            <Route path="/dentist/:id" element={"Detalle diseños"} />
          </Route>
          <Route path="*" element={<h1>NOT FOUND</h1>} />
        </Routes>
      </ContextDentistsProvider>
    </BrowserRouter>
  );
}

export default App;