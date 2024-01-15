import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import MyPicture from "../assets/img/Idris1.png";
import { skillsTools } from "../data/index";
import { recommendations } from "../data/index";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper/modules";

const AboutPage = () => {
    return (
        <div className="about-page">
            <div className="about">
                <Container>
                    <Row>
                        <Col className="pb-1">
                            <h5>About</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="4">
                            <img src={MyPicture} alt="" />
                        </Col>
                        <Col lg="7" className="px-4 mt-4 mt-lg-0">
                            <p>
                                I am an Undergraduate student, majoring in
                                System Information, Faculty Computer Science,{" "}
                                <a
                                    href="https://unej.ac.id/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    University Jember
                                </a>{" "}
                                who is interested in Mobile Development.
                            </p>
                            <p>
                                I have experience as a Web Developer in
                                PHP/Laravel and C# that I got those skills from
                                my college. Certainly, I have a solid
                                understanding the fundamental of PHP language.
                            </p>
                            <p>
                                Alhamdulillah, I was selected as 4.5K
                                participants from 47.8K registrants as Mobile
                                Development (Android) Cohort in{" "}
                                <a
                                    href="https://grow.google/intl/id_id/bangkit/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Bangkit Academy led by Google, GoTo, &
                                    Traveloka{" "}
                                </a>{" "}
                                and graduated with Google Certified as Associate
                                Android Developer. I gained many skills as an
                                Android Developer. I also honing my experience
                                as an team and soft skills by joining the UKM
                                O-MACO organization in my faculty.
                            </p>
                            <p>
                                Apart from that, I also have a leadership skill,
                                time management skill, communication skill, and
                                responsibility which have helped me a lot during
                                through my journey. I’m excited to gaining
                                hands-on experience in the technology field and
                                want to implement my skills, collaborate, learn,
                                and work as a team.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="skills">
                <Container>
                    <Row>
                        <Col className="pb-1">
                            <h5>Skills & Tools</h5>
                        </Col>
                    </Row>
                    <Row>
                        {skillsTools.map((skillTool) => {
                            return (
                                <Col
                                    key={skillTool.id}
                                    lg="3"
                                    md="4"
                                    className="mb-4"
                                >
                                    <Link
                                        to={skillTool.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-decoration-none"
                                    >
                                        <Card>
                                            <Card.Body className="text-item-center d-flex align-items-center px-4 py-3">
                                                <i
                                                    className={`${skillTool.icon} mb-1`}
                                                    style={{
                                                        color: skillTool.color,
                                                    }}
                                                ></i>
                                                <h3 className="mt-1">
                                                    {skillTool.name}
                                                </h3>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </div>

            <div className="recommendations">
                <Container>
                    <Row>
                        <Col className="pb-1">
                            <h5>Recommendations</h5>
                        </Col>
                    </Row>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            922: {
                                slidesPerView: 2,
                                spaceBetween: 50,
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper "
                    >
                        {recommendations.map((data) => {
                            return (
                                <SwiperSlide key={data.id} className="">
                                    <p className="desc">
                                        <i className="bx bxs-quote-alt-left quote-icon-left" />
                                        {data.desc}
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <div>
                                        <img
                                            src={data.image}
                                            alt=""
                                            className="recomm-img"
                                        />
                                        <div className="recomm-name ">
                                            <h4>{data.name}</h4>
                                            <h5>{data.skill}</h5>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </Container>
            </div>
        </div>
    );
};

export default AboutPage;
