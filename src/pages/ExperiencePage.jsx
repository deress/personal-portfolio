import { Container, Row, Col, Card } from "react-bootstrap";

import { organizationExperience, workExperience } from "../data/index";
import { useLang } from "../i18n/context";

const TimelineItem = ({ data }) => {
    const { t, tr } = useLang();

    return (
        <div className="timeline-item" data-aos="fade-up">
            <span className="timeline-dot" />
            <p className="timeline-date">
                {tr(data.since)}
                {data.status && ` · ${tr(data.status)}`}
            </p>
            <Card>
                <Card.Body className="m-3 m-lg-4">
                    <h2 className="fw-bold">{tr(data.position)}</h2>

                    {data.companyLink ? (
                        <a
                            href={data.companyLink}
                            target="_blank"
                            rel="noreferrer"
                            className="text-decoration-none"
                        >
                            <h4>{data.company}</h4>
                        </a>
                    ) : (
                        <h4>{data.company}</h4>
                    )}

                    <p>{tr(data.desc)}</p>
                    <p className="mb-1">{t("responsibilities")}</p>
                    <ul>
                        {tr(data.responsibility).map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </Card.Body>
            </Card>
        </div>
    );
};

const ExperiencePage = () => {
    const { t } = useLang();

    return (
        <div className="experience-page">
            <div className="work">
                <Container>
                    <Row>
                        <Col className="pb-1" data-aos="fade-up">
                            <h5>{t("work")}</h5>
                        </Col>
                    </Row>
                    <div className="timeline">
                        {workExperience
                            .slice()
                            .reverse()
                            .map((data) => (
                                <TimelineItem key={data.id} data={data} />
                            ))}
                    </div>
                </Container>
            </div>
            <div className="organization pb-5">
                <Container>
                    <Row>
                        <Col className="pb-1" data-aos="fade-up">
                            <h5>{t("organizational")}</h5>
                        </Col>
                    </Row>
                    <div className="timeline">
                        {organizationExperience.map((data) => (
                            <TimelineItem key={data.id} data={data} />
                        ))}
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default ExperiencePage;
