import { Container, Row, Col, Card } from "react-bootstrap";

import { organizationExperience, workExperience } from "../data/index";

const ExperienceCard = ({ data }) => (
    <Row className="px-3 mt-2 mb-4">
        <Card>
            <Card.Body className="m-4">
                <h2 className="fw-bold">{data.position}</h2>

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

                <h5>{data.since}</h5>
                {data.status && <h5 className="fst-italic">{data.status}</h5>}
                <p>{data.desc}</p>
                <p className="mb-1">Responsibilities:</p>
                <ul>
                    {data.responsibility.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </Card.Body>
        </Card>
    </Row>
);

const ExperiencePage = () => {
    return (
        <div className="experience-page">
            <div className="work">
                <Container>
                    <Row>
                        <Col className="pb-1">
                            <h5>Work</h5>
                        </Col>
                    </Row>
                    {workExperience
                        .slice()
                        .reverse()
                        .map((data) => (
                            <ExperienceCard key={data.id} data={data} />
                        ))}
                </Container>
            </div>
            <div className="organization pb-5">
                <Container>
                    <Row>
                        <Col className="pb-1">
                            <h5>Organizational</h5>
                        </Col>
                    </Row>
                    {organizationExperience.map((data) => (
                        <ExperienceCard key={data.id} data={data} />
                    ))}
                </Container>
            </div>
        </div>
    );
};

export default ExperiencePage;
