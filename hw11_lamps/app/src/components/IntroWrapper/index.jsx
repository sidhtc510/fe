import React from "react";
import s from "./IntroWrapperStyle.module.css"
import imgSvet from "../../data/images/botle.png"

export default function IntroWrapper() {
  return (
    
    <div className={s.introWrapper}>
      <nav>
        <div className={s.navWrapper}>
          <a href="#" className={s.navLink}>
            Светильники
          </a>
          <a href="#" className={s.navLink}>
            Лампочки
          </a>
          <a href="#" className={s.navLink}>
            Декоративные
          </a>
          <a href="#" className={s.navLink}>
            Профессиональные
          </a>
          <a href="#" className={s.navLink}>
            Контакты
          </a>
          <a href="tel:+380999999999" className={[s.navLink, s.aButton].join(" ")}>связаться</a>
        </div>
      </nav>
      <div className={s.introInfo}>
        <div className={s.introText}>
          <h1 className={s.introTitle}>Светильники</h1>
          <p className={s.introDesrc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            perferendis nihil cumque obcaecati ab velit reiciendis eligendi
            maiores, accusantium optio ullam mollitia distinctio neque quaerat?
            Cupiditate illum nemo cum porro.
          </p>
          <button className={s.introBtn}>Подробнее</button>
        </div>
        <img className={s.introImg} src={imgSvet} alt="" />
      </div>
    </div>
    
  );
}
