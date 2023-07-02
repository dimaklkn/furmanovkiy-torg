import React from "react";
import Presentation from "../components/Presentation";
import ScrollTop from "../components/ScrollTop";
import presimage1 from "../images/presimage1.jpg";
import Slider from "../components/Slider";
import sliderimage1 from "../images/sliderimage1.jpg";
import sliderimage2 from "../images/sliderimage2.jpg";
import sliderimage3 from "../images/sliderimage3.jpg";
import sliderimage4 from "../images/sliderimage4.jpg";
import sliderimage5 from "../images/sliderimage5.jpg";

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
          imageSrc={sliderimage4}
          title="Аутентичный дизайн"
          summary="Неповторимый и уникальный стиль, созданный художниками торга"
        />
        <Slider
          imageSrc={sliderimage3}
          title="Широкий ассортимент"
          summary="Продукты, мебель, спортивные и хозяйственные товары"
          flipped={true}
        />
        <Slider
          imageSrc={sliderimage5}
          title="Отзывчивый и квалифицированный персонал"
          summary="Обучение торговым профессиям внутри организации"
        />
        <ScrollTop />
      </main>
    </>
  );
}
