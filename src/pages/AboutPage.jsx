import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import MyPicture from "../assets/img/Idris1.webp";
import { skillsTools } from "../data/index";
import { recommendations } from "../data/index";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper/modules";
import { useLang } from "../i18n/context";

const UnejLink = ({ children }) => (
    <a href="https://unej.ac.id/" target="_blank" rel="noreferrer">
        {children}
    </a>
);

const BangkitLink = () => (
    <a
        href="https://grow.google/intl/id_id/bangkit/"
        target="_blank"
        rel="noreferrer"
    >
        Bangkit Academy led by Google, GoTo, & Traveloka
    </a>
);

const aboutContent = {
    en: (
        <>
            <p>
                I am a graduate of Information Systems, Faculty of Computer
                Science, <UnejLink>University of Jember</UnejLink> who is
                interested in Mobile Development.
            </p>
            <p>
                I have experience as a Web Developer using PHP/Laravel and C#,
                skills I gained during college. Certainly, I have a solid
                understanding of the fundamentals of the PHP language.
            </p>
            <p>
                Alhamdulillah, I was selected as one of 3.1K participants from
                63K registrants as Mobile Development (Android) Cohort in{" "}
                <BangkitLink /> and graduated with Google Certified as Associate
                Android Developer. I gained many skills as an Android Developer.
                I also honed my teamwork and soft skills by joining the UKM
                O-MACO organization in my faculty.
            </p>
            <p>
                Apart from that, I also have a leadership skill, time management
                skill, communication skill, and responsibility which have helped
                me a lot throughout my journey. I’m excited to gain hands-on
                experience in the technology field and want to implement my
                skills, collaborate, learn, and work as a team.
            </p>
        </>
    ),
    id: (
        <>
            <p>
                Saya adalah lulusan Sistem Informasi, Fakultas Ilmu Komputer,{" "}
                <UnejLink>Universitas Jember</UnejLink> yang tertarik pada
                bidang Mobile Development.
            </p>
            <p>
                Saya memiliki pengalaman sebagai Web Developer menggunakan
                PHP/Laravel dan C# yang saya pelajari selama kuliah, serta
                pemahaman yang kuat tentang dasar-dasar bahasa PHP.
            </p>
            <p>
                Alhamdulillah, saya terpilih sebagai salah satu dari 3,1 ribu
                peserta dari total 63 ribu pendaftar Mobile Development
                (Android) Cohort di <BangkitLink /> dan lulus dengan sertifikasi
                Google Associate Android Developer. Di sana saya memperoleh
                banyak keterampilan sebagai Android Developer. Saya juga
                mengasah kemampuan bekerja dalam tim dan soft skill dengan
                bergabung di organisasi UKM O-MACO di fakultas saya.
            </p>
            <p>
                Selain itu, saya memiliki kemampuan kepemimpinan, manajemen
                waktu, komunikasi, serta rasa tanggung jawab yang banyak
                membantu saya sepanjang perjalanan ini. Saya bersemangat untuk
                mendapatkan pengalaman langsung di bidang teknologi, menerapkan
                keterampilan saya, berkolaborasi, terus belajar, dan bekerja
                dalam tim.
            </p>
        </>
    ),
};

const AboutPage = () => {
    const { t, tr } = useLang();

    return (
        <div className="about-page">
            <div className="about">
                <Container>
                    <Row>
                        <Col className="pb-1" data-aos="fade-up">
                            <h5>{t("about")}</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="4" data-aos="fade-right">
                            <img src={MyPicture} alt="Photo of Idris Muhammad" />
                        </Col>
                        <Col
                            lg="7"
                            className="px-4 mt-4 mt-lg-0"
                            data-aos="fade-left"
                        >
                            {tr(aboutContent)}
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="skills">
                <Container>
                    <Row>
                        <Col className="pb-1" data-aos="fade-up">
                            <h5>{t("skillsTools")}</h5>
                        </Col>
                    </Row>
                    <Row>
                        {skillsTools.map((skillTool, i) => {
                            return (
                                <Col
                                    key={skillTool.id}
                                    lg="3"
                                    md="4"
                                    className="mb-4"
                                    data-aos="zoom-in"
                                    data-aos-delay={(i % 4) * 100}
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
                        <Col className="pb-1" data-aos="fade-up">
                            <h5>{t("recommendations")}</h5>
                        </Col>
                    </Row>
                    <div data-aos="fade-up">
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
                                        <i className="ri-double-quotes-l quote-icon-left" />
                                        {data.desc}
                                        <i className="ri-double-quotes-r quote-icon-right"></i>
                                    </p>
                                    <div>
                                        <img
                                            src={data.image}
                                            alt={`Photo of ${data.name}`}
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
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default AboutPage;
