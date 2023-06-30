import React from "react";
// import { data } from "./data";
import Container from "../UI/Container";
import NewsItem from "./NewsItem";
import s from "./s.module.css";
import { useSelector } from "react-redux";

export default function News() {
    const data = useSelector(state=> state.news.list)

    return (
        <div>
            <h2>News</h2>
            <Container>
                <div className={s.wrapper}>
                    {data.map((el) => (
                        <NewsItem key={el.id} {...el} />
                    ))}
                </div>
            </Container>
        </div>
    );
}
