import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { navLinks } from "../data/index";

const NavbarComponent = () => {
    return (
        <div>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="/" className="fs-3 fw-bold">
                        Idris Muhammad
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            {navLinks.map((link) => {
                                return (
                                    <div className="nav-link" key={link.id}>
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
                                            target={
                                                link.text === "Resume"
                                                    ? "_blank"
                                                    : ""
                                            }
                                            rel={
                                                link.text === "Resume"
                                                    ? "noreferrer"
                                                    : ""
                                            }
                                        >
                                            {link.text}
                                        </NavLink>
                                    </div>
                                );
                            })}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavbarComponent;
