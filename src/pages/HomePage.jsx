import { Container, Row, Col } from "react-bootstrap";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import { highlights } from "../data";
import { useLang } from "../i18n/context";

const welcome = {
    en: (
        <>
            Welcome to this website — well like the name right - Idris
            Muhammad! This website contains <span>information</span> about
            Idris, about <span>myself, my experiences and projects</span>.
        </>
    ),
    id: (
        <>
            Selamat datang di website pribadi saya! Di sini kamu bisa
            menemukan <span>informasi</span> tentang saya, Idris Muhammad,
            termasuk <span>pengalaman dan project-project saya</span>.
        </>
    ),
};

const HomePage = () => {
    const { t, tr } = useLang();
    const [text] = useTypewriter({
        words: [
            "Web Developer",
            "Android Developer",
            "Software Engineer | Android",
        ],
        loop: 0,
    });

    return (
        <div className="home-page">
            <div className="home w-100 min-vh-100 d-flex align-items-center">
                <Container>
                    <Row className="pt-lg-5 hero-row">
                        <Col lg="6" className="pt-lg-0 pt-5" data-aos="fade-up">
                            <h1>
                                {t("greeting")}
                                <span className="wave">👋</span>
                                <br /> {t("iAm")} <span>{text}</span>
                                <Cursor />
                            </h1>
                        </Col>
                        <Col lg="6">
                            <div
                                className="text-wrapper"
                                data-aos="fade-up"
                                data-aos-delay="150"
                            >
                                <p>{tr(welcome)}</p>
                            </div>
                            <div
                                className="btn-wrapper"
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                <Link
                                    to="/about"
                                    className="btn-lanjut"
                                >
                                    {t("continue")}
                                </Link>
                            </div>
                        </Col>
                        <div className="highlight-wrapper">
                            {highlights.map((h, i) => (
                                <div
                                    key={h.id}
                                    data-aos="fade-up"
                                    data-aos-delay={i * 100}
                                >
                                    <Link to={h.path} className="highlight-item">
                                        <h3>{h.value}</h3>
                                        <p>{tr(h.label)}</p>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default HomePage;
