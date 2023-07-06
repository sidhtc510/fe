import React from "react";
import s from "./s.module.css";
import mc from "./1.png";
import vs from "./2.png";
import Button from "../UI/Button";
import { useDispatch } from "react-redux";
import { add } from "../../store/slice/dataSlice";

export default function Card() {
    const dispatch = useDispatch();
    const handler = (e) => {
        e.preventDefault();
        const data = {
            hName: e.target.hName.value,
            hNumber: e.target.hNumber.value,
            mm: e.target.mm.value,
            yy: e.target.yy.value,
            cvc: e.target.cvc.value,
        };
        dispatch(add(data));
    };

    return (
        <form onSubmit={handler} className={s.form}>
            <div className={s.frontSide}>
                <input
                    type="text"
                    placeholder="Holder of card"
                    className={s.hName}
                    name="hName"
                />
                <input
                    type="text"
                    placeholder="Number of card"
                    className={s.hNumber}
                    name="hNumber"
                />
                <div className={s.dateBlock}>
                    <p>VALID THRU</p>
                    <input
                        type="number"
                        placeholder="MM"
                        className={s.mm}
                        name="mm"
                    />
                    <span>/</span>
                    <input
                        type="number"
                        placeholder="YY"
                        className={s.yy}
                        name="yy"
                    />
                    <div className={s.icons}>
                        <img src={mc} alt="" />
                        <img src={vs} alt="" />
                    </div>
                </div>
            </div>

            <div className={s.backSide}>
                <div className={s.strip}></div>
                <input
                    type="password"
                    name="cvc"
                    placeholder="CVC"
                    className={s.cvc}
                />
            </div>

            <Button>Send</Button>
        </form>
    );
}
