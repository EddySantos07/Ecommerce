import React, { useState, useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Thumbs } from "swiper";

// Import Swiper styles
import "swiper/swiper.scss";

// import 'swiper/swiper-bundle.css';

import "swiper/components/navigation/navigation.scss";

SwiperCore.use([Navigation, Pagination, Thumbs]);

// let DisplayProductPreview = ({ styles, changeView, currentProduct }) => {
//   // console.log(styles)

//   if (styles.length === undefined || styles.length === 0) {
//     return <div> place holder for when products api called </div>;
//   }

//   let { thumbnail_url } = currentProduct.photos[0];

//   let slides = [];

//   styles.map((product, index) => {
//     // note - this can be transformed into a helper func its repetitive
//     const { photos } = product;

//     const { thumbnail_url } = photos[0];

//     slides.push(
//       <SwiperSlide>
//         <img
//           style={{ height: "150px", width: "150px" }}
//           src={thumbnail_url}
//           onClick={(e) => {
//             changeView(e, product);
//           }}
//         ></img>
//       </SwiperSlide>
//     );
//   });

//   return (
//     <>
//       <div className="DisplayCurrentProductContainer">
//         <div className="mainSlider">
//           <Swiper
//             onSlideChange={() => console.log("slide change")}
//             slidesPerView={1}
//             // pagination={{ clickable: false }}
//             navigation={{
//               nextEl: ".swiper-button-next",
//               prevEl: ".swiper-button-prev",
//             }}
//           >
//             {slides}
//             <div className="swiper-button-next"></div>
//             <div className="swiper-button-prev"></div>
//           </Swiper>
//         </div>
//       </div>

//       <div className="DisplayProductPreviewContainer">
//         {styles.map((product, index) => {
//           const { photos } = product;

//           const { thumbnail_url } = photos[0];

//           return (
//             <img
//               style={{ height: "150px", width: "150px" }}
//               src={thumbnail_url}
//               onClick={(e) => {
//                 changeView(e, product);
//               }}
//             ></img>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// let DisplayProductPreview = ({ styles, changeView, currentProduct }) => {
//   // console.log(styles)

//   if (styles.length === undefined || styles.length === 0) {
//     return <div> place holder for when products api called </div>;
//   }

//   let { url } = currentProduct.photos[0];

//   const [thumbsSwiper, setThumbsSwiper] = useState(null);
//   const [currentStyle, setCurrentStyle] = useState({});

//   let slides = [];

//   styles.map((product, index) => {
//     // note - this can be transformed into a helper func its repetitive
//     const { photos } = product;

//     const { url } = photos[0];

//     slides.push(
//       <SwiperSlide>
//         <img
//           key={index}
//           style={{ height: "150px", width: "150px" }}
//           src={url}
//           onClick={(e) => {
//             changeView(e, product);
//           }}
//         ></img>
//       </SwiperSlide>
//     );
//   });

//   return (
//     <>
//       <div className="DisplayCurrentProductContainer">
//         <div className="mainSlider">
//           <Swiper
//             thumbs={{ swiper: thumbsSwiper }}
//             spaceBetween={0}
//             onSlideChange={() => {}}
//             slidesPerView={1}
//             // Pagination
//             // Navigation
//           >
//             {slides}
//             <div className="prev">arrow right </div>
//             <div className="next"> arrow left </div>
//           </Swiper>
//         </div>
//       </div>

//       <div className="DisplayProductPreviewContainer">
//         <Swiper
//           id="thumbs"
//           onSlideChange={(e) => {

//           }}
//           onSwiper={setThumbsSwiper}
//           spaceBetween={5}
//           slidesPerView={4}
//         >
//           {slides}
//         </Swiper>
//       </div>
//     </>
//   );
// };

let DisplayProductPreview = ({ styles, changeView, currentProduct }) => {
  // console.log(styles)

  if (styles.length === undefined || styles.length === 0) {
    return <div> place holder for when products api called </div>;
  }

  let { thumbnail_url } = currentProduct.photos[0];

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [currentStyle, setCurrentStyle] = useState({});

  let slides = [];
  let thumbs = [];

  styles.map((product, index) => {
    // note - this can be transformed into a helper func its repetitive
    const { photos } = product;

    const { thumbnail_url } = photos[0];

    slides.push(
      <SwiperSlide>
        <img
          key={index}
          alt='slides-image'
          className="MainSliderImg"
          src={thumbnail_url}
          onClick={(e) => {
            changeView(e, product);
          }}
        ></img>
      </SwiperSlide>
    );
  });

  styles.map((product, index) => {
    const { photos } = product;

    const { thumbnail_url } = photos[0];

    thumbs.push(
      <SwiperSlide>
        <img
          key={index}
          alt='thumbs-image'
          // style={{ height: "150px", width: "150px" }}
          className="thumbsImg"
          src={thumbnail_url}
          onClick={(e) => {
            changeView(e, product);
          }}
        ></img>
      </SwiperSlide>
    );
  });

  return (
    <>
      <div className="carouselContainer">
        <div className="mainSlider">
          <Swiper
            thumbs={{ swiper: thumbsSwiper }}
            spaceBetween={0}
            onSlideChange={() => {}}
            slidesPerView={1}
            // Pagination
            // Navigation
          >
            {slides}
            <div className="prev">arrow right </div>
            <div className="next"> arrow left </div>
          </Swiper>
        </div>
      </div>

      <div className="StylesContainer">
        <h2>Select A Style</h2>
        <Swiper
          id="thumbs"
          onSlideChange={(e) => {}}
          onSwiper={setThumbsSwiper}
          spaceBetween={5}
          slidesPerView={4}
        >
          {thumbs}
        </Swiper>
      </div>
    </>
  );
};

export default DisplayProductPreview;
