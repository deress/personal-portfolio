import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavbarComponent";
import Footer from "./components/FooterComponents";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import EducationPage from "./pages/EducationPage";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectPage from "./pages/ProjectPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/education" element={<EducationPage />} />
                <Route path="/experience" element={<ExperiencePage />} />
                <Route path="/project" element={<ProjectPage />} />
                <Route path="/project/:slug" element={<ProjectDetailPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;
