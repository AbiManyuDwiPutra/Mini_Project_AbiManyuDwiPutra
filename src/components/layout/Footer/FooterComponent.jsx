import { Col, Row, Layout } from "antd";
import "./footerComponent.css";
// import { FooterAltera } from "../../../assets/index";

const FooterComponent = () => {
  const { Footer } = Layout;
  return (
    <>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        EduArt - © 2023 Created by Abi Manyu Dwi Putra
      </Footer>
    </>
  );
};

export default FooterComponent;
