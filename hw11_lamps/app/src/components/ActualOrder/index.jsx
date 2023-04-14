import React from "react";
import s from "./ActualOrderStyle.module.css";
import arrow from "../../data/images/arrow.png";
import Rectangle1 from "../../data/images/Rectangle1.png";
import Rectangle2 from "../../data/images/Rectangle2.png";
import Rectangle3 from "../../data/images/Rectangle3.png";
import Rectangle4 from "../../data/images/Rectangle4.png";
import { useState } from "react";

export default function ActualOrder({modalState, setModalState}) {
  
  
  return (
    <>
      <div className={s.actual_order}>
        <h2 className={s.actual_order_title}>Актуальные спецпредложения</h2>
        <div className={s.actual_order_wrapper}>
          <div className={s.actual_order_item}  onClick={()=>{setModalState(!modalState)
          const contentInModal = document.querySelector(".contentInModal")
          contentInModal.innerText = "order one"
        }}>
            <img
              className={s.actual_order_item_image}
              src={Rectangle1}
              alt=""
              />
            <div className={s.actual_order_item_title_wrapper}>
              <p className={s.actual_order_item_title}>Светильники для дома</p>
              <img src={arrow} alt="" />
            </div>
          </div>

          <div className={s.actual_order_item}  onClick={()=>{setModalState(!modalState)
              const contentInModal = document.querySelector(".contentInModal")
              contentInModal.innerText = "order two"
            }}>
            <img
              className={s.actual_order_item_image}
              src={Rectangle2}
              alt=""
              />
            <div className={s.actual_order_item_title_wrapper}>
              <p className={s.actual_order_item_title}>
                Оборудование профессионалов
              </p>
              <img src={arrow} alt="" />
            </div>
          </div>

          <div className={s.actual_order_item}  onClick={()=>{setModalState(!modalState)
              const contentInModal = document.querySelector(".contentInModal")
              contentInModal.innerText = "order three"
          }}>
              
            <p className={s.new}>NEW</p>
            <img
              className={s.actual_order_item_image}
              src={Rectangle3}
              alt=""
            />
            <div className={s.actual_order_item_title_wrapper}>
              <p className={s.actual_order_item_title}>
                Декоративные светильники
              </p>
              <img src={arrow} alt="" />
            </div>
          </div>

          <div className={s.actual_order_item}  onClick={()=>{setModalState(!modalState)
               const contentInModal = document.querySelector(".contentInModal")
               contentInModal.innerText = "order four"
          }}>
            <p className={s.new}>NEW</p>
            <img
              className={s.actual_order_item_image}
              src={Rectangle4}
              alt=""
            />
            <div className={s.actual_order_item_title_wrapper}>
              <p className={s.actual_order_item_title}>
                Промышленные светильники
              </p>
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
