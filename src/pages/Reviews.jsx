import React from "react";
import { motion } from "framer-motion";
import ReviewBlock from "../components/ReviewBlock/ReviewBlock";
import photo1 from "../assets/img/kindergarden/1.jpg";
import photo2 from "../assets/img/kindergarden/6.jpg";
import photo3 from "../assets/img/kindergarden/3.jpg";
import photo4 from "../assets/img/kindergarden/4.jpg";
import photo5 from "../assets/img/kindergarden/5.jpg";
const Reviews = () => {
  return (
    <motion.div
      className="review__grid"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="review__container">
        <ReviewBlock
          name="Сулеева Вероника"
          text="Спасибо огромное Андрею фотографу за профессиональную работу высокого
          уровня. Дети получились красивые и естественные. Родители и ребята
          были в восторге от самой фотосессии и от альбомов. Выражаю
          благодарность Юле менеджеру за чёткую работу, всегда на связи, ответит
          на любой вопрос. "
          image={photo1}
        />
        <ReviewBlock
          name="Елена Лебедева"
          text="Большое спасибо за лёгкость и позитивный настрой! Андрей к каждому ребёнку умеет найти подход, фотографии получаются очень живыми, с настроением! Смело рекомендую знакомым учителям и родителям для школьных фотосессий."
          image={photo2}
        />
        <ReviewBlock
          name="Ле Нгуен хоанг Нам"
          text="0407,0396,0394,0405,0412,0420, 0421,0413 . Я выбираю эти фотографии"
          image={photo3}
        />
        <ReviewBlock
          name="Татьяна Кондратьева"
          text="Каждая фотосессия для нашей семьи волшебство! Ребенок фотографировалась с 2-х лет и каждый год ждет нового превращения. Хорошо, что фотосессия длится не долго, ребенок не устает, а получает удовольствие и игру съемки, так фото выходят живыми, красочными, настоящими! Благодарим за новые идеи и возможность быть у вас моделями🙂"
          image={photo4}
        />
        <ReviewBlock
          name="Беляеова"
          text="Просто супер!!! Очень красивая фотосессия! Прекрасные фотографии."
          image={photo5}
        />
      </div>
    </motion.div>
  );
};

export default Reviews;
