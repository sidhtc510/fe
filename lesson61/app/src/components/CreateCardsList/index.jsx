import React from "react";
import Container from "../UI/Container";
import nft from "./nft.png";
import Button from "../UI/Button";
import s from "./s.module.css";
import CreateCard from "../CreateCard";

export default function CreateCardsList() {
    const cards = [
        {
            id: 1,
            title: "Create Artwork",
            descr: "Create your collection, Add social links, profile & banner images, and set a secondaru sales fee",
        },
        {
            id: 2,
            title: "Upload",
            descr: "Upload your work, customize your NFTs with properties, stats, and unlockable content.",
        },
        {
            id: 3,
            title: "Listing",
            descr: "Set up and choose between auction, fixed-price listings, and declining-price listings",
        },
    ];

    return (
        <section>
            <Container>
                <div className={s.container}>
                    <img src={nft} alt="" />
                    <h1>Create & Sell Your NFTs</h1>

<div className={s.cardsContainer}>

                   {cards.map(el=> <CreateCard key={el.id} {...el} />)}
</div>


                    <div className={s.buttons_group}>
                        <Button component={"button"} type={"general"}>
                            {" "}
                            Create Now
                        </Button>
                        <Button component={"button"} type={"secondary"}>
                            {" "}
                            Watch Video
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    );
}
