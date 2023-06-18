import React from "react";
import TitleOfPage from "../../UI/TitleOfPage";
import s from "./s.module.css";
import BookForSale from "../../UI/BookForSale";
import img1 from "./images/1.png";
import img2 from "./images/2.png";
import MainWrapper from "../../UI/MainWrapper";

export default function AuthorPage() {
    return (
        <MainWrapper color_main="white">
            {/* <div className={s.author_page_wrapper}> */}
            <TitleOfPage>The Author’s Book</TitleOfPage>

            <div className={s.items_container}>
                <BookForSale
                    src={img1}
                    title="Atomic One’s"
                    price="$ 13.84 USD"
                />
                <BookForSale
                    src={img2}
                    title="The Dark Light"
                    price="$ 86.11 USD"
                />
            </div>
            {/* </div> */}
        </MainWrapper>
    );
}
