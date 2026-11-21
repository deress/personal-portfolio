import { Container, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data";
import NotFoundPage from "./NotFoundPage";
import { useLang } from "../i18n/context";

const ProjectDetailPage = () => {
    const { slug } = useParams();
    const { t, tr } = useLang();
    const index = projects.findIndex((p) => p.slug === slug);

    if (index === -1) return <NotFoundPage />;

    const project = projects[index];
    const prev = projects[index - 1];
    const next = projects[index + 1];
    const screenshots = [project.image, ...(project.screenshots || [])];

    return (
        <div className="project-detail-page pb-5">
            <Container className="min-vh-100">
                <Link to="/project" className="back-link">
                    <i className="ri-arrow-left-line"></i> {t("backToProjects")}
                </Link>

                <h5 className="pt-3">{project.category}</h5>
                <h4>{project.name}</h4>

                <Row className="pt-3 g-4">
                    <Col lg="7" data-aos="fade-right">
                        {screenshots.map((src, i) => (
                            <img
                                key={i}
                                src={src}
                                alt={`${t("screenshotOf")} ${project.name} ${i + 1}`}
                                className="img-fluid rounded mb-3 detail-image"
                            />
                        ))}
                    </Col>

                    <Col lg="5" data-aos="fade-left">
                        <div className="detail-info">
                            <p>
                                <span>{t("date")}:</span> {tr(project.date)}
                            </p>
                            <p>
                                <span>{t("role")}:</span> {tr(project.role)}
                            </p>

                            <div className="tech-badges">
                                {project.techStack.map((tech) => (
                                    <span key={tech} className="badge-tech">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {(project.github || project.playStore) && (
                                <div className="detail-links">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="btn-detail"
                                        >
                                            <i className="ri-github-fill"></i>{" "}
                                            GitHub
                                        </a>
                                    )}
                                    {project.playStore && (
                                        <a
                                            href={project.playStore}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="btn-detail"
                                        >
                                            <i className="ri-google-play-fill"></i>{" "}
                                            Play Store
                                        </a>
                                    )}
                                </div>
                            )}

                            <p className="desc">{tr(project.desc)}</p>
                            {project.note && (
                                <p className="note">
                                    <i className="ri-lock-line"></i>{" "}
                                    {tr(project.note)}
                                </p>
                            )}
                        </div>
                    </Col>
                </Row>

                <div className="detail-nav">
                    {prev ? (
                        <Link to={`/project/${prev.slug}`}>
                            <i className="ri-arrow-left-s-line"></i> {prev.name}
                        </Link>
                    ) : (
                        <span />
                    )}
                    {next && (
                        <Link to={`/project/${next.slug}`}>
                            {next.name} <i className="ri-arrow-right-s-line"></i>
                        </Link>
                    )}
                </div>
            </Container>
        </div>
    );
};

export default ProjectDetailPage;
