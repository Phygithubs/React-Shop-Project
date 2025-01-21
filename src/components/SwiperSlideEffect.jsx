import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function SwiperSlideEffect() {
  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      speed={1600}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination, EffectFade, Autoplay]}
      className="mySwiper w-100 h-100"
      autoplay={{ delay: 2600 }}
    >
      <SwiperSlide>
        <div className="position-absolute z-3 top-50 start-50 translate-middle text-light text-center font-poppins">
          <h3>Special for Today</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic provident eligendi tenetur, autem molestiae necessitatibus!</p>
          <button className="btn btn-outline-light rounded-0 px-4 fs-5 py-2 mt-3">
            Shop Now
          </button>
        </div>
        <img
          style={{ filter: "brightness(65%)" }}
          src="image/carousel-1.jpg"
          alt=""
          className="w-100 h-100 object-fit-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <div className="position-absolute z-3 top-50 start-50 translate-middle text-light text-center font-poppins">
          <h3>Special for Today</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolorum dicta culpa sint consectetur odit.</p>
          <button className="btn btn-outline-light rounded-0 px-4 fs-5 py-2 mt-3">
            Shop Now
          </button>
        </div>
        <img
          style={{ filter: "brightness(65%)" }}
          src="image/carousel-2.jpg"
          alt=""
          className="w-100 h-100 object-fit-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <div className="position-absolute z-3 top-50 start-50 translate-middle text-light text-center font-poppins">
          <h3>Special for Today</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum magnam sit, perspiciatis esse labore non.</p>
          <button className="btn btn-outline-light rounded-0 px-4 fs-5 py-2 mt-3">
            Shop Now
          </button>
        </div>
        <img
          style={{ filter: "brightness(65%)" }}
          src="image/carousel-3.jpg"
          alt=""
          className="w-100 h-100 object-fit-cover"
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default SwiperSlideEffect;

