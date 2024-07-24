import { Typography, Box } from "@mui/joy";
import * as React from "react";
import MainCard from "../Cards/MainCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import api from "../../axios/FetchAxios";

export default function Trending() {
  const [topRated, setTopRated] = React.useState([]);

  React.useEffect(() => {
    const fetchTopRated = async () => {
      try {
        const response = await api.get("/trending/all/week", {
          params: { language: "en-US" },
        });
        setTopRated(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTopRated();
  }, []);

  return (
    <Box>
      <Typography
        level="title-lg"
        sx={{
          color: "#fff",
          fontWeight: "normal",
          mb: 2,
        }}
        gutterBottom
      >
        Trending Now
      </Typography>

      <Swiper
        slidesPerView={1}
        spaceBetween={8}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {topRated?.map((item, index) => (
          <SwiperSlide key={index}>
            <MainCard key={index} item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
