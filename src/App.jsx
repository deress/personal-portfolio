import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavbarComponent";
import Footer from "./components/FooterComponents";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import EducationPage from "./pages/EducationPage";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectPage from "./pages/ProjectPage";

function App() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/personal-portfolio" element={<HomePage />} />
                <Route
                    path="/personal-portfolio/about"
                    element={<AboutPage />}
                />
                <Route
                    path="/personal-portfolio/education"
                    element={<EducationPage />}
                />
                <Route
                    path="/personal-portfolio/experience"
                    element={<ExperiencePage />}
                />
                <Route
                    path="/personal-portfolio/project"
                    element={<ProjectPage />}
                />
            </Routes>

            <Footer />
        </>
    );
}

export default App;
