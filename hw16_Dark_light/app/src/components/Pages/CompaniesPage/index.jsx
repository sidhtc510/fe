import React from "react";
import s from "./s.module.css";
import MainWrapper from "../../UI/MainWrapper";
import TitleOfPage from "../../UI/TitleOfPage";
import CompaniesCard from "../../UI/CompaniesCard";
import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img3 from "./images/3.png";
import img4 from "./images/4.png";
import imgTea from "./images/tea.png";

export default function CompaniesPage() {
    return (
        <>
            <MainWrapper color_main="white" className={s.trustedBlock}>
                <TitleOfPage>Trusted By The Best</TitleOfPage>
                <div className={s.cards}>
                    <CompaniesCard
                        src={img1}
                        title="Amazen Corp."
                        description=" They has been helping readers, music lovers, and
                        videophiles find quality material."
                    />

                    <CompaniesCard
                        src={img2}
                        title="Megan Books."
                        description="   We help physical bookstores manage their overstock to
                        the book inventory."
                    />

                    <CompaniesCard
                        src={img3}
                        title="Megank "
                        description=" Bookstore serving up the full spectrum of Black
                        literature and wine black books."
                    />

                    <CompaniesCard
                        src={img4}
                        title="Urban Store"
                        description="   We also carry the latest records, issues of all of your
                        favorite comic books."
                    />
                </div>
            </MainWrapper>

            <MainWrapper color_main="#1b3764" >
                <div className={s.tea_block}>
                    <div>
                        <p className={s.title}> Get Book Copy Today!</p>
                        <span className={s.yellowLine}></span>
                        <p className={s.descr}>
                            We believe that bookstores are essential to a
                            healthy culture. They’re where authors can connect
                            with readers.
                        </p>
                    </div>
                    <img src={imgTea} alt="" />
                </div>
            </MainWrapper>
        </>
    );
}
