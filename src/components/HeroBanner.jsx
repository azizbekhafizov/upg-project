import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const images = [
  "https://files.ox-sys.com/cache/original/image/c5/c8/c7/c5c8c7f735091d55b5cf77427f0131f0bdf9093d2fd1e3755671dab375b41c8e.png",
  "https://files.ox-sys.com/cache/original/image/ea/22/c1/ea22c1dca8df23e6e8dbe272e6170bb36a1d8db4e400dceb435ab918f72e935f.png",
  "https://files.ox-sys.com/cache/original/image/9d/5d/00/9d5d00686fa6319048e6130559a2d98389ee1a0b71eb3c7b64e83e3893e106ab.png",
  "https://files.ox-sys.com/cache/original/image/87/c7/3e/87c73e6c77fa74668db6d726ca4518789c55874aaa081b2c480b9891205b0cf5.png",
  "https://files.ox-sys.com/cache/original/image/cd/a0/a9/cda0a94fb0a342a591220bd02b4a70c8be96b984a815905d5a23a4cc605c4c32.png",
  "https://files.ox-sys.com/cache/original/image/f2/7d/71/f27d712ea98d2379ba43a55f4566f4402d5485edd05bc9cf519bed8c7ca0b76a.jpg",
];

const HeroBanner = () => {
  return (
    <div className="relative w-full max-w-[1400px] mx-auto mt-4 rounded-xl overflow-hidden shadow-lg">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop={true}
        className="!pb-10"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <img
              src={src}
              alt={`slide-${i}`}
              className="w-full h-[500px] object-cover"
            />
          </SwiperSlide>
        ))}

        {/* Navigation buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 w-full px-6 flex justify-between items-center z-10">
          <button className="swiper-prev w-12 h-12 rounded-full bg-pink-600 hover:bg-pink-700 text-white flex items-center justify-center shadow-md transition hidden md:flex">
            <FaArrowLeftLong size={20} />
          </button>
          <button className="swiper-next w-12 h-12 rounded-full bg-pink-600 hover:bg-pink-700 text-white flex items-center justify-center shadow-md transition hidden md:flex">
            <FaArrowRightLong size={20} />
          </button>
        </div>

        {/* Pagination */}
        <div className="swiper-pagination !bottom-4 flex justify-center gap-2" />
      </Swiper>
    </div>
  );
};

export default HeroBanner;
