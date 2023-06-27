import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Slide.css";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";
import start from "../assets/start.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

function Slide() {
  return (
    <div className="container-dokter">
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
        className="swiper_container-dokter"
      >
        <SwiperSlide className="slide-3d-dokter">
          <img
            className="img-slide3d-dokter"
            src="https://img.freepik.com/free-icon/graduate_318-861761.jpg"
            alt=""
          />
          <h1 className="name-slider-dokter">Muhammad Syaugi Kherid</h1>
          <h3 className="ptn-slider-dokter">
            Lolos Pedidikan Kedokteran Universitas Indonesia
          </h3>
          <div className="inti-line-dokter">
            <hr className="line-dokter" />
          </div>
          <img className="img-starslider-dokter" src={start} alt="" />
          <p className="desk-slider-dokter">
            iya kak kesan pesan saya terhadap pembelajaran saya selama diMatrix
            itu saya belajar banyak tentang semua materi yang dibutuhkan untuk
            ujian, Ikut Matrix ini sangat seru, menambah pengalaman saat
            belajar, menambah materi yang tidak dijelaskan di sekolah, di sini
            saya mendapatkan teman-teman yang seru. Ikut Matrix ini menambah
            semangat saya dalam belajar, dan tutor yang mengajar juga mengajar
            saya dengan baik, sabar, dan memberikan jawaban dengan baik jadi
            saya dapat mengerti materi yang diajar dengan mudah.
          </p>
        </SwiperSlide>

        <SwiperSlide className="slide-3d-dokter">
          <img
            className="img-slide3d-dokter"
            src="https://img.freepik.com/free-icon/graduate_318-861761.jpg"
            alt=""
          />
          <h1 className="name-slider-dokter">Muthia Noor Hanifah</h1>
          <h3 className="ptn-slider-dokter">
            Lolos Pedidikan Kedokteran Universitas Padjadjaran
          </h3>
          <div className="inti-line-dokter">
            <hr className="line-dokter" />
          </div>
          <img className="img-starslider-dokter" src={start} alt="" />
          <p className="desk-slider-dokter">
            Belajarnya enak banget, Dengan waktu yang fleksibel jadi bisa ngejar
            materi kapan aja.Terus pengajar-pengajarnya juga enak-enak banget,
            kaka adminnya juga sabar bangeet. the best dehh! thankuso much,
            thanku kak siti, thanku kak luthfi, thankuu kak nanang! panitianya
            juga sangat friendly, top banget pokoknya!
          </p>
        </SwiperSlide>

        <SwiperSlide className="slide-3d-dokter">
          <img
            className="img-slide3d-dokter"
            src="https://img.freepik.com/free-icon/graduate_318-861761.jpg"
            alt=""
          />
          <h1 className="name-slider-dokter">Anastasya Kania Farahana</h1>
          <h3 className="ptn-slider-dokter">
            Lolos Pedidikan Kedokteran Universitas Padjadjaran
          </h3>
          <div className="inti-line-dokter">
            <hr className="line-dokter" />
          </div>
          <img className="img-starslider-dokter" src={start} alt="" />
          <p className="desk-slider-dokter">
            Aku bertemu dengan pengajar2 yang sabar banget ngajarin dan jawab
            pertanyaan aku yang ga ada abisnya. Pengajarnya juga bisa reguest
            sampai cocok. Aku sendiri baru mulai belajar di bulan januari
            tapiudah bisa ngejar beberapa materi penting yang akan diujikan
            diUTBK. Padahal tadinya aku buta banget pelajaran-pelajaran
            IPA,terutama fisika dan kimia. Setelah belajar kurang lebih 3 bulan
            bersama kakak2 yang baik dan jago2.
          </p>
        </SwiperSlide>

        <SwiperSlide className="slide-3d-dokter">
          <img
            className="img-slide3d-dokter"
            src="https://img.freepik.com/free-icon/graduate_318-861761.jpg"
            alt=""
          />
          <h1 className="name-slider-dokter">Rasagama Putra Soesanta</h1>
          <h3 className="ptn-slider-dokter">
            Lolos Pedidikan Kedokteran Universitas <br />
            Airlangga
          </h3>
          <div className="inti-line-dokter">
            <hr className="line-dokter" />
          </div>
          <img className="img-starslider-dokter" src={start} alt="" />
          <p className="desk-slider-dokter">
            Saya merasa sangat terbantu terutama untuk ngulang materi dan bahas
            soal soal. buku yang dikasih juga lengkap dan berguna untuk latihan.
            guru gurunya sangat berkualitas, serius tapi santaii jadi nyaman
            kalo belajar. untuk admin sangat informatif, setiap ada informasi
            terkait somptn dan mandiri pasti selalu dikirim, jadi ngga
            ketinggalan info. Terima kasihh.
          </p>
        </SwiperSlide>

        <SwiperSlide className="slide-3d-dokter">
          <img
            className="img-slide3d-dokter"
            src="https://img.freepik.com/free-icon/graduate_318-861761.jpg"
            alt=""
          />
          <h1 className="name-slider-dokter">Florencia Irena</h1>
          <h3 className="ptn-slider-dokter">
            Lolos Pedidikan Kedokteran Universitas Diponegoro
          </h3>
          <div className="inti-line-dokter">
            <hr className="line-dokter" />
          </div>
          <img className="img-starslider-dokter" src={start} alt="" />
          <p className="desk-slider-dokter">
            Terimakasih Matrix karena sudah membantuku untuk masuk ke
            universitas dan jurusan yang aku impikan. Belajar di Matrix sangat
            menyenangkan. Pengajarnya professional, konsultan dan staffnya
            selalu sigap membantu dalam proses belajar.Seru banget. Pokoknya
            Matrix terbaik deh.
          </p>
        </SwiperSlide>

        <SwiperSlide className="slide-3d-dokter">
          <img
            className="img-slide3d-dokter"
            src="https://img.freepik.com/free-icon/graduate_318-861761.jpg"
            alt=""
          />
          <h1 className="name-slider-dokter">Amodya Dahayu Nafira</h1>
          <h3 className="ptn-slider-dokter">
            Lolos Pedidikan Kedokter Universitas
            <br />
            UPN Veteran Jakarta
          </h3>
          <div className="inti-line-dokter">
            <hr className="line-dokter" />
          </div>
          <img className="img-starslider-dokter" src={start} alt="" />
          <p className="desk-slider-dokter">
            Cuma ikut sebentar banget karena mepet UTBK, tapisangat terbantu
            dengan semua sistemnya yang memudahkan. Mulaidari jadwalnya yang
            fleksibel, pengajarnya yang super seru dankompeten kadang ada sesi
            sharing juga kalo lagi stress hahaha,sampai kakak kakak nya yang
            selalu online kalo di wa. Alhamdulillah diterima di univ dan jurusan
            pilihan pertama ku dari awal. Terimakasih, Sukses selalu.. Thank you
            matrix
          </p>
        </SwiperSlide>

        <div className="slider-controler-dokter">
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

export default Slide;
