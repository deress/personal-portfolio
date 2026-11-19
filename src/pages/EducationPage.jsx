import { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { educations, certifications, awards } from "../data/index";
import "glightbox/dist/css/glightbox.css";
import Glightbox from "glightbox";

const GalleryCard = ({ item, variant }) => (
    <Col>
        <div className={`${variant}-wrap`}>
            <img src={item.image} alt={item.name} />
            <div className={`${variant}-info`}>
                <h4 className="text-center">{item.name}</h4>
                <div className="text-center">
                    <a
                        href={item.image}
                        className="glightbox"
                        data-gallery="certifGallery"
                        data-glightbox="type:image"
                        aria-label={`Enlarge ${item.name}`}
                    >
                        <i className="ri-zoom-in-line"></i>
                    </a>
                    {item.link && (
                        <a
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`View credential for ${item.name}`}
                        >
                            <i className="ri-link"></i>
                        </a>
                    )}
                </div>
            </div>
        </div>
    </Col>
);

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
                                            alt={education.univName}
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

            <div className="certifications">
                <Container>
                    <Row>
                        <Col className="pb-1 ">
                            <h5>Certifications</h5>
                        </Col>
                    </Row>
                    <Row>
                        {certifications
                            .slice()
                            .sort((a, b) => b.date.localeCompare(a.date))
                            .map((c) => (
                                <GalleryCard
                                    key={c.id}
                                    item={c}
                                    variant="certif"
                                />
                            ))}
                    </Row>
                </Container>
            </div>

            <div className="awards">
                <Container>
                    <Row>
                        <Col className="pb-1">
                            <h5>Awards</h5>
                        </Col>
                    </Row>
                    <Row>
                        {awards
                            .slice()
                            .reverse()
                            .map((a) => (
                                <GalleryCard
                                    key={a.id}
                                    item={a}
                                    variant="award"
                                />
                            ))}
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default EducationPage;
