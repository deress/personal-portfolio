import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterComponents = () => {
    return (
        <div className="footer pt-5 pb-3">
            <Container>
                <Row className="d-flex justify-content-between">
                    <Col lg="5">
                        <h3 className="fw-bold">Idris Muhammad</h3>
                        <div className="no mb-1 mt-4">
                            <Link className="text-decoration-none">
                                <i className="fa-brands fa-whatsapp"></i>
                                <p className="m-0">+62 857-4624-9265</p>
                            </Link>
                        </div>
                        <div className="email">
                            <Link className="text-decoration-none">
                                <i className="fa-regular fa-envelope"></i>
                                <p className="m-0">
                                    idrismuhammad257@gmail.com
                                </p>
                            </Link>
                        </div>
                    </Col>
                    <Col className="d-flex flex-column col-lg-3 col mt-lg-0 mt-5">
                        <h5>Navigate</h5>
                        <Link to="" className="text-decoration-none">
                            Home
                        </Link>
                        <Link to="about" className="text-decoration-none">
                            About
                        </Link>
                        <Link to="education" className="text-decoration-none">
                            Education
                        </Link>
                        <Link to="experience" className="text-decoration-none">
                            Experience
                        </Link>
                        <Link to="projects" className="text-decoration-none">
                            Projects
                        </Link>
                    </Col>
                    <Col lg="4" className="mt-lg-0 mt-5">
                        <h5 className="mb-3">Social Media</h5>
                        <div className="social mt-4">
                            <a
                                href="https://www.instagram.com/saudagaridrss/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-decoration-none"
                            >
                                <i className="fa-brands fa-instagram me-2"></i>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/idrsmhmd/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-decoration-none"
                            >
                                <i className="fa-brands fa-linkedin me-2"></i>
                            </a>
                            <a
                                href="https://www.youtube.com/channel/UCU9c9dr1jOYInCymuLQ-_Vw"
                                target="_blank"
                                rel="noreferrer"
                                className="text-decoration-none"
                            >
                                <i className="fa-brands fa-youtube me-2"></i>
                            </a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="text-center px-md-0 px-3 mt-5">
                            Copyright &copy; {new Date().getFullYear()}
                            <span className="fw-bold"> Idris Muhammad</span>
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FooterComponents;
