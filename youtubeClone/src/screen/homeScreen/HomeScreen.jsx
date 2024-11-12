import React from 'react';
import './_homeScreen.scss';
import { Container, Row, Col } from 'react-bootstrap';
import CategoriesBar from '../../components/categoriesBar/CategoriesBar';
import Video from '../../components/video/Video';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomeScreen = () => {
  return (
    <div>
      <Container className="container">
        <CategoriesBar />
        <Row>
          {[...new Array(20)].map((_, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={4}>
              {' '}
              <Video />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomeScreen;
