import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import logo from "./logoedu-putih.png";
import hilpi from "./hilpi.jpg";

const Footer = () => {
  return (
    <>
      <footer className="footer-distributed">
        <div className="footer-left">
          <div>
            <img className="edu-putih" src={logo} alt="" />
          </div>
          <p className="footer-links"></p>
          <p className="footer-company-name">
            © All rights reserved. • Edumatrix Indonesia
          </p>
        </div>
        <div className="footer-center">
          <div className="location-footer">
            <FontAwesomeIcon icon={faLocationDot} />
            &nbsp;<span>Bale Wangsa Residence Kav. 70,</span><br />Sendangadi, Mlati,
            Sleman, Daerah Istimewa Yogyakarta
          </div>
          <div className="phone-footer">
            <FontAwesomeIcon icon={faPhone} />
            <a className="phone-href" href="tel:+6281215523902">+62 81-215523902</a>
          </div>
          <div className="mail-footer">
            <FontAwesomeIcon icon={faEnvelope} />
            <p>
              <a href="mailto:edumatrix.id@gmail.com">&nbsp;edumatrix.id@gmail.com</a>
            </p>
          </div>
          <div className="logo-hilpi">
            <h3>Member Of</h3>
            <img src={hilpi} alt="" />
          </div>
        </div>
        <div className="footer-right">
          <p className="footer-company-about">
            <h2>Tentang Edumatrix Indonesia</h2>
            <br />
           <p className="desk-comp">
           EDUMATRIX Indonesia adalah lembaga bimbingan belajar untuk Persiapan
            Masuk Kedokteran, PTN dan Kedinasan. Program ini menjadi solusi
            terbaik untuk siswa agar sukses masuk UI ITB UGM IPB Unpad dan
            Perguruan Tinggi Negeri Favorit serta Sekolah Tinggi Kedinasan.
            Metode Belajar yang digunakan yaitu personal one on one (1 siswa 1
            mentor) dan juga tersedia Small Class. Program belajar didesain
            secara sistematis, terstruktur, terukur dan teruji. Pembelajaran
            Tematik berdasar Statistik Soal yang diujikan. Fokus menerapkan Pola
            Sukses yang sudah proven. Kami siap membantu meraih Jurusan Impian
            di PTN Favorit. Pastikan pilih partner terbaik untuk kesuksesan dan
            masa depanmu, EDUMATRIX Indonesia!
           </p>
          </p>
          <div className="footer-icons">
            <a href="https://www.facebook.com/profile.php?id=100088009847192">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.tiktok.com/@edumatrixindonesia">
              <FontAwesomeIcon icon={faTiktok} />
            </a>
            <a href="https://www.instagram.com/edumatrixindonesia">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.youtube.com/@edumatrixindonesia/featured">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
