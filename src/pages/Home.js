import React from "react";
import Presentation from "../components/Presentation";
import ScrollTop from "../components/ScrollTop";
import presimage1 from "../images/presimage1.jpg";
import Slider from "../components/Slider";
import sliderimage1 from "../images/sliderimage1.jpg";
import sliderimage2 from "../images/sliderimage2.jpg";
import img8 from "../images/img8.jpg";

export default function Home() {
  return (
    <>
      <main>
        <Presentation imageSrc={presimage1} />
        <Slider
          imageSrc={sliderimage2}
          title="Первый"
          summary="Одни из первых магазинов самообслуживания в СССР"
        />
        <Slider
          imageSrc={sliderimage1}
          title="Кафе и Бары"
          summary="Самое вкусное мороженое и коктейли для посетителей"
          flipped={true}
        />
        <Slider
          imageSrc={img8}
          title="Аутентичный дизайн"
          summary="Неповторимый и уникальный стиль, созданный художниками торга"
        />
        <ScrollTop />
      </main>
    </>
  );
}
