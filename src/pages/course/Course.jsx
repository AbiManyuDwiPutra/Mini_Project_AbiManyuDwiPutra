import { Button, Col, Row } from "antd";
import { ArtDesign, HeroCourse } from "../../assets/index";
import "./course.css";
import { CardSection } from "./constants";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Course = () => {
  const navigate = useNavigate();

  const onClickMusicPoet = (paramLink) => {
    navigate(paramLink);
  };

  useEffect(()=>{

  },[])

  return (
    <>
      <Row gutter={[16, 16]} justify={"start"}>
        <Col xs={24} xl={12}>
          <img className="course-header" src={HeroCourse} alt="Cover" />
          <div className="course-title">
            <h1>Course</h1>
          </div>
        </Col>
      </Row>
      <Card>
        {CardSection.map((data, index) => (
          <Row gutter={[16, 16]} justify="center" key={index}>
            <Col xs={12} xl={12}>
              <div className="img-cardClass">
                <img src={data.image} alt="Cover" />
              </div>
            </Col>
            <Col xs={24} xl={12}>
              <div className="cardClass-about">
                <h3>{data.title}</h3>
                <p>{data.description}</p>
              </div>
              <Button
                style={{
                    width: "50%",
                  left: 50,
                  padding: 10,
                  height: 50,
                  backgroundColor: "#FB8C00",
                  fontWeight: "bold",
                  color: "white",
                  border: 0,
                }}
                onClick={()=>{onClickMusicPoet(data.link)}}
              >
                Mulai
              </Button>
            </Col>
          </Row>
        ))}
      </Card>
    </>
  );
};

export default Course;
