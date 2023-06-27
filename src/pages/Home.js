import React from "react";
import Presentation from "../components/Presentation";
import presimage1 from "../images/presimage1.jpg";
import Slider from "../components/Slider";
import sliderimage1 from "../images/sliderimage1.jpg";
import img25 from "../images/img25.jpg";
import img26 from "../images/img26.jpg";

export default function Home() {
  return (
    <>
      <main>
        <Presentation imageSrc={presimage1} />
        <Slider
          imageSrc={sliderimage1}
          title="Первый"
          summary="Первые магазины самообслуживания в городе"
        />
        <Slider
          imageSrc={img25}
          title="Кафе и Бары"
          summary="Во многих магазинах открывались кафе и бары для привлечения клиентов"
          flipped={true}
        />
        <Slider
          imageSrc={img26}
          title="Более 100 магазинов"
          summary="Спортивные и хозяйственные товары, гастрономы, одежда и мебель"
        />
      </main>
    </>
  );
}
