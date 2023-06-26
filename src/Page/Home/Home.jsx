import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faBars,
  faChalkboardTeacher,
  faHistory,
  faHouse,
  faPhone,
  faRemove,
  faStethoscope,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";
import "./Home.css";
import Carousel from "../../Component/Carousel/Carousel";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/Home");
  };
  const goToKedokteran = () => {
    navigate("/Kedokteran");
  };
  const goToMasukPtn = () => {
    navigate("/MasukPtn");
  };
  const goToTeacher = () => {
    navigate("/Teacher");
  };
  const goToAlumni = () => {
    navigate("/Alumni");
  };

  return (
    <React.Fragment>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar-home">
          <FontAwesomeIcon
            icon={faBars}
            className="icon-bars"
            onClick={showSidebar}
          />
          {/* <div className="parent-title-nav">
          <h3 className="title-navbar-home">Matrix Indonesia</h3>
          </div> */}
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <FontAwesomeIcon icon={faRemove} className="icon-close" />
              <div className="parent-title">
                <h3 className="title-sidebar">Matrix Indonesia</h3>
              </div>
            </li>
            <div className="parent-isi1-active" onClick={() => goToHome()}>
              <h4 className="isi-sidebar">
                <FontAwesomeIcon icon={faHouse} /> Home
              </h4>
            </div>

            <div className="parent-isi2" onClick={() => goToKedokteran()}>
              <h4 className="isi-sidebar">
                <FontAwesomeIcon icon={faStethoscope} /> Bimbel Kedokteran
              </h4>
            </div>

            <div className="parent-isi3" onClick={() => goToMasukPtn()}>
              <h4 className="isi-sidebar">
                <FontAwesomeIcon icon={faUniversity} /> Masuk PTN
              </h4>
            </div>

            <div className="parent-isi4" onClick={() => goToTeacher()}>
              <h4 className="isi-sidebar">
                <FontAwesomeIcon icon={faChalkboardTeacher} /> Our Teacher
              </h4>
            </div>

            <div className="parent-isi5" onClick={() => goToAlumni()}>
              <h4 className="isi-sidebar">
                <FontAwesomeIcon icon={faHistory} /> Alumni Story
              </h4>
            </div>

            <a href="https://web.whatsapp.com/send?phone=6281215523902&text=Kak%20Eka%2C%20saya%20ingin%20tahu%20mengenai%20Program%20Edumatrix%2C%20Bimbel%20Persiapan%20Masuk%20PTN.%20Bagaimana%20penjelasan%20detail%20programnya%3F">
              <div className="parent-isi6">
                <button className="btn-sidebar">Daftar Sekarang</button>
              </div>
            </a>

            <p className="copyright">
              © All rights reserved • Edumatrix Indonesia
            </p>
          </ul>
        </nav>
      </IconContext.Provider>
      {/* ISI HOME */}
      <div className="box-home">
        <div className="content-home">
          <div>
            <h1 className="title-home">
              Bimbel Masuk Kedokteran, PTN & Kedinasan 2023
            </h1>
            <p className="desk-home">
              Bimbel Persiapan UTBK SNBT / SBMPTN, Simak UI, UTUL UGM, UM Undip
              dan Ujian Mandiri PTN. Edumatrix Indonesia - Bimbel Sukses Masuk
              FK, PTN & Kedinasan Terbaik.
            </p>

            <div className="parent-detail">
              <div className="box-detail">
                <div className="icon">
                  <span className="icon-detail">
                    <img
                      className="icon-detail"
                      src="https://cdn-icons-png.flaticon.com/512/5064/5064943.png"
                      alt=""
                    />
                    <p className="desk-icon">
                      <strong>Siswa Belajar</strong>
                      <br />
                      <span style={{ color: "rgb(0, 149, 218)" }}>
                        <strong>12.000+</strong>
                      </span>
                    </p>
                  </span>
                  <span className="icon-detail">
                    <img
                      className="icon-detail"
                      src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png"
                      alt=""
                    />
                    <p className="desk-icon">
                      <strong>Tutor Edumatrix Indonesia</strong>
                      <br />
                      <span style={{ color: "rgb(0, 149, 218)" }}>
                        <strong>5.000+</strong>
                      </span>
                    </p>
                  </span>
                  <span className="icon-detail">
                    <img
                      className="icon-detail"
                      src="https://cdn-icons-png.flaticon.com/512/4697/4697984.png"
                      alt=""
                    />
                    <p className="desk-icon">
                      <strong>Siswa Berhasil</strong>
                      <br />
                      <span style={{ color: "rgb(0, 149, 218)" }}>
                        <strong>95%</strong>
                      </span>
                    </p>
                  </span>
                  <span className="icon-detail">
                    <img
                      className="icon-detail"
                      src="https://cdn-icons-png.flaticon.com/128/10015/10015050.png"
                      alt=""
                    />
                    <p className="desk-icon">
                      <strong>
                        Tingkat Kepuasan <br />
                        Siswa
                      </strong>
                      <br />
                      <span style={{ color: "rgb(0, 149, 218)" }}>
                        <strong>9/10</strong>
                      </span>
                    </p>
                  </span>
                </div>
              </div>
            </div>
            <div className="parent-btn">
              <a href="https://web.whatsapp.com/send?phone=6281215523902&text=Kak%20Eka%2C%20saya%20ingin%20tahu%20mengenai%20Program%20Edumatrix%2C%20Bimbel%20Persiapan%20Masuk%20PTN.%20Bagaimana%20penjelasan%20detail%20programnya%3F">
                <button className="btn-daftar-viawa">
                  <FontAwesomeIcon icon={faWhatsapp} className="icon-wa" />{" "}
                  Daftar Via WhatsApp
                </button>
              </a>

              <a href="tel:+6281215523902">
                <button className="btn-daftar-viahp">
                  <FontAwesomeIcon icon={faPhone} className="icon-hp" /> Daftar
                  Via Telepon
                </button>
              </a>
            </div>
          </div>

          <img
            className="img-home"
            src="https://edukids.co.id/static/media/landing3.f1258afcf955844b1d5c.png"
            alt=""
          />
        </div>
      </div>

      {/* KEUNTUNGAN EDU */}
      <div className="parent-keunggulan">
        <div className="keunggulan-edu">
          <div className="pengajar-muda">
            <img
              className="img-keunggulan"
              src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png"
              alt=""
            />
            <h4>Pengajar Muda & Berpengalaman</h4>
          </div>
          <div className="h4-metode">
            <img
              className="img-keunggulan"
              src="https://cdn-icons-png.flaticon.com/512/993/993697.png"
              alt=""
            />
            <h4>Metode Belajar Personal</h4>
          </div>
          <div className="bahan-ajar">
            <img
              className="img-keunggulan"
              src="https://cdn-icons-png.flaticon.com/512/870/870139.png"
              alt=""
            />
            <h4>Bahan Ajar & Soal Lengkap</h4>
          </div>
          <div className="tingkat-kelulusan">
            <img
              className="img-keunggulan"
              src="https://cdn-icons-png.flaticon.com/512/4697/4697984.png"
              alt=""
            />
            <h4 className="h4-tingkat-kelulusan">Tingkat Kelulusan Tinggi</h4>
          </div>
        </div>
      </div>

      {/* SELURUH PROGRAM */}
      <div className="seluruh-program">
        <h1 className="title-program-edu">Program Edumatrix Indonesia</h1>
        <p className="desk-all-program">
          Berikut adalah program unggulan yang dirancang untuk Anda agar proses
          belajar semakin Efektif dan Efisien. <br />
          Pilih program belajar Edumatrix Indonesia lainnya yang paling kamu
          butuhkan saat ini.
        </p>
        <div>
          <Carousel />
        </div>
      </div>

      {/* JADWAL KEGIATAN */}
      <div className="box-jadwal">
        <div>
          <h1 className="title-jadwal">Jadwal Kegiatan</h1>
          <p className="desk-jadwal">
            Berikut merupakan gambaran untuk jadwal kegiatan Supercamp yang akan
            diadakan di Dekat Universitas Indonesia (Depok) dan area sekitar
            Universitas Gadjah Mada (Yogyakarta)
          </p>
        </div>

        <img
        className="img-jadwal"
          src="https://edumatrix-indonesia.com/wp-content/uploads/2022/12/Frame-636-600x757.jpg"
          alt=""
        />
        <img
        className="img-jadwal"
          src="https://edumatrix-indonesia.com/wp-content/uploads/2022/12/Frame-550-600x799.jpg"
          alt=""
        />
      </div>
    </React.Fragment>
  );
};

export default Home;
