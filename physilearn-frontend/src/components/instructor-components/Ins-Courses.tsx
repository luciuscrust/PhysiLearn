import "../../components-css/Courses.css";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import Default_Class_LOGO from "../../assets/default-class-logo.png";

function InsCourses() {
    const navigate = useNavigate();

    return (
        <section id="content_section" className="content-container">
            <div className="cards-wrapper">
                <Card
                    className="card-fixed-height"
                    onClick={() => navigate("/ins-course-page")}
                >
                    <Card.Img
                        variant="top"
                        className="card-img-fixed"
                        src={Default_Class_LOGO}
                    />
                    <Card.Body className="d-flex flex-column flex-grow-1">
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>Some quick example text.</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </section>
    );
}

export default InsCourses;
