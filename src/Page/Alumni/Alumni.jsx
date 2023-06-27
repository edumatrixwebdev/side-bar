import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTurnRight,
  faBars,
  faChalkboardTeacher,
  faHistory,
  faHouse,
  faPhone,
  faRemove,
  faStethoscope,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";
import "./Alumni.css";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import grad from "../../Component/assets/grad.png";
import Slide from "../../Component/Slide/Slide";
import Footer from "../../Component/Footer/Footer";

const Alumni = () => {
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

            <div className="parent-isi5-active" onClick={() => goToAlumni()}>
              <h4 className="isi-sidebar">
                <FontAwesomeIcon icon={faHistory} /> Alumni Story
              </h4>
            </div>
          </ul>
        </nav>
      </IconContext.Provider>

      {/* ISI ALUMNI */}
      <div className="box-alumni">
        <div className="content-alumni">
          <div>
            <h1 className="title-alumni">
              Success Stories Alumni Edumatrix Indonesia
            </h1>
            <p className="desk-alumni">
              Tim kami telah membantu siswa diterima di berbagai jurusan dan PTN
              Impian mereka. Saat ini adalah waktu yang tepat untuk memulai
              perjuangan. Dengan berbekal kesungguhan dan kerja keras kita ikuti
              jejak alumni yang telah sukses masuk PTN Favorit Indonesia.
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
              <a href="https://web.whatsapp.com/send?phone=6281215523902&text=Halo Kak%20Eka%2C%20saya%20ingin%20tahu%20mengenai%20Program%20Edumatrix%2C%20Bagaimana%20penjelasan%20detail%20programnya%3F">
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

          <img className="img-alumni" src={grad} alt="" />
        </div>
      </div>

      <div className="run-text">
        <marquee scrollamount="20">
          <h2>
            Raih Kampus Impianmu, Bersama Edumatrix Indonesia | Raih Kampus
            Impianmu, Bersama Edumatrix Indonesia | Raih Kampus Impianmu,
            Bersama Edumatrix Indonesia | Raih Kampus Impianmu, Bersama
            Edumatrix Indonesia | Raih Kampus Impianmu, Bersama Edumatrix
            Indonesia | Raih Kampus Impianmu, Bersama Edumatrix Indonesia | Raih
            Kampus Impianmu, Bersama Edumatrix Indonesia | Raih Kampus Impianmu,
            Bersama Edumatrix Indonesia | Raih Kampus Impianmu, Bersama
            Edumatrix Indonesia | Raih Kampus Impianmu, Bersama Edumatrix
            Indonesia | Raih Kampus Impianmu, Bersama Edumatrix Indonesia | Raih
            Kampus Impianmu, Bersama Edumatrix Indonesia
          </h2>
        </marquee>
      </div>

      <div className="success-story">
        <div className="list-story">
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            FK UI Internasional
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            Hukum UI Internasional
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            FK UGM Internasional
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            Hukum UGM Internasional
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            Managemen UGM Internasional
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            HI UGM Internasional
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            Akuntansi Undip Internasional
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            Farmasi ITB Internasional
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            Teknik Sipil ITS Internasional
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            Teknik Kimia ITS Internasional
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            FK UI
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            FK UGM
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            FKG UGM
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            FKH UGM
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            FKG UB
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            FK UNDIP
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            FKG UNAIR
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            FK UNPAD
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            FKG UNPAD
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            FK UNSOED
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            Hukum UI
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            FK UNSYIAH
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            FK UIN Jakarta
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            FK UIN Jakarta
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            FK UNHAS
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            FK UNSRI
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            FK UNLAM
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            FK UNAND
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            FK Universitas Palangkaraya
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            Psikologi UI
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            Akuntansi UI
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            Gizi UI
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            Teknik Metalurgi UI
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            Ekonomi UI
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            STEI ITBTeknik Industri UI
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            FTTM ITB
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            SBM ITB
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            Arsitektur ITB
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            Teknik Industri dan Pertanian IPB
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            Biokimia IPB
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            Managemen UB
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            Statistik UB
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            Hukum UB
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            Teknik Informatika UNDIP
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            Hukum UNDIP
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            Akuntansi UNAIR
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            Psikologi UNPAD
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            Teknik Elektro ITS
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            Teknik Perkapalan ITS
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            Informatika ITS
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            Informatika UPN Veteran Jakarta
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            Teknik Industri UNS
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            Hukum USU
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            PGSD UNJ
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            Ilmu Ekonomi UGM
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            Akuntansi UI
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            Ilmu Ekonomi UI
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            Komunikasi UI
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            Arsitektur UI
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            Arsitektur Unair
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            Teknik Industri UI
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            Hukum UI
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            Psikologi UI
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            Fasilkom UI
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            Matematika UI
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            Biologi UI
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            Akuntansi UGM
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            Teknik Geofisika ITB
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            Tek Geofisika ITS
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            Tek Perkapalan ITS
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            Teknik Geologi UNDIP
          </li>
          <li className="li-story">
            <FontAwesomeIcon className="icon-story" icon={faArrowTurnRight} />{" "}
            dan PTN Terbaik lainnya
          </li>
        </div>
        <div>
          <h1 className="title-story">Success Stories</h1>
          <p className="desk-story">
            Tim kami telah membantu siswa diterima di berbagai jurusan berikut :
          </p>
        </div>
      </div>

      <div className="parent-img-alumni">
        <h1 className="title-alumni-story">Ikuti Jejak Sukses Alumni</h1>
        <p className="desk-alumni-story">
          Saat ini adalah waktu yang tepat untuk memulai perjuangan. Dengan
          berbekal kesungguhan dan kerja keras kita ikuti jejak alumni yang
          telah sukses masuk PTN Favorit Indonesia.
        </p>
        <div className="all-img-alumni">
          <img
            className="inti-img-alumni"
            src="https://edumatrix-indonesia.com/wp-content/uploads/2022/12/siswa-bimbel-snbt.jpg"
            alt=""
          />
          <img
            className="inti-img-alumni"
            src="https://edumatrix-indonesia.com/wp-content/uploads/2022/12/siswa-bimbel-snbt-2.jpg"
            alt=""
          />
          <img
            className="inti-img-alumni"
            src="https://edumatrix-indonesia.com/wp-content/uploads/2022/12/siswa-bimbel-snbt-3.jpg"
            alt=""
          />
          <img
            className="inti-img-alumni"
            src="https://edumatrix-indonesia.com/wp-content/uploads/2022/12/siswa-bimbel-snbt-4.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="slide-alumni">
        <h1>Let`s Make A Thing to Remember</h1>
        <p>
          Anda bisa seperti mereka, bersama EDUMATRIX Indonesia kita wujudkan
          cita-citamu mendapatkan PTN Impian
        </p>

        <Slide />
      </div>

      <div className="univ-alumni">
        <img
          className="img-inti-univ"
          src="https://edumatrix-indonesia.com/wp-content/uploads/2022/12/Group-560.png"
          alt=""
        />
      </div>

      <div className="daftar-end">
        <h3 className="title-daftar-end">Ayo Daftar Edumatrix</h3>
        <div className="group-btn-daftarend">
          <a href="https://web.whatsapp.com/send?phone=6281215523902&text=Halo Kak%20Eka%2C%20saya%20ingin%20tahu%20mengenai%20Program%20Edumatrix%2C%20Bimbel%20Persiapan%20Masuk%20PTN.%20Bagaimana%20penjelasan%20detail%20programnya%3F">
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
              href="https://web.whatsapp.com/send?phone=6281215523902&text=HaloKak%20Eka%2C%20saya%20ingin%20tahu%20mengenai%20Program%20Edumatrix%2C%20Bimbel%20Persiapan%20Masuk%20PTN.%20Bagaimana%20penjelasan%20detail%20programnya%3F"
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

export default Alumni;
