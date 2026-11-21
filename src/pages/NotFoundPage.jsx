import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLang } from "../i18n/context";

const NotFoundPage = () => {
    const { t } = useLang();

    return (
        <div className="notfound-page min-vh-100 d-flex align-items-center">
            <Container className="text-center">
                <h1>404</h1>
                <p>{t("notFoundText")}</p>
                <div className="btn-wrapper">
                    <Link to="/" className="btn-lanjut">
                        {t("backToHome")}
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default NotFoundPage;
