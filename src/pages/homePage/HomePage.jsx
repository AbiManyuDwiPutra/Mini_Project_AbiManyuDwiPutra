import { Button, Col, Row, Card } from "antd";
import "./homePage.css";
import { Cover1, Mentoring, Offline, Online, Toga } from "../../assets/index";
import { Typography } from "antd";
import {
  ClockCircleOutlined,
  FileSearchOutlined,
  FileTextOutlined,
  ProjectOutlined,
} from "@ant-design/icons";
import { cardsData, faqData } from "./constants";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const MySwal = withReactContent(Swal);

  const onClickOfflineClass = () => {
    navigate("/course");
  };

  const onClickOnineClass = () => {
    MySwal.fire({
      icon: "warning",
      text: "Sedang Dalam Pengembangan",
    });
  };

  const { Meta } = Card;
  const { Title } = Typography;
  return (
    <>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} xl={12}>
          <div className="homepage-title">
            <h1>Dapatkan Edukasi Melalui Remedial</h1>
            <p>
              Memberi Anda sistem pembelajaran online dan offline yang membantu
              pengetahuan Seni Anda
            </p>
            <Button onClick={onClickOfflineClass}>Get Started</Button>
          </div>
        </Col>
        <Col xs={24} xl={12}>
          <div className="img">
            <img src={Cover1} alt="Cover" />
          </div>
        </Col>
      </Row>
      <div className="section1">
        <Row justify="center">
          <Col>
            <div className="murid">
              <img height={110} src={Toga} alt="" className="toga" />
              <p
                style={{ marginTop: 10, fontWeight: "bold" }}
                className="text-section1"
              >
                100+ <br />
                <p style={{ fontWeight: "normal" }}> Total Murid</p>
              </p>
            </div>
          </Col>
          <Col>
            <div className="kursus">
              <img src={Mentoring} alt="" className="mentoring" />
              <p
                style={{ marginTop: 10, fontWeight: "bold" }}
                className="text-section1"
              >
                3+ <br />
                <p style={{ fontWeight: "normal" }}> Total Kursus</p>
              </p>
            </div>
          </Col>
        </Row>
      </div>
      {/* </div> */}
      <div className="card-section2">
        <div className="produk">
          <h1>Produk kelas kami</h1>
          <p>
            Kami menyediakan kursus online dan offline yang dirancang untuk
            membantu Anda mengembangkan keahlian dan keterampilan baru
          </p>
        </div>
        <div className="card-product">
          <Row justify="center" gutter={[16]}>
            <Col
              style={{ marginRight: 70 }}
              xs={24}
              sm={12}
              md={8}
              lg={6}
              xl={6}
            >
              <Card
                className="box-shadow"
                hoverable
                style={{ width: "100%", margin: "16px" }}
                cover={<img alt="example" src={Online} />}
                // title = "Online Class"
              >
                <Title>Online Class</Title>
                <hr />
                <div className="content-class">
                  <ul style={{ listStyle: "none" }}>
                    <li>
                      <ClockCircleOutlined />
                      {"  "}
                      Waktu Fleksibel
                    </li>
                    <li>
                      <FileTextOutlined />
                      {"  "}
                      Modul Online
                    </li>
                    <li>
                      <ProjectOutlined />
                      {"  "}
                      Kuis
                    </li>
                    <li>
                      <FileSearchOutlined />
                      {"  "}
                      Belajar Mandiri
                    </li>
                  </ul>
                  <h3>Rp.20.000/Bulan</h3>
                </div>
                <Button
                  style={{
                    marginTop: "16px",
                    width: "100%",
                    padding: 10,
                    height: 50,
                    backgroundColor: "#FB8C00",
                    fontWeight: "bold",
                    color: "white",
                    border: 0,
                  }}
                  onClick={onClickOnineClass}
                >
                  Mulai !
                </Button>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6} xl={6}>
              <Card
                className="box-shadow"
                hoverable
                style={{ width: "100%", margin: "16px" }}
                cover={<img alt="example" src={Offline} />}
              >
                <Title>Offline Class</Title>
                <hr />
                <div className="content-class">
                  <ul style={{ listStyle: "none" }}>
                    <li>
                      <ClockCircleOutlined />
                      {"  "}
                      Waktu Fleksibel
                    </li>
                    <li>
                      <FileTextOutlined />
                      {"  "}
                      Modul Online
                    </li>
                    <li>
                      <ProjectOutlined />
                      {"  "}
                      Kuis
                    </li>
                    <li>
                      <FileSearchOutlined />
                      {"  "}
                      Belajar Mandiri
                    </li>
                  </ul>
                  <h3>Rp.50.000/ Bulan</h3>
                </div>
                <Button
                  style={{
                    marginTop: "16px",
                    width: "100%",
                    padding: 10,
                    height: 50,
                    backgroundColor: "#FB8C00",
                    fontWeight: "bold",
                    color: "white",
                    border: 0,
                  }}
                  onClick={onClickOfflineClass}
                >
                  Mulai !
                </Button>
              </Card>
            </Col>
          </Row>
        </div>
        <div className="artikel">
          <h1>Artikel Kami</h1>
          <Row gutter={[16, 16, 16]}>
            {cardsData.map((card, index) => (
              <Col xs={24} sm={12} md={8} key={index}>
                <Card
                  className="box-shadow"
                  hoverable
                  style={{
                    width: 400,
                    height: 730,
                    marginTop: 30,
                    marginLeft: 60,
                  }}
                  cover={<img alt={card.title} src={card.cover} />}
                  actions={[
                    <Button
                      key={index}
                      type="primary"
                      style={{
                        width: "70%",
                        padding: 10,
                        height: 50,
                        backgroundColor: "#FB8C00",
                        fontWeight: "bold",
                        color: "white",
                        border: 0,
                      }}
                    >
                      Baca Selengkapnya
                    </Button>,
                  ]}
                >
                  <Meta title={card.title} description={card.description} />
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <div className="section-last">
        <h1>Apa Kata Mereka?</h1>
        <Row gutter={[16, 16, 16]}>
          {faqData.map((card, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <Card
                className="box-shadow"
                hoverable
                style={{
                  width: 400,
                  height: 250,
                  marginTop: 30,
                  marginLeft: 60,
                }}
                actions={[<img key={index} alt="example" src={card.foto} />]}
              >
                <Meta title={card.title} description={card.description} />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default HomePage;
