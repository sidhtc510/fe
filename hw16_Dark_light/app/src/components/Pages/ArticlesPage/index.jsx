import React from "react";
import s from "./s.module.css";
import img_person from "./images/person.png";
import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img3 from "./images/3.png";
import TitleOfPage from "../../UI/TitleOfPage";
import MainWrapper from "../../UI/MainWrapper";
import PersonImgWithBorder from "../../UI/PersonImgWithBorder";
import PersonInArticles from "../../UI/PersonInArticles";

export default function ArticlesPage() {
    return (
        <>
            <MainWrapper color_main="white">
                <TitleOfPage>What Will You Learn?</TitleOfPage>
                <div className={s.WhatWillYouLearn_wrapper}>
                    <div className={s.fourBlocks}>
                        <div>
                            <span>01</span>
                            <p>
                                Use HDFS & Map Reduce for storing & analyzing
                                data at scale.
                            </p>
                        </div>
                        <div>
                            <span>02</span>
                            <p>
                                Consume streaming data using Spark Streaming,
                                Flink, and Storm.
                            </p>
                        </div>
                        <div>
                            <span>03</span>
                            <p>
                                Choose an appropriate data storage technology
                                for your application
                            </p>
                        </div>
                        <div>
                            <span>04</span>
                            <p>
                                Analyze non-relational data using HBase,
                                Cassandra, and MongoDB.
                            </p>
                        </div>
                    </div>
                    <PersonImgWithBorder img={img_person} />
                </div>
            </MainWrapper>

            <MainWrapper color_main="#F4F8FF" className={s.articlesResources}>
                <TitleOfPage>Articles & Resources</TitleOfPage>
                <div className={s.persons}>
                    <PersonInArticles
                        img={img1}
                        title="Significant reading has more info number"
                        description="Override the digital divide with additional clickthroughs from DevOps for real-time schemas."
                        date="October 6, 2021"
                    />
                    <PersonInArticles
                        img={img2}
                        title="Many variations of pass majority have suffered"
                        description="Capitalize on low-hanging fruit to identify a ballpark value-added activity to beta test."
                        date="October 6, 2021"
                    />
                    <PersonInArticles
                        img={img3}
                        title="Words which don’t look even slightly believable"
                        description="Podcasting operational change management inside of workflows to establish a framework."
                        date="October 6, 2021"
                    />
                </div>
            </MainWrapper>
        </>
    );
}
