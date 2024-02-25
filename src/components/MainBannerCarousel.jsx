// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { fetchMainBannerImg } from "../utils/fetcher";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";

export const MainBannerCard = () => {
  const [banner, setBanner] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const results = await fetchMainBannerImg();
        if (!results) {
          setErrorMessage("Sorry, no data was found");
        } else {
          setBanner(results);
        }
      } catch (error) {
        console.log(error);
        setErrorMessage("An error occurred while fetching data.");
      }
    };

    fetchedData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto overflow-x-hidden  py-3">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        centeredSlides={true}
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {banner.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={item.pcImageUrl} alt="" />
            </SwiperSlide>
          );
        })}

        {errorMessage && <p>{errorMessage}</p>}
      </Swiper>
    </div>
  );
};
