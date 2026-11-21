import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { projects } from "../data";
import { useLang } from "../i18n/context";

const ProjectPage = () => {
    const { t } = useLang();

    return (
        <div className="project-page pb-5">
            <div className="project min-vh-100">
                <Container>
                    <Row>
                        <Col className="pb-1" data-aos="fade-up">
                            <h5>{t("projects")}</h5>
                            <h4>{t("myWorks")}</h4>
                        </Col>
                    </Row>
                    <Row>
                        {projects
                            .slice()
                            .reverse()
                            .map((project, i) => {
                                return (
                                    <Col
                                        key={project.id}
                                        data-aos="fade-up"
                                        data-aos-delay={(i % 2) * 150}
                                    >
                                        <div className="project-wrap">
                                            <img
                                                src={project.image}
                                                alt={`${t("screenshotOf")} ${project.name}`}
                                            />
                                            <div className="project-info">
                                                <h4 className="text-center">
                                                    {project.name}
                                                </h4>
                                                <div className="text-center">
                                                    <Link
                                                        to={`/project/${project.slug}`}
                                                        aria-label={`${t("viewDetails")} ${project.name}`}
                                                    >
                                                        <i className="ri-information-line"></i>
                                                    </Link>
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
