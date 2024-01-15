import { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { educations, certifications } from "../data/index";
import "glightbox/dist/css/glightbox.css";
import Glightbox from "glightbox";

const EducationPage = () => {
    useEffect(() => {
        const lightbox = Glightbox({
            selector: ".glightbox",
            options: {
                touchNavigation: true,
                loop: true,
            },
        });

        return () => lightbox.destroy();
    }, []);

    return (
        <div className="education-page">
            <div className="education">
                <Container className="pb-4">
                    <Row>
                        <Col className="pb-1">
                            <h5>Education</h5>
                        </Col>
                    </Row>
                    <Row className="row-cols-lg-3 row-cols-md-1 row-cols-1">
                        {educations.map((education) => {
                            return (
                                <Col key={education.id}>
                                    <Card>
                                        <Card.Img
                                            variant="top"
                                            src={education.image}
                                        />
                                        <Card.Body>
                                            <a
                                                href="https://unej.ac.id/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                {education.univName}
                                            </a>
                                            <h5>{education.since}</h5>
                                            <p>
                                                {" "}
                                                <em>{education.major}</em>{" "}
                                                <br />
                                                Grade: {education.grade}/4.0
                                                (GPA)
                                            </p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </div>

            <div className="certifications min-vh-100">
                <Container>
                    <Row>
                        <Col className="pb-1 ">
                            <h5>Certifications</h5>
                        </Col>
                    </Row>
                    <Row>
                        {certifications.map((certification) => {
                            return (
                                <Col key={certification.id}>
                                    <div className="certif-wrap">
                                        <img
                                            src={certification.image}
                                            alt={`Gambar ${
                                                certification.id + 1
                                            }`}
                                        />
                                        <div className="certif-info">
                                            <h4 className="text-center">
                                                {certification.name}
                                            </h4>
                                            <div className="text-center">
                                                <a
                                                    href={certification.image}
                                                    className="glightbox"
                                                    data-gallery="certifGallery"
                                                    data-glightbox="type:image"
                                                >
                                                    <i className="bx bx-zoom-in"></i>
                                                </a>
                                                <a
                                                    href="https://www.dicoding.com/certificates/L4PQ61OWVPO1"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    <i className="bx bx-link"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default EducationPage;
