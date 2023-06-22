import React from "react";
import s from "./s.module.css";
import monkey_img from "./monkey.png";
import dots from "./dots.png";
import eth from "./eth.png";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEllipsis} from '@fortawesome/free-solid-svg-icons'


export default function CreatorsItem({ name, price }) {
    return (
        <div className={s.item}>
            <img src={monkey_img} alt="" />
            <div className={s.namePrice}>
                <p>{name}</p>
                <p><img src={eth} alt="" />{price}</p>
            </div>
            {/* <img src={dots} alt="" /> */}

            <FontAwesomeIcon icon={faEllipsis} />
        </div>
    );
}
