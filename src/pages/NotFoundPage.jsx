import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="notfound-page min-vh-100 d-flex align-items-center">
            <Container className="text-center">
                <h1>404</h1>
                <p>Oops! The page you are looking for doesn&apos;t exist.</p>
                <div className="btn-wrapper">
                    <Link to="/" className="btn-lanjut">
                        Back to Home
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default NotFoundPage;
