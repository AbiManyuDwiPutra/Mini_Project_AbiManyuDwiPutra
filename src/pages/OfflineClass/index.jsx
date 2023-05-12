import { Col, Row, Card } from "antd";
import "./offlineClass.css";
import {
  OfflineClassSection1,
  OfflineClassHeader,
  PemahamanNada,
  MusikTradisional,
} from "../../assets/index";
import { Typography } from "antd";
import { rewardData, timelineData } from "./constants";
import YouTube from "react-youtube";
import { Button } from "antd";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { ADD_OFFLINE_CLASS, GET_OFFLINE_CLASS } from "./query";
import { useMutation } from "@apollo/client";
import { useEffect } from "react";

const OfflineClass = () => {
  const [register] = useMutation(ADD_OFFLINE_CLASS, {
    refetchQueries: [GET_OFFLINE_CLASS],
  });

  const { Title } = Typography;
  const MySwal = withReactContent(Swal);

  const onCheckout = async () => {
    MySwal.fire({
      title: "Checkout Form",
      html: `
      <input type="text" id="Nama" class="swal2-input" placeholder="Nama">
      <input type="text" id="Alamat" class="swal2-input" placeholder="Alamat">
      <input type="number" id="NoHp" class="swal2-input" placeholder="No Whatsapp">`,
      confirmButtonText: "Checkout",
      allowOutsideClick: false,
      focusConfirm: true,
      preConfirm: () => {
        const nama = MySwal.getPopup().querySelector("#Nama").value;
        const noHp = MySwal.getPopup().querySelector("#NoHp").value;
        const alamat = MySwal.getPopup().querySelector("#Alamat").value;
        if (!nama || !noHp || !alamat) {
          MySwal.showValidationMessage(`Silahkan isi form terlebih dahulu`);
        } else {
          register({
            variables: { nama: nama, alamat: alamat, no_hp: noHp },
            onError: (err) => {
              MySwal.fire("", err.message, "error");
            },
            onCompleted: () => {
              Swal.fire(
                "",
                "Pendaftaran berhasil, silahkan lanjutkan melalui Whatsapp",
                "success"
              );
            },
          });
        }
        return { nama: nama, noHp: noHp, alamat: alamat };
      },
    }).then((result) => {
      let message =
        "Hai, perkenalkan nama saya " +
        result.value.nama +
        " dari " +
        result.value.alamat +
        ". Saya tertarik dan ingin bergabung dalam kelas!";
      window.open(
        "https://api.whatsapp.com/send?phone=6281224114446&text=" + message
      );
    });
  };

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };

  const onReadyVideo = (event) => {
    event.target.pauseVideo();
  };

  useEffect(() => {}, []);
  return (
    <>
      <Row gutter={[16, 16]} justify={"start"}>
        <Col xs={24} xl={12}>
          <img
            className="offlineClass-header"
            src={OfflineClassHeader}
            alt="Cover"
          />
          <div className="offlineClass-title">
            <h1>Program Musikalisasi Jiwa</h1>
            <h3>Dalami Jiwamu Melalui Lantunan Musik Syahdu</h3>
          </div>
        </Col>
      </Row>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} xl={12}>
          <div className="img-offlineClass">
            <img src={OfflineClassSection1} alt="Cover" />
          </div>
        </Col>
        <Col xs={24} xl={12}>
          <div className="offlineClass-about">
            <h3>Tentang Program Ini</h3>
            <p>
              Program musikalisasi jiwa merupakan salah satu dari beberapa
              program yang disediakan oleh remedial. Program ini disediakan tak
              hanya memberikan pelajaran musik biasa, namun juga membantu
              mengembangkan dunia musik tanah air dengan mengasah bakat para
              individu. Musikalisasi Jiwa menyediakan berbagai kelas sesuai
              dengan kebutuhan bagi siswa siswa SMA yang ingin belajar secara
              interaktif dan menyenangkan.
            </p>
          </div>
        </Col>
      </Row>
      <div className="reward-section">
        <h1>Apa Yang Kamu Dapatkan?</h1>
        <Row gutter={[16, 16, 16]}>
          {rewardData.map((data, index) => (
            <Col xs={24} sm={12} md={12} key={index}>
              <div className="div-reward">
                <img height={90} src={data.image} alt="" style={{ marginRight: 20}}/>
                <p
                  style={{ marginLeft: 25, fontWeight: "bold" }}
                  className="reward-text"
                >
                  {data.title} <br />
                  <p style={{ fontWeight: "normal" }}> {data.description}</p>
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <div className="section2-offlineClass">
        <div className="section2-offlineClass-content">
          <p>
            Remedial merupakan program yang Serrum lakukan selama 6 bulan di
            awal tahun ajaran baru. Kegiatan ini melibatkan murid SMA (pilihan)
            di Jakarta dan sekitarnya yang berfokus pada pola menggali minat
            siswa dalam mencari pengetahuan sesuai dengan konteks anak dan
            zamannya. Dengan metode saling silang informasi yang menghasilkan
            pengetahuan dan pendekatan seni dan literasi. Setiap siswa memiliki
            ketertarikan individu dalam mencari tahu pengetahuan, secara tidak
            sadar telah dilakukan mereka.
          </p>
        </div>
        <div className="card-product-offlineClass">
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
                cover={<img alt="example" src={PemahamanNada} />}
              >
                <Title>Pemahaman Nada</Title>
                <hr />
                <div className="content-offlineClass">
                  <ul>
                    <li>Modul Pembelajaran Nada</li>
                    <li>Modul 1: Nada Dasar Mayor</li>
                    <li>Modul 2: Nada Dasar Minor</li>
                    <li>Belajar Mandiri</li>
                  </ul>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6} xl={6}>
              <Card
                className="box-shadow"
                hoverable
                style={{ width: "100%", margin: "16px" }}
                cover={<img alt="example" src={MusikTradisional} />}
              >
                <Title>Musik Tradisional</Title>
                <hr />
                <div className="content-offlineClass">
                  <ul>
                    <li>Waktu Fleksibel</li>
                    <li>Modul Online</li>
                    <li>Kuis</li>
                    <li>Belajar Mandiri</li>
                  </ul>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
        <div className="section-timeline">
          <h1>TIMELINE</h1>
          <Row gutter={[90]} style={{ marginTop: 50 }} justify="center">
            {timelineData.map((data, index) => (
              <Col key={index}>
                <div className="div-timeline">
                  <div className="dot">
                    <p
                      style={{
                        textAlign: "center",
                        color: "white",
                        fontSize: 16,
                      }}
                    >
                      {data.no}
                    </p>
                  </div>
                  <p style={{textAlign: "center"}} className="text-timeline">
                    {data.time} <br />
                    <p style={{ fontWeight: "normal", textAlign: "center" }}>
                      {" "}
                      {data.desc}
                    </p>
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <div className="section-video">
        <h1>Video Pembelajaran</h1>
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} xl={12}>
            <div className="video-offlineClass">
              <YouTube
                videoId="G21oS6d-DtA"
                opts={opts}
                onReady={onReadyVideo}
              />
              ;
            </div>
          </Col>
          <Col xs={24} xl={12}>
            <div className="video-offlineClass-tag">
              <label className="video-offlineClass-tag-title">
                Belajar Bersama untuk Mencapai Tujuan
              </label>
              <p>Tunggu apalagi? Segera daftarkan diri Anda!</p>
            </div>
            <Button
              style={{
                width: "50%",
                padding: 10,
                height: 50,
                backgroundColor: "#FB8C00",
                fontWeight: "bold",
                color: "white",
                border: 0,
              }}
              onClick={onCheckout}
            >
              Checkout Sekarang
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default OfflineClass;
