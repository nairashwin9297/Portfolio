import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import verbello from "../../Assets/Projects/verbello.png";
import orderhub from "../../Assets/Projects/orderhub.png";
import coursera from "../../Assets/Projects/coursera.png";
import movie from "../../Assets/Projects/movie.png";
import sentiment from "../../Assets/Projects/sentiment.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={verbello}
              isBlog={false}
              title="Verbello"
              description="a gamified language learning platform( 5 languages) , using React, Node.js, MongoDB, which features interactive quizzes and immersive content, enhancing user engagement."
              ghLink="https://github.com/nairashwin9297/Verbello-version-2"
              demoLink="https://verbello.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={orderhub}
              isBlog={false}
              title="OrderHub"
              description="food ordering management system that integrates a SQL Server database with React.js and Node.js for efficient data handling, enhanced with Power BI visualizations for real-time analytics and decision-making."
              ghLink="https://github.com/nairashwin9297/OrderHub"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Movie Recommeder"
              description="Personal Movie Recommender is a hybrid movie recommendation system that personalizes suggestions using both Content-Based and Collaborative Filtering, leveraging advanced text analysis and real-time recommendation techniques to enhance user engagement and satisfaction."
              ghLink="https://github.com/nairashwin9297/Movie-Recommendation-Systems"
                        
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coursera}
              isBlog={false}
              title="Digital Education System"
              description="university management system built with Java Swing and NetBeans, offering role-specific functionalities for professors, students, and recruiters, with efficient data handling"
              ghLink="https://github.com/nairashwin9297/Digital-CourseEra"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sentiment}
              isBlog={false}
              title="Sentiment Analysis"
              description="Applying Natural Language Processing (NLP) techniques to analyze customer reviews of musical instruments on Amazon. The project leverages methods like SMOTE for handling imbalanced data, TF-IDF Vectorization for text quantification, and N-gram analysis to assess review sentiment, providing insights into customer opinions efficiently."
              ghLink="https://github.com/nairashwin9297/Sentiment-Analysis"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
