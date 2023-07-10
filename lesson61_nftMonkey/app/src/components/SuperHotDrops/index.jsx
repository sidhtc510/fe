import React from "react";
import Container from "../UI/Container";
import mp from "./mp.png";
import s from "./s.module.css";
import Button from "../UI/Button";
import Monkeys from "../Monkeys";

export default function SuperHotDrops() {
    const buttons = [
        { id: 1, title: "Music" },
        { id: 2, title: "Art" },
        { id: 3, title: "Sport" },
        { id: 4, title: "Photography" },
        { id: 5, title: "Virtual Reality" },
        { id: 6, title: "Videos" },
        { id: 7, title: "More" },
    ];

    return (
        <section>
            <Container>
                <div className={s.container}>
                    <img src={mp} alt="" />
                    <h1>Super Hot Drops</h1>

                    <div className={s.buttons}>
                        {buttons.map((el) => (
                            <Button
                                className={s.btn}
                                component={"button"}
                                type={"third"}
                                key={el.id}
                            >
                                {el.title}
                            </Button>
                        ))}
                    </div>

                    <Monkeys />

                    <Button component={"button"} type={"third"}>
                        {" "}
                        View More
                    </Button>
                </div>
            </Container>
        </section>
    );
}
