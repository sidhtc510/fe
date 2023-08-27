import s from "./s.module.css";

import React from "react";
import Button from "../UI/Button";
import Wrapper from "../UI/Wrapper";
import CategoriesContainer from "../CategoriesContainer";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CatalogBanner() {
    const categories = useSelector((state) => state.categories);
    const fourCategoryItems = categories.list.slice(0, 4);

    return (
        <Wrapper>
            <div className={s.catBanWrapper}>
                <div className={s.titleButton}>
                    <p>Catalog</p>
                    <Link to="/categories">
                        <Button className="transp">All categories</Button>
                    </Link>
                </div>
                <CategoriesContainer categories={fourCategoryItems} />
            </div>
        </Wrapper>
    );
}
