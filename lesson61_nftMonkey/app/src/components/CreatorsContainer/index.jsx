import React from "react";
import CreatorsList from "../CreatorsList";
import Container from "../UI/Container";
import nftCreators from "./nftCreators.png";
import Button from '../UI/Button'
import s from "./s.module.css";

export default function CreatorsContainer() {
    return (
        <section>
            <Container>
                <div className={s.container}>
                    <img src={nftCreators} alt="" />
                    <h1>Top Creators of the week</h1>
                    <CreatorsList />
                    <Button component={"button"} type={'general'}> Watch video</Button>
                </div>
            </Container>
        </section>
    );
}
