import React from "react";
import Container from "../UI/Container";
import s from "./s.module.css";
import Button from '../UI/Button'

export default function Discover() {
    return (
        <Container>
            <div className={s.wrapper}>
                <div className={s.descr}>
                    <div className={s.discover_info}>
                        <h2>Discover, Sell & Collect Rare NFTs</h2>
                        <p>
                            Digital marketplace for crypto collections and
                            non-fungible tokens (NFTs)
                        </p>
                        <Button className={s.btn} component={"a"} type={'general'}> Discover Now </Button>
                    </div>

                    <div className={s.achievements}>
                        <p>
                            35k+ <span>Artworks</span>
                        </p>
                        <p>
                            15k+ <span>Auctions</span>
                        </p>
                        <p>
                            25k+ <span>Artists</span>
                        </p>
                    </div>
                </div>


                <div className={s.discover_img}></div>
            </div>
        </Container>
    );
}
