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
import { Container } from "@mui/material";


import NavCategoryContainer from "./components/layout/NavCategory/NavCategoryContainer";

function App() {
  return (


   <Container sx={{backgroundColor: "#f0efe0"}} >

  <BrowserRouter >
      <ContextDentistsProvider>
        <Routes>
          <Route element={<NavBarLayoutContainer/>}>
            <Route path="/" element={<FrontPageContainer/>} />
            <Route path="/aboutMe" element={<AboutMeContainer/>} />
            <Route path="/experience" element={<ExperienceContainer/>} />
            <Route path="/skills" element={<SkillsContainer/>} />
            <Route element={<NavCategoryContainer/>}>
              <Route path="/catalogue" element={<CatalogueContainer />} />
            </Route>
            
            <Route path="/contact" element={<ContactContainer />} />
            <Route path="/dentist/:id" element={"Detalle diseños"} />
          </Route>
          <Route path="*" element={<h1>NOT FOUND</h1>} />
        </Routes>
      </ContextDentistsProvider>
    </BrowserRouter> 
    
    </Container>
  );
}

export default App;
