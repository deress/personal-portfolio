import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Glightbox from "glightbox";
import "glightbox/dist/css/glightbox.css";
import { projects } from "../data";

const ProjectPage = () => {
    useEffect(() => {
        const lightbox = Glightbox({
            selector: ".glightbox",
            options: {
                touchNavigation: true,
                loop: true,
                width: 900,
            },
        });

        return () => lightbox.destroy();
    }, []);

    return (
        <div className="project-page pb-5">
            <div className="project min-vh-100">
                <Container>
                    <Row>
                        <Col className="pb-1">
                            <h5>Projects</h5>
                            <h4>My Works</h4>
                        </Col>
                    </Row>
                    <Row>
                        {projects
                            .slice()
                            .reverse()
                            .map((project) => {
                                return (
                                    <Col key={project.id}>
                                        <div className="project-wrap">
                                            <img
                                                src={project.image}
                                                alt={`Screenshot of ${project.name}`}
                                            />
                                            <div className="project-info">
                                                <h4 className="text-center">
                                                    {project.name}
                                                </h4>
                                                <div className="text-center">
                                                    <a
                                                        href={project.link}
                                                        className="glightbox"
                                                        data-gallery="projectGallery"
                                                        data-glightbox="type: external"
                                                        data-width="90%"
                                                        data-height="90vh"
                                                        aria-label={`View details of ${project.name}`}
                                                    >
                                                        <i className="ri-information-line"></i>
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

export default ProjectPage;
