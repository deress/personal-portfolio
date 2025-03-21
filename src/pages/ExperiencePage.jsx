import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import { organizationExperience, workExperience } from "../data/index";

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
                        .map((data) => {
                            return (
                                <Row key={data.id} className="px-3 mt-2 mb-4">
                                    <Card>
                                        <Card.Body className="m-4">
                                            <h2 className="fw-bold">
                                                {data.position}
                                            </h2>

                                            <Link
                                                to={data.companyLink}
                                                className="text-decoration-none"
                                            >
                                                <h4>{data.company}</h4>
                                            </Link>

                                            <h5>{data.since}</h5>
                                            <h5 className="fst-italic">
                                                {data.status}
                                            </h5>
                                            <p>{data.desc}</p>
                                            <p className="mb-1">
                                                Responsibilities:
                                            </p>
                                            <ul>
                                                {data.responsibility.map(
                                                    (item, index) => {
                                                        return (
                                                            <li key={index}>
                                                                {item}
                                                            </li>
                                                        );
                                                    }
                                                )}
                                            </ul>
                                        </Card.Body>
                                    </Card>
                                </Row>
                            );
                        })}
                </Container>
            </div>
            <div className="organization pb-5">
                <Container>
                    <Row>
                        <Col className="pb-1">
                            <h5>Organizational</h5>
                        </Col>
                    </Row>
                    {organizationExperience.map((data, index) => {
                        return (
                            <Row key={data.id} className="px-3 mt-2 mb-4">
                                <Card>
                                    <Card.Body className="m-4">
                                        <h2 className="fw-bold">
                                            {data.position}
                                        </h2>

                                        <Link
                                            to={data.companyLink}
                                            className="text-decoration-none"
                                        >
                                            <h4>{data.company}</h4>
                                        </Link>

                                        <h5>{data.since}</h5>
                                        <p>{data.desc}</p>
                                        <p className="mb-1">
                                            Responsibilities:
                                        </p>
                                        <ul>
                                            {organizationExperience[
                                                index
                                            ].responsibility.map(
                                                (item, index) => {
                                                    return (
                                                        <li key={index}>
                                                            {item}
                                                        </li>
                                                    );
                                                }
                                            )}
                                        </ul>
                                    </Card.Body>
                                </Card>
                            </Row>
                        );
                    })}
                </Container>
            </div>
        </div>
    );
};

export default ExperiencePage;
