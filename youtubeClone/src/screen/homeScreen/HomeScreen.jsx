import React from "react";
// import "./_homeScreen"; // Uncomment if you have a CSS file for styling
import { Container, Row, Col } from "react-bootstrap"; // Ensure Col is imported
import CategoriesBar from "../../components/categoriesBar/CategoriesBar";
import Video from "../../components/video/video";

const HomeScreen = () => {
  return (
    <div>
      <Container>
        <CategoriesBar />
        <Row>
          {[...new Array(20)].map((_, index) => (
            <Col key={index} lg={3} md={4}>
              {" "}
              <Video />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomeScreen;
