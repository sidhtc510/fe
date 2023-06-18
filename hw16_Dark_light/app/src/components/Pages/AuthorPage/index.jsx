import React from "react";
import TitleOfPage from "../../UI/TitleOfPage";
import s from "./s.module.css";
import BookForSale from "../../UI/BookForSale";
import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img_person from "./images/person.png";
import img_qr from "./images/qr.png";
import MainWrapper from "../../UI/MainWrapper";

export default function AuthorPage() {
    return (
        <>
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

            <MainWrapper color_main="#F5F8FC">
                <div className={s.about_block_wrapper}>
                    <div className={s.img_wrap}>
                        <img src={img_person} alt="" />
                    </div>
                    <div className={s.info_block}>
                        <TitleOfPage className={s.span_line_to_left}>
                            About the Author
                        </TitleOfPage>
                        <p className={s.info}>
                            We believe that bookstores are essential to a
                            healthy culture. They’re where authors can connect
                            with readers, where we discover new writers, where
                            children get hooked on the thrill of reading that
                            can last a lifetime.
                        </p>
                        <div className={s.achievements}>
                            <p>
                                <p>02</p>
                                <span>Books Published</span>
                            </p>
                            <p>
                                <p>4.5</p>
                                <span>User Reviews</span>
                            </p>
                            <p>
                                <p>04</p>
                                <span>Best Seller Awards</span>
                            </p>
                        </div>

                        <div className={s.qr_block}>
                            <img src={img_qr} alt="" />
                            <div>
                                <p className={s.qr_name}>John Abraham , Ph.d</p>
                                <p>Mail: johnabraham@gmail.com</p>
                                <p>Phone: (+2) 123 545 9000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </MainWrapper>
        </>
    );
}
