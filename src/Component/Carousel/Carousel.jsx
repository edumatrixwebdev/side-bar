import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Carousel.css";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

function Carousel() {
  return (
    <div className="container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <div className="all-program">
          {/* 1 */}
          <SwiperSlide className="slide-3d">
            <img
              className="img-program"
              src="https://edumatrix-indonesia.com/wp-content/uploads/2023/01/bimbel-masuk-kedokteran-400x426.jpeg"
              alt=""
            />
            <h3 className="name-slider">Program Supercamp Kedokteran 2023</h3>
            <div className="parent-btn-chatus">
              <a href="https://web.whatsapp.com/send?phone=6281215523902&text=Halo%20Kak%20Eka,%20saya%20ingin%20daftar%20Supercamp%20Garansi%20Priority%20Masuk%20Kedokteran%202023.%20Mohon%20info%20selengkapnya%20...">
                <button className="btn-chatus">Chat Us Now!</button>
              </a>
            </div>
          </SwiperSlide>

          {/* 2 */}
          <SwiperSlide className="slide-3d">
            <img
              className="img-program"
              src="https://edumatrix-indonesia.com/wp-content/uploads/2023/01/bimbel-masuk-ptn-400x428.jpeg"
              alt=""
            />
            <h3 className="name-slider">Program Supercamp Sukses PTN 2023</h3>
            <div className="parent-btn-chatus">
              <a href="https://web.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Aulia,%20saya%20ingin%20daftar%20Supercamp%20Garansi%20Priority%20Masuk%20PTN%202023.%20Mohon%20info%20selengkapnya%20...">
                <button className="btn-chatus">Chat Us Now!</button>
              </a>
            </div>
          </SwiperSlide>

          {/* 3 */}
          <SwiperSlide className="slide-3d">
            <img
              className="img-program"
              src="https://edumatrix-indonesia.com/wp-content/uploads/2023/01/les-privat-snbt-400x427.jpeg"
              alt=""
            />
            <h3 className="name-slider">Kelas Intensif Sukses SNBT 2023</h3>
            <div className="parent-btn-chatus">
              <a href="https://web.whatsapp.com/send?phone=6281215523902&text=Halo%20Kak%20Eka,%20saya%20ingin%20daftar%20Kelas%20Intensif,%20Program%20Sukses%20Masuk%20FK%20&%20PTN%202023.%20Mohon%20info%20selengkapnya%20...">
                <button className="btn-chatus">Chat Us Now!</button>
              </a>
            </div>
          </SwiperSlide>

          {/* 4 */}
          <SwiperSlide className="slide-3d">
            <img
              className="img-program"
              src="https://edumatrix-indonesia.com/wp-content/uploads/2023/01/les-privat-utbk-400x427.jpeg"
              alt=""
            />
            <h3 className="name-slider">Privat UTBK 2023 Online & Offline</h3>
            <div className="parent-btn-chatus">
              <a href="https://web.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Aulia,%20saya%20ingin%20daftar%20Les%20Privat,%20Program%20Sukses%20Masuk%20FK%20dan%20PTN%202023.%20Mohon%20info%20selengkapnya%20...">
                <button className="btn-chatus">Chat Us Now!</button>
              </a>
            </div>
          </SwiperSlide>

          {/* 5 */}
          <SwiperSlide className="slide-3d">
            <img
              className="img-program"
              src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/Kedinasan-400x400.jpg"
              alt=""
            />
            <h3 className="name-slider">
              Program Training Camp Sekolah Kedinasan 2023
            </h3>
            <div className="parent-btn-chatus">
              <a href="https://web.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Aulia,%20saya%20ingin%20daftar%20Program%20Training%20Camp%20Sekolah%20Kedinasan%202023.%20Mohon%20info%20selengkapnya%20...">
                <button className="btn-chatus">Chat Us Now!</button>
              </a>
            </div>
          </SwiperSlide>

          {/* 6 */}
          <SwiperSlide className="slide-3d">
            <img
              className="img-program"
              src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/CPNS-2-400x400.jpg"
              alt=""
            />
            <h3 className="name-slider">Bimbel Tes CPNS 2023</h3>
            <div className="parent-btn-chatus">
              <a href="https://web.whatsapp.com/send?phone=6281215523902&text=Halo%20Kak%20Eka,%20saya%20ingin%20daftar%20Bimbel%20Tes%20CPNS%202023.%20Mohon%20info%20selengkapnya%20...">
                <button className="btn-chatus">Chat Us Now!</button>
              </a>
            </div>
          </SwiperSlide>

          {/* 7 */}
          <SwiperSlide className="slide-3d">
            <img
              className="img-program"
              src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/AKMIL-1-400x400.jpg"
              alt=""
            />
            <h3 className="name-slider">Program Training Camp AKMIL 2023</h3>
            <div className="parent-btn-chatus">
              <a href="https://web.whatsapp.com/send?phone=6281215523902&text=Halo%20Kak%20Eka,%20saya%20ingin%20daftar%20Program%20Training%20Camp%20AKMIL%202023.%20Mohon%20info%20selengkapnya%20...">
                <button className="btn-chatus">Chat Us Now!</button>
              </a>
            </div>
          </SwiperSlide>

          {/* 8 */}
          <SwiperSlide className="slide-3d">
            <img
              className="img-program"
              src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/AKPOL-1-400x400.jpg"
              alt=""
            />
            <h3 className="name-slider">Program Training Camp AKPOL 2023</h3>
            <div className="parent-btn-chatus">
              <a href="https://web.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Aulia,%20saya%20ingin%20daftar%20Program%20Training%20Camp%20AKPOL%202023.%20Mohon%20info%20selengkapnya%20...">
                <button className="btn-chatus">Chat Us Now!</button>
              </a>
            </div>
          </SwiperSlide>

          {/* 9 */}
          <SwiperSlide className="slide-3d">
            <img
              className="img-program"
              src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/SD-400x400.jpg"
              alt=""
            />
            <h3 className="name-slider">Program Belajar Privat SD 2023</h3>
            <div className="parent-btn-chatus">
              <a href="https://web.whatsapp.com/send?phone=6281215523902&text=Halo%20Kak%20Eka,%20saya%20ingin%20daftar%20Program%20Belajar%20Privat%20SD%202023.%20Mohon%20info%20selengkapnya%20...">
                <button className="btn-chatus">Chat Us Now!</button>
              </a>
            </div>
          </SwiperSlide>

          {/* 10 */}
          <SwiperSlide className="slide-3d">
            <img
              className="img-program"
              src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/SMP-400x400.jpg"
              alt=""
            />
            <h3 className="name-slider">Program Belajar Privat SMP 2023</h3>
            <div className="parent-btn-chatus">
              <a href="https://web.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Aulia,%20saya%20ingin%20Program%20Belajar%20Privat%20SMP%202023.%20Mohon%20info%20selengkapnya%20...">
                <button className="btn-chatus">Chat Us Now!</button>
              </a>
            </div>
          </SwiperSlide>

          {/* 11 */}
          <SwiperSlide className="slide-3d">
            <img
              className="img-program"
              src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/TK-400x400.jpg"
              alt=""
            />
            <h3 className="name-slider">Program Belajar Privat TK 2023</h3>
            <div className="parent-btn-chatus">
              <a href="https://web.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Aulia,%20saya%20ingin%20daftar%20Program%20Belajar%20Privat%20TK%202023.%20Mohon%20info%20selengkapnya%20...">
                <button className="btn-chatus">Chat Us Now!</button>
              </a>
            </div>
          </SwiperSlide>

          {/* 12 */}
          <SwiperSlide className="slide-3d">
            <img
              className="img-program"
              src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/SMA-400x400.jpg"
              alt=""
            />
            <h3 className="name-slider">Program Belajar Privat SMA 2023</h3>
            <div className="parent-btn-chatus">
              <a href="https://web.whatsapp.com/send?phone=6281215523902&text=Halo%20Kak%20Eka,%20saya%20ingin%20daftar%20Les%20Privat,%20Program%20Belajar%20Private%20SMA%202023.%20Mohon%20info%20selengkapnya%20...">
                <button className="btn-chatus">Chat Us Now!</button>
              </a>
            </div>
          </SwiperSlide>

          {/* 13 */}
          <SwiperSlide className="slide-3d">
            <img
              className="img-program"
              src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/Bahasa-Asing-1-400x400.jpg"
              alt=""
            />
            <h3 className="name-slider">Bimbel Privat Bahasa Asing 2023</h3>
            <div className="parent-btn-chatus">
              <a href="https://web.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Aulia,%20saya%20ingin%20daftar%20Bimbel%20Privat%20Bahasa%20Asing%202023.%20Mohon%20info%20selengkapnya%20...">
                <button className="btn-chatus">Chat Us Now!</button>
              </a>
            </div>
          </SwiperSlide>

          {/* 14 */}
          <SwiperSlide className="slide-3d">
            <img
              className="img-program"
              src="https://edumatrix-indonesia.com/wp-content/uploads/2023/02/OSN-SD-400x400.jpg"
              alt=""
            />
            <h3 className="name-slider">Bimbel Privat OSN SD</h3>
            <div className="parent-btn-chatus">
              <a href="https://web.whatsapp.com/send?phone=6281215523902&text=Halo%20Kak%20Aulia,%20saya%20ingin%20daftar%20Bimbel%20Privat%20OSN%20SD%202023.%20Mohon%20info%20selengkapnya%20...">
                <button className="btn-chatus">Chat Us Now!</button>
              </a>
            </div>
          </SwiperSlide>

          {/* 15 */}
          <SwiperSlide className="slide-3d">
            <img
              className="img-program"
              src="https://edumatrix-indonesia.com/wp-content/uploads/2023/02/OSN-SMP-400x400.jpg"
              alt=""
            />
            <h3 className="name-slider">Program Privat OSN SMP 2023</h3>
            <div className="parent-btn-chatus">
              <a href="https://web.whatsapp.com/send?phone=6281215523902&text=Halo%20Kak%20Eka,%20saya%20ingin%20daftar%20Program%20Private%20OSN%20SMP%202023.%20Mohon%20info%20selengkapnya%20...">
                <button className="btn-chatus">Chat Us Now!</button>
              </a>
            </div>
          </SwiperSlide>

          {/* 16 */}
          <SwiperSlide className="slide-3d">
            <img
              className="img-program"
              src="https://edumatrix-indonesia.com/wp-content/uploads/2023/02/OSN-SMA-400x400.jpg"
              alt=""
            />
            <h3 className="name-slider">Program Privat OSN SMA 2023</h3>
            <div className="parent-btn-chatus">
              <a href="https://web.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Aulia,%20saya%20ingin%20daftar%20Program%20Private%20OSN%20SMA%202023.%20Mohon%20info%20selengkapnya%20...">
                <button className="btn-chatus">Chat Us Now!</button>
              </a>
            </div>
          </SwiperSlide>
          
          {/* 17 */}
          <SwiperSlide className="slide-3d">
            <img
              className="img-program"
              src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/Matematika-400x400.jpg"
              alt=""
            />
            <h3 className="name-slider">Bimbel Privat OSN Matematika untuk SD</h3>
            <div className="parent-btn-chatus">
              <a href="https://web.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Aulia,%20saya%20ingin%20daftar%20Program%20Private%20OSN%20Matematika%20SD%202023.%20Mohon%20info%20selengkapnya%20...">
                <button className="btn-chatus">Chat Us Now!</button>
              </a>
            </div>
          </SwiperSlide>
          
          {/* 18 */}
          <SwiperSlide className="slide-3d">
            <img
              className="img-program"
              src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/IPA-400x400.jpg"
              alt=""
            />
            <h3 className="name-slider">Bimbel Privat OSN IPA untuk SD</h3>
            <div className="parent-btn-chatus">
              <a href="https://web.whatsapp.com/send?phone=6281215523902&text=Halo%20Kak%20Eka,%20saya%20ingin%20daftar%20Bimbel%20Privat%20OSN%20IPA%20untuk%20SD%20Mohon%20info%20selengkapnya%20...">
                <button className="btn-chatus">Chat Us Now!</button>
              </a>
            </div>
          </SwiperSlide>

           {/* 19 */}
           <SwiperSlide className="slide-3d">
            <img
              className="img-program"
              src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/Mahasiswa-Nasional-dan-Internasional-400x400.jpg"
              alt=""
            />
            <h3 className="name-slider">Tutor for International School Students</h3>
            <div className="parent-btn-chatus">
              <a href="https://web.whatsapp.com/send?phone=6281215523902&text=Halo%20Kak%20Eka,%20saya%20ingin%20daftar%20Tutor%20for%20International%20School%20Students%202023.%20Mohon%20info%20selengkapnya%20...">
                <button className="btn-chatus">Chat Us Now!</button>
              </a>
            </div>
          </SwiperSlide>

           {/* 20 */}
           <SwiperSlide className="slide-3d">
            <img
              className="img-program"
              src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/TK-SD-SMP-SMA-400x400.jpg"
              alt=""
            />
            <h3 className="name-slider">Les Privat TK, SD, SMP & SMA</h3>
            <div className="parent-btn-chatus">
              <a href="https://web.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Aulia,%20saya%20ingin%20daftar%20Les%20Privat%20TK,%20SD,%20SMP%20dan%20SMA.%20Mohon%20info%20selengkapnya%20...">
                <button className="btn-chatus">Chat Us Now!</button>
              </a>
            </div>
          </SwiperSlide>

          {/* 21 */}
          <SwiperSlide className="slide-3d">
            <img
              className="img-program"
              src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/Les-Privat-komputer-Basic-400x400.jpg"
              alt=""
            />
            <h3 className="name-slider">Bimbel Privat Komputer Basic</h3>
            <div className="parent-btn-chatus">
              <a href="https://web.whatsapp.com/send?phone=6281215523902&text=Halo%20Kak%20Eka,%20saya%20ingin%20daftar%20Program%20Les%20Privat%20Komputer%20dan%20IT%20basic..%20Mohon%20info%20selengkapnya%20...">
                <button className="btn-chatus">Chat Us Now!</button>
              </a>
            </div>
          </SwiperSlide>

          {/* 22 */}
          <SwiperSlide className="slide-3d">
            <img
              className="img-program"
              src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/Les-Privat-Gitar-400x400.jpg"
              alt=""
            />
            <h3 className="name-slider">Bimbel Privat Gitar</h3>
            <div className="parent-btn-chatus">
              <a href="https://web.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Aulia,%20saya%20ingin%20daftar%20Program%20Les%20Privat%20Gitar.%20Mohon%20info%20selengkapnya%20...">
                <button className="btn-chatus">Chat Us Now!</button>
              </a>
            </div>
          </SwiperSlide>
        </div>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
          <div className="swiper-button-next slider-arrow">
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default Carousel;
