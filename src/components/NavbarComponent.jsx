import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../data/index";
import useTheme from "../hooks/useTheme";
import { useLang } from "../i18n/context";

const NavbarComponent = () => {
    const { theme, toggleTheme } = useTheme();
    const { lang, toggleLang, t, tr } = useLang();

    return (
        <div>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="fs-3 fw-bold">
                        Idris Muhammad
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-lg-center">
                            {navLinks.map((link) => {
                                return (
                                    <div className="nav-link" key={link.id}>
                                        {link.isFile ? (
                                            <a
                                                href={`${import.meta.env.BASE_URL}${tr(link.path)}`}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                {t(link.key)}
                                            </a>
                                        ) : (
                                            <NavLink
                                                to={link.path}
                                                className={({
                                                    isActive,
                                                    isPending,
                                                }) =>
                                                    isPending
                                                        ? "pending"
                                                        : isActive
                                                        ? "active"
                                                        : ""
                                                }
                                                end
                                            >
                                                {t(link.key)}
                                            </NavLink>
                                        )}
                                    </div>
                                );
                            })}
                            <div className="nav-link">
                                <button
                                    type="button"
                                    className="lang-toggle"
                                    onClick={toggleLang}
                                    aria-label={t("switchLang")}
                                >
                                    <span className={lang === "en" ? "active" : ""}>
                                        EN
                                    </span>
                                    {" | "}
                                    <span className={lang === "id" ? "active" : ""}>
                                        ID
                                    </span>
                                </button>
                            </div>
                            <div className="nav-link">
                                <button
                                    type="button"
                                    className="theme-toggle"
                                    onClick={toggleTheme}
                                    aria-label={
                                        theme === "dark"
                                            ? t("switchToLight")
                                            : t("switchToDark")
                                    }
                                >
                                    <i
                                        className={
                                            theme === "dark"
                                                ? "ri-sun-line"
                                                : "ri-moon-line"
                                        }
                                    ></i>
                                </button>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavbarComponent;
