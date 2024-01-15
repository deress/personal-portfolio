import { Container, Row, Col } from "react-bootstrap";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Link } from "react-router-dom";

const HomePage = () => {
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
                    <Row className="pt-lg-5">
                        <Col lg="6" className="pt-lg-0 pt-5">
                            <h1>
                                Hi, Folks!<span className="wave">👋</span>
                                <br /> I&apos;m <span>{text}</span>
                                <Cursor />
                            </h1>
                        </Col>
                        <Col lg="6">
                            <div className="text-wrapper">
                                <p>
                                    Welcome to this website — well like the name
                                    right - Idris Muhammad! This website
                                    contains <span>informations</span> about
                                    Idris, about{" "}
                                    <span>
                                        himself, his experiences and projects
                                    </span>
                                    .{" "}
                                </p>
                            </div>
                            <div className="btn-wrapper">
                                <Link
                                    to="personal-portfolio/about"
                                    className="btn-lanjut"
                                >
                                    Lanjutkan
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default HomePage;
