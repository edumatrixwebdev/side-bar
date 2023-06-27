import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChalkboardTeacher,
  faCircleCheck,
  faHistory,
  faHouse,
  faPhone,
  faRemove,
  faStethoscope,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";
import "./Kedokteran.css";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import dokter from "../../Component/assets/dokter.png";
import Slide from "../../Component/Slide/Slide";
import Footer from "../../Component/Footer/Footer";

const Kedokteran = () => {
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
        <div className="navbar">
          <FontAwesomeIcon
            icon={faBars}
            className="icon-bars"
            onClick={showSidebar}
          />
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <FontAwesomeIcon icon={faRemove} className="icon-close" />
              <div className="parent-title">
                <h3 className="title-sidebar">Matrix Indonesia</h3>
              </div>
            </li>
            <div className="parent-isi1" onClick={() => goToHome()}>
              <h4 className="isi-sidebar">
                <FontAwesomeIcon icon={faHouse} /> Home
              </h4>
            </div>

            <div
              className="parent-isi2-active"
              onClick={() => goToKedokteran()}
            >
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
          </ul>
        </nav>
      </IconContext.Provider>

      {/* BOX DOKTER */}
      <div className="box-dokter">
        <div className="content-dokter">
          <div>
            <h1 className="title-dokter">
              Bimbel Masuk Kedokteran by Edumatrix Indonesia
            </h1>
            <p className="desk-dokter">
              Bimbel Masuk Kedokteran by EDUMATRIX INDONESIA merupakan program
              belajar dengan sistem karantina dan privat yang berfokus pada
              akselerasi kemampuan siswa dalam mengerjakan soal dan mendapatkan
              skor terbaik sehingga memperbesar kemungkinan untuk Lolos Masuk FK
              PTN Favorit Indonesia.
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
              <a href="https://web.whatsapp.com/send?phone=6281215523902&text=Halo Kak%20Eka%2C%20saya%20ingin%20tahu%20mengenai%20Program%20Edumatrix%2C%20Bimbel%20Persiapan%20Masuk%20Kedokteran.%20Bagaimana%20penjelasan%20detail%20programnya%3F">
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

          <img className="img-dokter" src={dokter} alt="" />
        </div>
      </div>

      {/* PAKET PRIORITY */}
      <div className="parent-card">
        <div className="card-prioriti">
          <div className="header-prioriti">
            <h2 className="title-prioriti">Supercamp Garansi Priority Sukses Masuk Kedokteran 2023</h2>
          </div>
          <div className="list-prioriti">
            <li className="list-dokter">
              <FontAwesomeIcon
                className="icon-list-dokter"
                icon={faCircleCheck}
              />{" "}
              Sistem Belajar Privat 1 on 1
            </li>
            <li className="list-dokter">
              <FontAwesomeIcon
                className="icon-list-dokter"
                icon={faCircleCheck}
              />{" "}
              Belajar 5 Sesi per Hari Selama 4-6 Minggu
            </li>
            <li className="list-dokter">
              <FontAwesomeIcon
                className="icon-list-dokter"
                icon={faCircleCheck}
              />{" "}
              Room Hotel 1 kamar 1 Siswa
            </li>
            <li className="list-dokter">
              <FontAwesomeIcon
                className="icon-list-dokter"
                icon={faCircleCheck}
              />{" "}
              Penginapan saat tes SNBT
            </li>
            <li className="list-dokter">
              <FontAwesomeIcon
                className="icon-list-dokter"
                icon={faCircleCheck}
              />{" "}
              Modul Belajar SNBT, UTUL UGM, & SIMAK UI
            </li>
            <li className="list-dokter">
              <FontAwesomeIcon
                className="icon-list-dokter"
                icon={faCircleCheck}
              />{" "}
              Worksheet Prediktif Edumatrix Indonesia
            </li>
            <li className="list-dokter">
              <FontAwesomeIcon
                className="icon-list-dokter"
                icon={faCircleCheck}
              />{" "}
              Assessment Pra-Karantina
            </li>
            <li className="list-dokter">
              <FontAwesomeIcon
                className="icon-list-dokter"
                icon={faCircleCheck}
              />{" "}
              Free Live Class Pra-Karantina
            </li>
            <li className="list-dokter">
              <FontAwesomeIcon
                className="icon-list-dokter"
                icon={faCircleCheck}
              />{" "}
              Try Out Setiap Hari
            </li>
            <li className="list-dokter">
              <FontAwesomeIcon
                className="icon-list-dokter"
                icon={faCircleCheck}
              />{" "}
              Tryout Real SNBT, UTUL UGM, & SIMAK UI
            </li>
            <li className="list-dokter">
              <FontAwesomeIcon
                className="icon-list-dokter"
                icon={faCircleCheck}
              />{" "}
              Workshop TPS Mastery
            </li>
            <li className="list-dokter">
              <FontAwesomeIcon
                className="icon-list-dokter"
                icon={faCircleCheck}
              />{" "}
              Workshop Math Master
            </li>
            <li className="list-dokter">
              <FontAwesomeIcon
                className="icon-list-dokter"
                icon={faCircleCheck}
              />{" "}
              Motivation Training
            </li>
            <li className="list-dokter">
              <FontAwesomeIcon
                className="icon-list-dokter"
                icon={faCircleCheck}
              />{" "}
              Progress Report Setiap Minggu
            </li>
            <li className="list-dokter">
              <FontAwesomeIcon
                className="icon-list-dokter"
                icon={faCircleCheck}
              />{" "}
              Coaching Session - Sukses Masuk FK
            </li>
            <li className="list-dokter">
              <FontAwesomeIcon
                className="icon-list-dokter"
                icon={faCircleCheck}
              />{" "}
              Konsultasi Akademik Personal Khusus Jurusan Kedokteran
            </li>
            <li className="list-dokter">
              <FontAwesomeIcon
                className="icon-list-dokter"
                icon={faCircleCheck}
              />{" "}
              Tips & Trik Lulus Tes SNBT, UTUL UGM & Simak UI 2023
            </li>
            <li className="list-dokter">
              <FontAwesomeIcon
                className="icon-list-dokter"
                icon={faCircleCheck}
              />{" "}
              Free Biaya Pendaftaran SNBT 2023
            </li>
            <li className="list-dokter">
              <FontAwesomeIcon
                className="icon-list-dokter"
                icon={faCircleCheck}
              />{" "}
              Free Biaya Pendaftaran Simak UI/UTUL UGM/UM Undip
            </li>
            <li className="list-dokter">
              <FontAwesomeIcon
                className="icon-list-dokter"
                icon={faCircleCheck}
              />{" "}
              Analisa dan Evaluasi Hasil Belajar setiap hari
            </li>
            <li className="list-dokter">
              <FontAwesomeIcon
                className="icon-list-dokter"
                icon={faCircleCheck}
              />{" "}
              Antar Jemput lokasi SNBT Yogyakarta
            </li>
            <li className="list-dokter">
              <FontAwesomeIcon
                className="icon-list-dokter"
                icon={faCircleCheck}
              />{" "}
              Free Konsultasi dan Pendampingan Ujian Mandiri
            </li>
            <li className="list-dokter">
              <FontAwesomeIcon
                className="icon-list-dokter"
                icon={faCircleCheck}
              />{" "}
              Souvenir Supercamp Edumatrix
            </li>
            <li className="list-dokter">
              <FontAwesomeIcon
                className="icon-list-dokter"
                icon={faCircleCheck}
              />{" "}
              Akomodasi, Makan & Laundry saat karantina
            </li>
            <li className="list-dokter">
              <FontAwesomeIcon
                className="icon-list-dokter"
                icon={faCircleCheck}
              />{" "}
              Dibimbing s.d Tembus Fakultas Kedokteran
            </li>
          </div>
          <div className="parent-btn-prio">
            {/* <button className="btn-paket-prioriti">Pilih Paket</button> */}
            <a
              className="a-pilih-paket"
              href="https://web.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Aulia,%20saya%20ingin%20daftar%20Supercamp%20Garansi%20Priority%20Masuk%20Kedokteran%202023.%20Mohon%20info%20selengkapnya%20..."
            >
              <button className="btn-pilih-paket">
                <span className="top"></span>
                <span className="right"></span>
                <h3>Pilih Paket</h3>
                <span className="bottom"></span>
                <span className="left"></span>
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="univ-dokter">
        <img
          className="img-univ-dokter"
          src="https://edumatrix-indonesia.com/wp-content/uploads/2022/12/Group-560.png"
          alt=""
        />
      </div>

      <div className="parent-slide">
        <Slide />
      </div>

      <div className="daftar-end">
        <h3 className="title-daftar-end">Ayo Daftar Edumatrix</h3>
        <div className="group-btn-daftarend">
          <a href="https://web.whatsapp.com/send?phone=6281215523902&text=Halo Kak%20Eka%2C%20saya%20ingin%20tahu%20mengenai%20Program%20Edumatrix%2C%20Bimbel%20Persiapan%20Masuk%20Kedokteran.%20Bagaimana%20penjelasan%20detail%20programnya%3F">
            <button className="btn-wa-end">
              <FontAwesomeIcon icon={faWhatsapp} /> Daftar Via WhatsApp
            </button>
          </a>
          <a href="tel:+6281215523902">
            <button className="btn-hp-end">
              <FontAwesomeIcon icon={faPhone} /> Daftar Via WhatsApp
            </button>
          </a>
        </div>
        <p className="desk-daftar-end">Dibimbing sampai lulus PTN Impian !</p>
      </div>

      <Footer />

      {/* FLOAT CALL */}
      <div className="box-wa">
        <a href="https://web.whatsapp.com/send?phone=6281215523902&text=Halo Kak%20Eka%2C%20saya%20ingin%20tahu%20mengenai%20Program%20Edumatrix%2C%20Bimbel%20Persiapan%20Masuk%20PTN.%20Bagaimana%20penjelasan%20detail%20programnya%3F">
          <button className="btn-wa">
            <a
              className="wa"
              href="https://web.whatsapp.com/send?phone=6281215523902&text=Halo Kak%20Eka%2C%20saya%20ingin%20tahu%20mengenai%20Program%20Edumatrix%2C%20Bimbel%20Persiapan%20Masuk%20PTN.%20Bagaimana%20penjelasan%20detail%20programnya%3F"
            >
              <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
            </a>
          </button>
        </a>
        <a href="tel:+6281215523902">
          <button className="btn-call">
            <a href="tel:+6281215523902" className="call">
              <FontAwesomeIcon icon={faPhone} /> Telepon
            </a>
          </button>
        </a>
      </div>
      
    </React.Fragment>
  );
};

export default Kedokteran;
